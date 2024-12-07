// GitHub Repository Information
const owner = "HuaPi2d"; // 替换为仓库拥有者
const repo = "HuaPi2d"; // 替换为仓库名称
const fileName = "HuaPi2D_SetUp.msi";

// DOM Elements
const versionInfo = document.getElementById("version-info");
const downloadButton = document.getElementById("download-button");

// Fetch Latest Release from GitHub
async function fetchLatestRelease() {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("无法获取最新版本信息");
        }
        const data = await response.json();

        // Get Version Info and Asset URL
        const latestVersion = data.tag_name;
        const asset = data.assets.find(asset => asset.name === fileName);

        if (asset) {
            versionInfo.textContent = `最新版本: ${latestVersion}`;
            downloadButton.disabled = false;
            downloadButton.addEventListener("click", () => {
                window.location.href = asset.browser_download_url;
            });
        } else {
            versionInfo.textContent = "未找到可用的安装文件。";
        }
    } catch (error) {
        console.error(error);
        versionInfo.textContent = "检查版本时出错。";
    }
}

// Initialize
fetchLatestRelease();
