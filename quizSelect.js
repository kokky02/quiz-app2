function hideQuizGroup(){
     const quizGroup = document.querySelector('.quizz-group')
     quizGroup.classList.remove('active')
     main.classList.remove('active')
}

function goBack(){
     const quizGroup = document.querySelector('.quizz-group')
     quizGroup.classList.remove('active')
     popupInfo.classList.add('active')
}