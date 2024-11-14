document.addEventListener("mousemove", function (e) {
  // 使用 requestAnimationFrame 限制更新频率
  requestAnimationFrame(() => {
    const fragment = document.createDocumentFragment(); // 创建文档碎片
    const body = document.querySelector("body");
    const flower = document.createElement("div");
    flower.classList.add("pointer-flower");

    // 获取鼠标位置
    const x = e.clientX; // 使用 clientX 和 clientY 而不是 offsetX 和 offsetY
    const y = e.clientY;

    // 设置位置和尺寸
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;
    const size = Math.random() * 80;
    flower.style.width = `${10 + size}px`;
    flower.style.height = `${10 + size}px`;

    // 设置旋转
    const rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;

    // 将 flower 添加到文档碎片中
    fragment.appendChild(flower);

    // 将文档碎片添加到 body 中
    document.body.appendChild(fragment);

    // 设置删除
    setTimeout(() => flower.remove(), 1000);
  });
});
