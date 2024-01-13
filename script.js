const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const continueBtn2 = document.querySelector('.continue-btn2');
const continueBtn3 = document.querySelector('.continue-btn3');
const continueBtn4 = document.querySelector('.continue-btn4');
const continueBtn5 = document.querySelector('.continue-btn5');
const continueBtn6 = document.querySelector('.continue-btn6');
const continueBtn7 = document.querySelector('.continue-btn7');
const continueBtn8 = document.querySelector('.continue-btn8');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const quizGroup = document.querySelector('.quiz-group');
const selectBtn = document.querySelector('.select-btn');

let currentQuiz = 1; // Defaultní hodnota pro první kvíz

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

selectBtn.onclick = () => {
    popupInfo.classList.remove('active');
    quizGroup.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

function startQuiz(quizNumber, title, questionsArray) {
    currentQuiz = quizNumber;
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    quizBox.classList.add('active');
    quizGroup.classList.remove('active');

    setTimeout(() => {
        main.classList.remove('active');
    }, 1000);

    document.getElementById('quizTitle').textContent = title;

    showQuestions(questionsArray, 0);
    questionCounter(1);
    headerScore();
}

// Quiz 1
continueBtn.onclick = () => {
    startQuiz(1, 'Kámen Mudrců', questions);
}

// Quiz 2
continueBtn2.onclick = () => {
    startQuiz(2, 'Tajemná Komnata', questions2);
}

// Quiz 3
continueBtn3.onclick = () => {
    startQuiz(3, 'Vězeň z Azkabanu', questions3);
}

// Quiz 4
continueBtn4.onclick = () => {
    startQuiz(4, 'Ohnivý pohár', questions4);
}

// Quiz 5
continueBtn5.onclick = () => {
    startQuiz(5, 'Fénixův řád', questions5);
}

// Quiz 6
continueBtn6.onclick = () => {
    startQuiz(6, 'Princ dvojí krve', questions6);
}

// Quiz 7
continueBtn7.onclick = () => {
    startQuiz(7, 'Relikvie smrti part 1', questions7);
}

// Quiz 8
continueBtn8.onclick = () => {
    startQuiz(8, 'Relikvie smrti part 2', questions8);
}

// Try again
tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(getCurrentQuestions(), questionCount);
    questionCounter(questionNumb);

    headerScore();
};

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(getCurrentQuestions(), questionCount);
    questionCounter(questionNumb);

    headerScore();
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < getCurrentQuestions().length - 1) {
        questionCount++;
        showQuestions(getCurrentQuestions(), questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

function showQuestions(questionsArray, index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questionsArray[index].numb}. ${questionsArray[index].question}`;

    let optionTag = `<div class="option"><span>${questionsArray[index].options[0]}</span></div>
                    <div class="option"><span>${questionsArray[index].options[1]}</span></div>
                    <div class="option"><span>${questionsArray[index].options[2]}</span></div>
                    <div class="option"><span>${questionsArray[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function getCurrentQuestions() {
    switch (currentQuiz) {
        case 1:
            return questions;
        case 2:
            return questions2;
        case 3:
            return questions3;
        case 4:
            return questions4;
        case 5:
            return questions5;
        case 6:
            return questions6;
        case 7:
            return questions7;
        case 8:
            return questions8;
        default:
            return questions;
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = getCurrentQuestions()[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        //if answer incorrect, auto selected correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //if user has selected, disable all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} z ${getCurrentQuestions().length} otázek`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Skóre: ${userScore} / ${getCurrentQuestions().length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Tvé skóre ${userScore} z ${getCurrentQuestions().length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    const grade = document.querySelector('.grade');


    let progressStartValue = -1;
    let progressEndValue = (userScore / getCurrentQuestions().length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#CDBA9A ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);

            //grade-OWL
            if (userScore === questions.length) {
               grade.textContent = 'Tvá známky na OVC je Vynikající'
          } else if (userScore >= 8) {
               grade.textContent = 'Tvá známky na OVC je Nad očekávání'
          } else if (userScore >= 6) {
               grade.textContent = 'Tvá známky na OVC je Přijatelné'
          } else if (userScore >= 4) {
               grade.textContent = 'Tvá známky na OVC je Mizerné'
          } else if (userScore >= 2) {
               grade.textContent = 'Tvá známky na OVC je Hrozné';
          } else {
               grade.textContent = 'Tvá známky na OVC je Troll';
          }
     }


    }, speed);
}
