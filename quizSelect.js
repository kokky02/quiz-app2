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