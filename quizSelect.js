function hideQuizGroup(){
     const quizGroup = document.querySelector('.quiz-group')
     quizGroup.classList.remove('active')
     main.classList.remove('active')
}

function goBack(){
     const quizGroup = document.querySelector('.quiz-group')
     quizGroup.classList.remove('active')
     popupInfo.classList.add('active')
}

function hideQuizGame(){
     const quizSelection = document.querySelector('.quiz-section')
     quizSelection.classList.remove('active')
}

function goBackToGroup(){
     const quizSelection = document.querySelector('.quiz-section')
     quizSelection.classList.remove('active')
     quizGroup.classList.add('active')
     main.classList.add('active')
}