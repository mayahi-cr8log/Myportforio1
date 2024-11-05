document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.l-header__hamburger');
    const navDrawer = document.querySelector('.l-header__nav-drawer');
    if (hamburger && navDrawer) {
        hamburger.addEventListener('click', function () {
            navDrawer.classList.toggle('active');
        });
    }
    
    const elements = document.querySelectorAll('.title-icon, .icon,.c-title,.c-icon');// .title-iconか.iconを持つすべての要素を取得

    elements.forEach(element => {
        const shadowOffset = element.offsetWidth * 0.1; // 各要素の幅に基づいてオフセットを計算
        element.style.boxShadow = `${shadowOffset}px ${shadowOffset}px 5px rgba(0, 0, 0, 0.5)`;
    });


});
  