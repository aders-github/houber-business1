let lastScrollY = window.scrollY; // 마지막 스크롤 위치 저장
const header = document.querySelector('header'); // header 요소 선택

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; // 현재 스크롤 위치

    if (currentScrollY > 0) {
        // 스크롤이 내려갔을 때
        header.style.background = `#00000033`;
        header.style.backdropFilter = `blur(10px)`;
    } else {
        // 스크롤이 최상단일 때
        header.style.background = `none`;
        header.style.backdropFilter = `none`;
    }

    if (currentScrollY > lastScrollY) {
        // 스크롤을 내릴 때
        header.style.transform = 'translateY(-100%)'; // 화면 위로 숨김
    } else {
        // 스크롤을 올릴 때
        header.style.transform = 'translateY(0)'; // 원래 위치로 복귀
    }

    lastScrollY = currentScrollY; // 마지막 스크롤 위치 업데이트
});
document.addEventListener('DOMContentLoaded', () => {
    const popUpElements = document.querySelectorAll('.popUp'); // popUp 클래스 요소 선택

    const handleScroll = () => {
        popUpElements.forEach((element) => {
            const rect = element.getBoundingClientRect(); // 요소의 위치 정보 가져오기
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // 화면에 보이는지 확인

            if (isVisible) {
                element.classList.add('show'); // 화면에 보이면 show 클래스 추가
            }
        });
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트에 핸들러 추가
    handleScroll(); // 초기 로드 시에도 실행
});
const mobileNav = document.getElementById('mobile-nav');
function menuOn() {
    mobileNav.classList.add('active');
}
function menuOff() {
    mobileNav.classList.remove('active');
}
const langDrop = document.getElementById('lang-dropdown');
const langBtn = document.querySelector('.lang-setting');
function langSet() {
    // 토글
    langDrop.style.display = (langDrop.style.display === 'flex') ? 'none' : 'flex';
}
document.addEventListener('click', function (e) {
    const isClickInside = langDrop.contains(e.target) || langBtn.contains(e.target);
    if (!isClickInside) {
      langDrop.style.display = 'none';
    }
  });