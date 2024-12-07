// GitHub Repository Information
const owner = "HuaPi2d"; // 替换为仓库拥有者
const repo = "HuaPi2d"; // 替换为仓库名称
const fileName = "HuaPi2D_SetUp.msi"; // 替换为文件名

// DOM Elements
const versionInfo = document.getElementById("version-info");
const downloadButton = document.getElementById("download-button");
const speedUpDownloadButton = document.getElementById("speed-up-download-button");

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
            speedUpDownloadButton.disabled = false;

            // Generate accelerated URL
            const originalUrl = asset.browser_download_url;
            const acceleratedUrl = originalUrl.replace(
                "https://github.com",
                "https://gh.api.99988866.xyz/github.com"
            );

            // Set Button Action (bind only once)
            downloadButton.onclick = () => {
                window.location.href = originalUrl;
            };
            speedUpDownloadButton.onclick = () => {
                console.log("Accelerated URL:", acceleratedUrl);
                window.location.href = acceleratedUrl;
            };
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

