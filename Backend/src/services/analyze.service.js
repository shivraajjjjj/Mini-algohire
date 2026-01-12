import { fetchRepoData,fetchManifest,fetchFolderContents } from "./github.service.js";
import { extractSignals } from "./signal.service.js";
import { MANIFEST_FILES } from "./scanner.service.js";
import { scoreRepository } from "../engines/scoring.engine.js";
import { detectToyProject } from "./toyDetector.js";
export async function analyzeRepository(repoUrl) {
    const repoData =  await fetchRepoData(repoUrl);

    const projectSignals = {
  repo: {
    owner: repoData.meta.owner.login,
    name: repoData.meta.name,
    url: repoUrl
  },
  languages: Object.keys(repoData.languages || {}),
  runtime: new Set(),
  frameworks: new Set(),
  databases: new Set(),
  buildFiles: new Set(),
  structure: repoData.contents
    .filter(c => c.type === "dir")
    .map(c => c.name),
  flags: new Set(),
  roles: [],
  metadata: {
    isToy: false,
    hasReadme: !!repoData.files["README.md"],
    isMonorepo: false,
    supported: true
  }
};
    const isMonorepo = await detectMonorepo(repoData);

    if (isMonorepo) {
    return {
        supported: false,
        metadata: { isMonorepo: true },
        message: "Monorepos are not supported in V1"
    };
    }

    const manifests = [];

    // root
    for (const file of repoData.contents) {
    if (file.type === "file" && MANIFEST_FILES.includes(file.name)) {
        manifests.push({ path: "/", manifestName: file.name });
    }
    }

    // top-level dirs
    for (const dir of repoData.contents.filter(c => c.type === "dir")) {
    const folderContents = await fetchFolderContents(
        repoData.meta.owner.login,
        repoData.meta.name,
        dir.name
    );

    for (const file of folderContents) {
        if (file.type === "file" && MANIFEST_FILES.includes(file.name)) {
        manifests.push({
            path: `${dir.name}/`,
            manifestName: file.name
        });
        }
    }
    }
    
    for (const manifest of manifests) {
        const filePath =
            manifest.path === "/"
            ? manifest.manifestName
            : `${manifest.path}${manifest.manifestName}`;

        const file = await fetchManifest(
            repoData.meta.owner.login,
            repoData.meta.name,
            filePath
        );

        extractSignals({
            manifestName: manifest.manifestName,
            content: file.content
        }, projectSignals);
        }

    projectSignals.runtime = [...projectSignals.runtime];
    projectSignals.frameworks = [...projectSignals.frameworks];
    projectSignals.databases = [...projectSignals.databases];
    projectSignals.buildFiles = [...projectSignals.buildFiles];
    projectSignals.flags = [...projectSignals.flags];

    const isToy = detectToyProject(projectSignals);
    if (isToy) {
        projectSignals.metadata.isToy = true;
    }
    // Compute roles (reuses scoring engine; currently re-fetches the repo)
    projectSignals.roles = await scoreRepository(projectSignals);

    return {
      supported: true,
      projectSignals
    };
}

async function detectMonorepo(repoData) {
  let manifestDirs = 0;

  for (const item of repoData.contents) {
    if (item.type !== "dir") continue;

    const folderContents = await fetchFolderContents(
      repoData.meta.owner.login,
      repoData.meta.name,
      item.name
    );

    const hasManifest = folderContents.some(
      f => f.type === "file" && MANIFEST_FILES.includes(f.name)
    );

    if (hasManifest) manifestDirs++;
    if (manifestDirs > 1) return true;
  }

  return false;
}
