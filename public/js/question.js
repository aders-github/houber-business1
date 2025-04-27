const questionList = document.querySelectorAll('.question-div');
const questionA = document.querySelectorAll('.question-div.aa');
const questionB = document.querySelectorAll('.question-div.bb');
const qCategory = document.querySelectorAll('.category');

document.addEventListener('DOMContentLoaded', () => {
    const questionList = document.querySelectorAll('.question-div');

    questionList.forEach((div) => {
        div.addEventListener('click', () => {
            const answer = div.querySelector('.answer');
            if (answer.classList.contains('show')) {
                answer.classList.remove('show'); // 답변 숨기기
            } else {
                answer.classList.add('show'); // 답변 보이기
            }
        });
    });
});

function aaCategory (div) {
    if (div.classList.contains('active')) {
        return;
    } else {
        qCategory.forEach((q) => {
            q.classList.remove('active'); // 모든 카테고리 비활성화
        })

        div.classList.add('active');
        aController(true); // 질문 A 보이기
        bController(false); // 질문 B 숨기기
        
    }
}
function bbCategory (div) {
    if (div.classList.contains('active')) {
        return;
    } else {
        qCategory.forEach((q) => {
            q.classList.remove('active'); // 모든 카테고리 비활성화
        })
        div.classList.add('active');
        aController(false);
        bController(true); 
        
    }
}
function aController(boolean) {
    questionA.forEach((q) => {
        if (boolean) {
            q.style.display = 'flex'; // 질문 보이기
        } else {
            q.style.display = 'none'; // 질문 숨기기
        }
    });
}
function bController(boolean) {
    questionB.forEach((q) => {
        if (boolean) {
            q.style.display = 'flex'; // 질문 보이기
        } else {
            q.style.display = 'none'; // 질문 숨기기
        }
    });
}
