// 获取箭头元素
const scrollArrow = document.getElementById('scroll-arrow');

// 监听页面滚动事件
window.addEventListener('scroll', function() {
    // 判断页面是否滚动超过20px
    if (window.pageYOffset > 20) {
        // 如果滚动超过20px，隐藏箭头
        scrollArrow.style.opacity = '0';
        scrollArrow.style.visibility = 'hidden';
    } else {
        // 如果滚动不超过20px，显示箭头
        scrollArrow.style.opacity = '1';
        scrollArrow.style.visibility = 'visible';
    }
});
