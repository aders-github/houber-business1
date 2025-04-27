document.addEventListener('DOMContentLoaded', () => {
    const layers = [
        { element: document.querySelector('#s1'), delay: 900 },
        { element: document.querySelector('#s2'), delay: 600 },
        { element: document.querySelector('#s3'), delay: 300 },
        { element: document.querySelector('#s4'), delay: 0 },
    ];

    const animateLayers = () => {
        layers.forEach((layer, index) => {
            setTimeout(() => {
                layer.element.style.transform = 'translate(-50%, 0) scale(1)'; // 원래 위치로 이동 및 크기 복원
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