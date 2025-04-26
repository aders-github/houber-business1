window.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 스크롤 차단 함수
  const disableScroll = (e) => e.preventDefault();
  const enableScroll = () => {
    window.removeEventListener('wheel', disableScroll, { passive: false });
    window.removeEventListener('touchmove', disableScroll, { passive: false });
    window.removeEventListener('keydown', keydownBlock, { passive: false });
  };
  const keydownBlock = (e) => {
    const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];  // 키 코드 배열
    if (keys.includes(e.keyCode)) {
      e.preventDefault();
    }
  };

  // 스크롤 막기
  window.addEventListener('wheel', disableScroll, { passive: false });
  window.addEventListener('touchmove', disableScroll, { passive: false });
  window.addEventListener('keydown', keydownBlock, { passive: false });

  document.body.classList.add('no-scroll');
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  const logo = document.querySelector('#animation-intro .logo');
  const txt = document.querySelector('#animation-intro .txt');
  const section = document.getElementById('animation-intro');

  logo.classList.add('show');
  setTimeout(() => {
    txt.classList.add('show');
  }, 300);

  setTimeout(() => {
    logo.classList.add('hide');
    txt.classList.add('hide');
  }, 1600);

  // 애니메이션 후 2400ms 뒤에 fade-out 적용하고 스크롤 허용
  setTimeout(() => {
    section.classList.add('fade-out');
    document.body.classList.remove('no-scroll');
    enableScroll();  // 🔥 스크롤 허용

    // 이 시점에 wheel 이벤트 리스너 추가
    window.addEventListener("wheel", function (e) {
      const scrollTop = window.scrollY;
      const isInIntro = scrollTop < window.innerHeight;

      if (!locked && isInIntro) {
        e.preventDefault();

        if (e.deltaY > 0) {
          // 아래로 스크롤 → 다음 섹션으로 이동
          locked = true;
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });

          setTimeout(() => {
            locked = false;
          }, 1000);
        } else {
          // 위로 스크롤 → 맨 위로
          locked = true;
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setTimeout(() => {
            locked = false;
          }, 1000);
        }
      }
    }, { passive: false });

  }, 2400);

  setTimeout(() => {
    section.style.display = 'none';
  }, 3000);
});

let locked = false;
