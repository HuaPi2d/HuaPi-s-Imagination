document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // 获取表单数据
    const resourceName = document.getElementById("resourceName").value;
    const resourceLink = document.getElementById("resourceLink").value;
    const resourceDescription = document.getElementById("resourceDescription").value;

    // 创建资源项
    const resourceItem = document.createElement("li");
    resourceItem.innerHTML = `
        <h3>${resourceName}</h3>
        <p>${resourceDescription}</p>
        <a href="${resourceLink}" target="_blank">查看资源</a>
    `;

    // 添加到资源列表
    document.getElementById("resourceContainer").appendChild(resourceItem);

    // 清空表单
    document.getElementById("uploadForm").reset();
});
