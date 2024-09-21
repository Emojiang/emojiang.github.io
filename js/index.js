// 获取箭头元素
const scrollArrow = document.getElementById('scroll-arrow');

// 监听页面滚动事件
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;

    // 判断页面是否滚动到底部
    if (scrollHeight + windowHeight >= documentHeight) {
        scrollArrow.style.opacity = '0';
        scrollArrow.style.visibility = 'hidden';
    } else {
        scrollArrow.style.opacity = '1';
        scrollArrow.style.visibility = 'visible';
    }
});
