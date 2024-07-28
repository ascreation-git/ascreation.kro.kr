/*
    ======================================
    + Default Javascript
    @ Team. PLAYWORLD 2024. 07. 29.
    ======================================
*/

// 이용자의 페이지 위치에 따른 네비게이션 속성 변경
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.header-contents__nav');
const navHomeLinks = document.querySelectorAll('.header-contents__nav[href="/"]')

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('nav-active');
        link.removeAttribute('href');
    }
});

// 이용자가 메인 페이지를 위와 다른 방법으로 접속한 경우
if (currentPath === '/index.html' || currentPath === '/index') {
    navHomeLinks.forEach(homeLink => {
        homeLink.classList.add('nav-active');
        homeLink.removeAttribute('href');
    });
}