import { REPO_URL, RELEASES_URL } from "./constants";

export interface ReleaseInfo {
  version: string;
  tagName: string;
  releasesUrl: string;
  publishedAt: string;
  assets: {
    aarch64Dmg: string | null;
    x64Dmg: string | null;
  };
}

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
}

const FALLBACK: ReleaseInfo = {
  version: "0.23.1",
  tagName: "v0.23.1",
  releasesUrl: RELEASES_URL,
  publishedAt: new Date().toISOString(),
  assets: {
    aarch64Dmg: null,
    x64Dmg: null,
  },
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/marckraw/divergence/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return FALLBACK;

    const data: GitHubRelease = await res.json();

    const aarch64Dmg =
      data.assets.find((a) => a.name.includes("aarch64") && a.name.endsWith(".dmg"))
        ?.browser_download_url ?? null;

    const x64Dmg =
      data.assets.find((a) => a.name.includes("x64") && a.name.endsWith(".dmg"))
        ?.browser_download_url ?? null;

    const version = data.tag_name.replace(/^v/, "");

    return {
      version,
      tagName: data.tag_name,
      releasesUrl: data.html_url || `${REPO_URL}/releases/tag/${data.tag_name}`,
      publishedAt: data.published_at,
      assets: { aarch64Dmg, x64Dmg },
    };
  } catch {
    return FALLBACK;
  }
}
