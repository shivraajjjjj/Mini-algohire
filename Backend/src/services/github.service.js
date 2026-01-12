import axios from 'axios';
import {parseRepoUrl} from '../utils/parser.js';
import '../config/env.js';

export const githubClient = axios.create({
    baseURL: process.env.GITHUB_API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
    }
});

const IMPORTANT_FILES = [
    "package.json",
    "requirements.txt",
    "pyproject.toml",
    "pom.xml",
    "build.gradle",
    "build.gradle.kts",
    "Dockerfile",
    "README.md",
];

export async function fetchRepoData(repoUrl) {
    if(!process.env.GITHUB_API_BASE_URL||!process.env.GITHUB_TOKEN){
        throw new Error('GitHub API configuration is missing');
    }
    const {owner, repo} = parseRepoUrl(repoUrl);    
try{
    const [meta,languages,contents]= await Promise.all([
        fatchRepoMeta(owner, repo),
        fatchRepoLanguages(owner, repo),
        fatchRepoContents(owner, repo)
    ]);

    const files =  await fetchImpotentFiles(owner, repo, contents);

    const result = {
        meta,
        languages,
        contents,
        files
    };

    return result;
    }catch (err){
        if (err.response && err.response.status === 404) {
            throw new Error('Repository not found');
        }
        if (err.response && err.response.status === 403) {  
            throw new Error('API rate limit exceeded');
        }
        throw err;
    }
}

export async function fetchManifest(owner, repo, filePath) {
  const res = await githubClient.get(
    `/repos/${owner}/${repo}/contents/${filePath}`
  );
  return res.data; // MUST be file object
}

export async function fetchFolderContents(owner, repo, path) {
  const res = await githubClient.get(
    `/repos/${owner}/${repo}/contents/${path}`
  );
  return res.data; // array
}


async function fatchRepoMeta(owner, repo) {
    return (await githubClient.get(`repos/${owner}/${repo}`)).data;
}

async function fatchRepoLanguages(owner, repo) {
    return (await githubClient.get(`repos/${owner}/${repo}/languages`)).data;
}

async function fatchRepoContents(owner, repo) {
    return (await githubClient.get(`repos/${owner}/${repo}/contents`)).data;
}

async function fetchImpotentFiles(owner, repo, contents) {
    const files = {};

    for (const item of contents){
        if(IMPORTANT_FILES.includes(item.name)){
            const res = await githubClient.get(item.url);
            files[item.name] = res.data;
        }
    }

    return files;
}

