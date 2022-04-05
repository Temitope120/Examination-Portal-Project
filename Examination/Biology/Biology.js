// getting all required button
const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box')
const exitBtn = document.querySelector('.buttons #quit')
const continueBtn = document.querySelector('.buttons #restart')
const quizBox = document.querySelector('.quix-box')
const optionList = document.querySelector(".option-list")
const timeCount = quizBox.querySelector(".timer .timer-sec")
const timeLine = quizBox.querySelector("header .time-line")
const timeOff = quizBox.querySelector("header .time-text")

// if start btn
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo")};//show the info button

// if Exit btn
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo")};//hide  info box

// if Exit btn
continueBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo") ;//hide  info box
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15)
    startTimerLine(0)
    
};
    

    let queCount = 0;
    let queNumb=1
    let counter;
    let counterLine;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0; 

    const nextBtn = document.querySelector(".next-btn")
    const resultBox = document.querySelector(".result-box")
    const previousBtn = document.querySelector(".previous")
    // restart quit
    const restartQuiz = resultBox.querySelector(".buttons .restart")
    const quitQuiz = resultBox.querySelector(".buttons .Quit")
    restartQuiz.onclick= () =>{
        resultBox.classList.remove('activeResult');
        quizBox.classList.add('activeQuiz');
    let queCount = 0;
    let queNumb=1
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0; 
     showQuestions(queCount);
        queCounter(queNumb)
        clearInterval(counter)
        startTimer(timeValue)
         clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display ="none"
        timeOff.textContent = 'Time Left'
        
    

    }
    quitQuiz.onclick=()=>{
        window.location.reload()
    }

    // if next button CLicked
    nextBtn.onclick= () =>{
        if (queCount < Maths.length -1){
            queCount++;
            queNumb++;
        showQuestions(queCount);
        queCounter(queNumb)
        clearInterval(counter)
        startTimer(timeValue)
         clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display ="none"
        timeOff.textContent = 'Time Left'
        }
        else{
             clearInterval(counter)
            clearInterval(counterLine)
           alert('questions Completed')
           showResultBox()
        }
    }
    previousBtn.onclick= () =>{
         if (queCount < Maths.length -1){
            queCount--;
            queNumb--;
        showQuestions(queCount);
        queCounter(queNumb)
        clearInterval(counter)
        startTimer(timeValue)
         clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display ="none"
        timeOff.textContent = 'TimeOff'
        }
        else{
             clearInterval(counter)
            clearInterval(counterLine)
           alert('questions Completed')
           showResultBox()
        }
    }

    function showQuestions(index){
        const queText = document.querySelector(".que-text");
        
       
        let queTag ='<span>'+Maths[index].numb + '.' + Maths[index].question +'</span>'
         let optionTag = '<div class="option">'+Maths[index].options[0] +'<span></span></div>'
                        +'<div class="option">'+Maths[index].options[1] +'<span></span></div>'
                        +'<div class="option">'+Maths[index].options[2] +'<span></span></div>'
                        +'<div class="option">'+Maths[index].options[3] +'<span></span></div>'
        queText.innerHTML = queTag;
        optionList.innerHTML = optionTag;
        const option  = optionList.querySelectorAll(".option")
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)')
            
        }
    }
    

    
    function queCounter(index){
    const bottomQuestionCOunter = quizBox.querySelector(".total-que");
    let totalQuestionTag = '<span><p>'+index +'</p>of<p>'+ Maths.length+'</p>Questions</span>'
    bottomQuestionCOunter.innerHTML = totalQuestionTag;
   
}


let tickIcon =' <div class="icon tick"><i class="fa-solid fa-check"></i></div>'
let crossIcon =' <div class="icon cross"><i class="fa-solid fa-circle-xmark"></i></div>'

function optionSelected(answer){
     clearInterval(counter)
     clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = Maths[queCount].answer;
    let allOptions = optionList.children.length;
   
    
    if (userAns === correctAns){
        userScore += 1; 
        console.log(userScore)
        answer.classList.add("correct");
        console.log('answer is correct');
        answer.insertAdjacentHTML("beforeend", tickIcon)
        
    }
    else{
        answer.classList.add("incorrect");
        console.log('answer is wrong');
        answer.insertAdjacentHTML("beforeend", crossIcon)
    }
    
    // if answer is incorrect, automatically select the correct one
     for (let i = 0; i < allOptions; i++) {
         if(optionList.children[i].textContent === correctAns){
             optionList.children[i].setAttribute('class', 'option correct')
             optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
            //  optionList.children[i].insertAdjacentHTML("beforeend", crossIcon)
         }
        
     }
     // console.log(correctAns)
    // once user selected, all other options are disabled
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabld');
        
    }
    nextBtn.style.display ="block"
    previousBtn.style.display= "block"

}


function showResultBox(){
     infoBox.classList.remove("activeInfo") ;//hide  info box
    quizBox.classList.remove("activeQuiz"); //hide the result box
    resultBox.classList.add("activeResult") //show the result box
    const scoreText = resultBox.querySelector(".score-text")
    if(userScore > 3){
        let scoreTag = `<span>Congratulations!!, You got <p>${userScore} Points </p>out of<p>${Maths.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
   else if(userScore > 3){
        let scoreTag = `<span>Nice, you got only<p>${userScore} Points </p>out of<p>${Maths.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = `<span>Unfortunately, you did not meet the pass mark. You got <p>${userScore} points </p>out of<p>${Maths.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer(){
        timeCount.textContent=  time;
        time--;
        if(time<9){
            let addZero = timeCount.textContent;
            timeCount.textContent = '0'+addZero
        }
        let correctAns = Maths[queCount].answer;
         let allOptions = optionList.children.length;
   
        if(time < 0){
            clearInterval(counter)
            timeCount.textContent = '00'
            timeOff.textContent = 'TimeOff'
        for (let i = 0; i < allOptions; i++) {
         if(optionList.children[i].textContent === correctAns){
             optionList.children[i].setAttribute('class', 'option correct')
             optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
            //  optionList.children[i].insertAdjacentHTML("beforeend", crossIcon)
         }
         
     }
      for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabld');
        
    }
    nextBtn.style.display ="block"

     }
  }
}


function startTimerLine(time) {
    counterLine = setInterval(timer, 29)
    function timer(){
        time += 1;
        timeLine.style.width = `${time}px`
        if(time > 700){
            clearInterval(counterLine)
            timeCount.textContent = '00'
        }
    }
}