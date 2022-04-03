
(function() {

    const myQuestions = [
        {
            question: "JavaScript is a _________ language",
             optionOne: " Object-Oriented",
             optionTwo: "Object-based",
             optionThree: "Assembly-language",
             optionFour: "High Level"
        },
    
        {
            question: "In JavaScript, what is a block of statement?",
             optionOne: "Conditional block",
             optionTwo: "block that combines a number of statements into a single compound statement",
             optionThree: "both conditional block and a single statement",
             optionFour: "block that contains a single statement"
        },
    
       {
        question: "The terms function and var are known as javaScript______________",
         optionOne: "Keywords",
         optionTwo: "Data Types",
         optionThree: "Declaration Statement",
         optionFour: "Prototypes"
        },
    
       {
        question: " Which of the following keywords is used to define a variable in Javascript?",
         optionOne: "var",
         optionTwo: "let",
         optionThree: "Both A and B",
         optionFour: "None of the above"
        },
    
        {
            question: "Which of the following methods is used to access HTML elements using Javascript?",
            optionOne: "getElementbyId()",
            optionTwo: "getElementByClassName()",
            optionThree: "Both A and B",
            optionFour: "None of the above"
        },
    
        {
            question: "Which of the following methods can be used to display data in some form using Javascript?",
            optionOne: "document.write",
            optionTwo: "console.log",
            optionThree: "class",
            optionFour: "None of the above"
        },
    
        {
            question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
             optionOne: "writing-mode",
             optionTwo: "text-indent",
             optionThree: "word-break",
             optionFour: "None of the above"
        },
       
       {
        question: "Which of the following CSS property is used to set the background image of an element?",
         optionOne: "background-attachment",
         optionTwo: "background-image",
         optionThree: "background-color",
         optionFour: "None of the above"
        },
          
        {
            question: " Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
            optionOne: "p {background-color : yellow;}",
            optionTwo: "p {background-color : #yellow;} ",
            optionThree: "all {background-color : yellow;}",
            optionFour: "all p {background-color : #yellow;} "
        },
    
        {
            question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
             optionOne: "a {text-decoration : underline;}",
             optionTwo: "a {decoration : no-underline;}",
             optionThree: "a {text-decoration : none;}",
             optionFour: "None of the above"
        },
        {
            question: "The CSS property used to make the text bold is _________ ",
             optionOne: "font-weight : bold",
             optionTwo: "weight: bold",
             optionThree: "font: bold",
             optionFour: "style: bold"
        },
    
        {
            question: "Which of the following property is used as the shorthand property of margin properties",
             optionOne: "margin-left",
             optionTwo: "margin-right",
             optionThree: "margin",
             optionFour: "None of the above"
        },
        {
            question: "Which of the following is used to specify the subscript of text using CSS?",
             optionOne: "vertical-align: sub",
             optionTwo: "vertical-align: super",
             optionThree: "vertical-align: subscript",
             optionFour: "None of the above"
        },
        {
            question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
             optionOne: "writing-mode",
             optionTwo: "text-indent",
             optionThree: "word-break",
             optionFour: "None of the above"
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