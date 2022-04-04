// getting all required button
const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box')
const exitBtn = document.querySelector('#quit')
const back = document.querySelector('#exit')
console.log(back)
const proceedbtn = document.querySelector('#proceed')
console.log(proceedbtn)
const continueBtn = document.querySelector('#restart')
const quizBox = document.querySelector('.quix-box')
const courses = document.querySelector(".courses")
const optionList = document.querySelector(".option-list")
const timeCount = quizBox.querySelector(".timer .timer-sec")
const timeLine = quizBox.querySelector("header .time-line")
const timeOff = quizBox.querySelector("header .time-text")


// // if startQuiz button clicked
// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
// }
// // if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }
// // if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQestions function
//     queCounter(1); //passing 1 parameter to queCounter
//     startTimer(15); //calling startTimer function
//     startTimerLine(0); //calling startTimerLine function
// }
// if start btn
startBtn.onclick = ()=>{
    courses.classList.add("activeCourse")};//show the info button

    
// if Exit btn
back.onclick = ()=>{
    courses.classList.remove("activeCourse")};//hide  info box

    
    // if continue
proceedbtn.onclick = () =>{
    courses.classList.remove('activeCourse')
    infoBox.classList.add("activeInfo")};
// if continue btn
back.addEventListener("click", () =>{
    infoBox.classList.remove("activeInfo")
});
exitBtn.onclick = () =>{
    infoBox.classList.remove("activeInfo")
}

continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info box
    quizBox.classList.add("activeQuiz"); //show quiz box

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
        timeOff.textContent = 'TimeOff'
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
        
       
        let queTag ='<span>'+ Maths[index].numb + '.' + Maths[index].question +'</span>'
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
        let scoreTag = `<span> and Contrats!!, <p>${userScore}</p>out of<p>${Maths.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
   else if(userScore > 3){
        let scoreTag = `<span>and Nice, you got only<p>${userScore}</p>out of<p>${Maths.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = `<span>and sorry, you got only<p>${userScore}</p>out of<p>${Maths.length}</p></span>`
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