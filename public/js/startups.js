document.addEventListener('DOMContentLoaded', () => {
    const layers = [
        { element: document.querySelector('#s2'), delay: 300 },
        { element: document.querySelector('#s1'), delay: 600 },
        { element: document.querySelector('#s3'), delay: 600 },
        { element: document.querySelector('#s4'), delay: 900 },
    ];

    const animateLayers = () => {
        layers.forEach((layer, index) => {
            setTimeout(() => {
                layer.element.style.transform = 'translate(-50%, -50%) scale(1)'; // 원래 위치로 이동 및 크기 복원
                layer.element.style.opacity = '1'; // 보이도록 설정
            }, layer.delay); // 각 카드의 딜레이 적용
        });
    };

    animateLayers(); // 애니메이션 시작
});
document.addEventListener('DOMContentLoaded', () => {
    const layer = document.querySelector('.intro-flex');

    // 초기 상태 설정
    layer.style.opacity = '0';
    layer.style.transition = 'opacity 1s ease'; // 부드러운 애니메이션 설정

    // 애니메이션 시작
    setTimeout(() => {
        layer.style.opacity = '1'; // opacity를 1로 변경하여 보이도록 설정
    }, 100); // 약간의 딜레이 후 애니메이션 시작
});

const targetSection = document.getElementById('examples');
const contentEls = document.querySelectorAll('.example-content');
let triggered = false;

// 부드러운 커스텀 스크롤 함수
function smoothScrollTo(element, targetScrollTop, duration = 1500) {
    const start = element.scrollTop;
    const change = targetScrollTop - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 부드러운 이징 함수
        const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        element.scrollTop = start + change * ease;

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

// 중간쯤 들어오면 트리거
window.addEventListener('scroll', () => {
    const rect = targetSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (!triggered && rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
        triggered = true;

        contentEls.forEach(el => {
            const originalScroll = el.scrollTop;
            const moveAmount = 100;

            // 먼저 스크롤 업
            smoothScrollTo(el, originalScroll + moveAmount, 1500);

            // 그 후 다시 복귀 (조금 더 느리게)
            setTimeout(() => {
                smoothScrollTo(el, originalScroll, 2000);
            }, 1600); // 약간 더 기다렸다가
        });
    }
});


const exampleNav = document.querySelectorAll('.example-nav div');
const example1 = document.getElementById('example-content-1');
const example2 = document.getElementById('example-content-2');
const example3 = document.getElementById('example-content-3');
function exampleChange(num, div) {
    // 모든 네비게이션 요소에서 active 제거
    exampleNav.forEach(el => {
        el.classList.remove('active');
    });

    // 선택한 요소에 active 추가
    div.classList.add('active');

    // 모든 example display none 처리
    example1.style.display = 'none';
    example2.style.display = 'none';
    example3.style.display = 'none';

    // num에 따라 해당 example만 display flex
    if (num === 1) {
        example1.style.display = 'flex';
    } else if (num === 2) {
        example2.style.display = 'flex';
    } else if (num === 3) {
        example3.style.display = 'flex';
    }
}