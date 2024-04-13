
                                    // 轮播图


 function switchImage(element) {
    const inputs = document.querySelectorAll('input[name="position"]');
    const box = document.querySelector('.box');
    const items = document.querySelectorAll('.item');
  
    // 获取当前选中的输入
    const currentInput = inputs.item(inputs.length - 1);
    const currentPosition = parseInt(currentInput.value);
  
    // 循环切换图片
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.style.transition = 'none';
      item.style.zIndex = -1;
  
      // 将当前位置的图片移动到前面
      if (i === currentPosition - 1) {
        item.style.transition = 'all 0.25s linear';
        item.style.zIndex = 0;
      }
  
      // 稍微延迟后切换图片
      setTimeout(() => {
        item.style.transition = 'all 0.25s linear';
      }, i * 50);
    }
  
    // 更新位置
    currentInput.checked = false;
    inputs[(currentPosition + 1) % inputs.length].checked = true;
  }
  
  // 初始化切换
  switchImage();
  
  // 每隔3秒切换一次图片
  setInterval(switchImage, 3000);

                                  // 点赞计数器

        const likeButton = document.getElementById("like-button");
        const likeCount = document.getElementById("like-count");
        let likeTotal = 0;

        likeButton.addEventListener("click", function() {
            likeTotal++;
            likeCount.textContent = likeTotal;
        });