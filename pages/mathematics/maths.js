// const examQuetions = [

// ]




// const button = document.querySelector("#btn");


// button.addEventListener('click', getQuestion) 


// function getQuestion() {
//     const randQuestionIndx = Math.floor(Math.random() * myQuestions.length);
//     const question = myQuestions[randQuestionIndx].question;
//     const option1 =`A: ${myQuestions[randQuestionIndx].optionOne}`;
//     const option2 = `B: ${myQuestions[randQuestionIndx].optionTwo}`;
//     const option3 = `C: ${myQuestions[randQuestionIndx].optionThree}`;
//     const option4 = `D: ${myQuestions[randQuestionIndx].optionFour}`;
//     myQuestion.innerText = question;
//     myFirstOption.innerText = option1;
//     mySecondOption.innerText = option2;
//     myThirdOption.innerText = option3;
//     myFourthOption.innerText = option4;    
// }
// getQuestion();














(function() {

    const myQuestions = [
        {
            question: "The Chairman is ill and we'll have to _________ the meeting for a few days.",
             optionOne: "put on",
             optionTwo: "put off",
             optionThree: "put away",
             optionFour: "put of"
        },
    
       {
        question: "The cat and dog have a _______ enemy in the rat.",
         optionOne: "same",
         optionTwo: "common",
         optionThree: " mutual",
         optionFour: "similar"
        },
    
       {
        question: "He is very good _________ making stories.",
         optionOne: "in",
         optionTwo: "about",
         optionThree: "at",
         optionFour: "for"
        },
    
       {
        question: "I do my work _________ carefully to avoid mistakes.",
         optionOne: "so",
         optionTwo: "Very",
         optionThree: "to",
         optionFour: "more"
        },
    
       {
        question: "Choose the word opposite in meaning to the given word: Plausible",
         optionOne: "inaplausible",
         optionTwo: "unplausible",
         optionThree: "implausible",
         optionFour: "displausible"
        },
    
        {
            question: "Choose the word opposite in meaning to the given word: Genial",
            optionOne: "stupid",
            optionTwo: "stingy",
            optionThree: "boorish",
            optionFour: "unkind"
        },
    
        {
            question: "Choose the word opposite in meaning to the given word: Frailty",
             optionOne: "energy",
             optionTwo: "intensity",
             optionThree: "vehemence",
             optionFour: "strength"
        },
       
       {
        question: "My salt spray has gradually _________ the bridge.",
         optionOne: "spoilt",
         optionTwo: "ravaged",
         optionThree: "demolished",
         optionFour: "eroded"
        },
          
        {
            question: "My father keeps all his _________ Papers in a  lock and key.",
             optionOne: "required",
             optionTwo: "neccessary",
             optionThree: "useful",
             optionFour: "confidential"
        },
    
        {
            question: "All languages have a system of rules that helps speakers understand how to combine words to convey meaning. This system of rules is a:",
             optionOne: "semantic",
             optionTwo: "symbol",
             optionThree: "grammar",
             optionFour: "syntax"
        },
        {
            question: "Choose the word which best expresses the meaning of the word: Defer",
             optionOne: "Indifferent",
             optionTwo: "Defy",
             optionThree: "Differ",
             optionFour: "Postpone"
        },
        {
            question: "Choose the word which best expresses the meaning of the word: Abandon",
             optionOne: "Forsake",
             optionTwo: "Keep",
             optionThree: "Cherish",
             optionFour: "Enlarge"
        },
    
        {
            question: "Choose the word which best expresses the meaning of the word: Cease",
             optionOne: "Begin",
             optionTwo: "Stop",
             optionThree: "Create",
             optionFour: "Dull"
        },
        {
            question: "Choose the word which best expresses the meaning of the word: Pious",
             optionOne: "Religious",
             optionTwo: "Sympathetic",
             optionThree: "Afraid",
             optionFour: "Faithful"
        }
    ]

let counter = 0;
    
    const buttons = document.querySelectorAll('.btn');
    const myQuestion = document.querySelector("#question");
    const myFirstOption = document.querySelector("#firstOption");
    const mySecondOption = document.querySelector("#secondOption");
    const myThirdOption = document.querySelector("#thirdOption");
    const myFourthOption = document.querySelector("#fourthOption");

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (button.classList.contains('btn-next')) {
                counter++;
                if (counter > myQuestions.length-1) {
                    counter = 0;
                }
                myQuestion.innerHTML = myQuestions[counter].question;
                myFirstOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionOne}</span>`;
                mySecondOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionTwo}</span>`;
                myThirdOption.innerHTML =  `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionThree}</span>`;
                myFourthOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionFour}</span>`;
            }

            if (button.classList.contains('btn-prev')) {
                counter--;
                if (counter < 0) {
                    counter = myQuestions.length-1;
                }
                myQuestion.innerHTML = myQuestions[counter].question;
                myFirstOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionOne}</span>`;
                mySecondOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionTwo}</span>`;
                myThirdOption.innerHTML =  `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionThree}</span>`;
                myFourthOption.innerHTML = `<input type="radio" class='mr-3'> <span> ${myQuestions[counter].optionFour}</span>`;
            }
        })
    });

})()