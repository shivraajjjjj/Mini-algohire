export const MANIFEST_FILES = [
    "package.json",
    "requirements.txt",
    "pyproject.toml",
    "pom.xml",
    "build.gradle",
    "build.gradle.kts",
    "CMakeLists.txt"
  ];
export function scanManifests({ contents }) {

  const projects = [];

  // root
  const rootManifests = contents
    .filter(i => i.type === "file" && MANIFEST_FILES.includes(i.name))
    .map(i => i.name);

  if (rootManifests.length) {
    projects.push({ path: "/", manifests: rootManifests });
  }

  // one level deep (NO GITHUB CALLS)
  contents
    .filter(i => i.type === "dir")
    .forEach(dir => {
      const manifests = (dir.children || [])
        .filter(
          c => c.type === "file" && MANIFEST_FILES.includes(c.name)
        )
        .map(c => c.name);

      if (manifests.length) {
        projects.push({
          path: `${dir.name}/`,
          manifests
        });
      }
    });

  return projects;
}
