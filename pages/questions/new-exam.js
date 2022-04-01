
(function() {

    const myQuestions = [
        {
            question: "1) CSS stands for __________",
             optionOne: "Cascade style sheets",
             optionTwo: "Color and style sheets",
             optionThree: "Cascading style sheets",
             optionFour: "None of the above"
        },
    
        {
            question: "2) The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
             optionOne: "writing-mode",
             optionTwo: "text-indent",
             optionThree: "word-break",
             optionFour: "None of the above"
        },
    
       {
        question: "3) The property in CSS used to change the background color of an element is______________",
         optionOne: "in",
         optionTwo: "about",
         optionThree: "at",
         optionFour: "for"
        },
    
       {
        question: "4) The property in CSS used to change the background color of an element is _________",
         optionOne: "bgcolor",
         optionTwo: "background-color",
         optionThree: "color",
         optionFour: "All of the above"
        },
    
        {
            question: "5) Which of the following CSS property is used to set the background image of an element?",
            optionOne: "background-attachment",
            optionTwo: "background-image",
            optionThree: "background-color",
            optionFour: "None of the above"
        },
    
        {
            question: "6) The HTML attribute used to define the inline styles is __________ ",
            optionOne: "Style",
            optionTwo: "styles",
            optionThree: "class",
            optionFour: "None of the above"
        },
    
        {
            question: "7) The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
             optionOne: "writing-mode",
             optionTwo: "text-indent",
             optionThree: "word-break",
             optionFour: "None of the above"
        },
       
       {
        question: "8) Which of the following CSS property is used to set the background image of an element?",
         optionOne: "background-attachment",
         optionTwo: "background-image",
         optionThree: "background-color",
         optionFour: "None of the above"
        },
          
        {
            question: "9) Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
            optionOne: "p {background-color : yellow;}",
            optionTwo: "p {background-color : #yellow;} ",
            optionThree: "all {background-color : yellow;}",
            optionFour: "all p {background-color : #yellow;} "
        },
    
        {
            question: "10) Which of the following is the correct syntax to display the hyperlinks without any underline?",
             optionOne: "a {text-decoration : underline;}",
             optionTwo: "a {decoration : no-underline;}",
             optionThree: "a {text-decoration : none;}",
             optionFour: "None of the above"
        },
        {
            question: "11) Which of the following property is used as the shorthand property for the padding properties? ",
             optionOne: "Indifferent",
             optionTwo: "Defy",
             optionThree: "Differ",
             optionFour: "Postpone"
        },
        {
            question: "12) The CSS property used to make the text bold is _________ ",
             optionOne: "font-weight : bold",
             optionTwo: "weight: bold",
             optionThree: "font: bold",
             optionFour: "style: bold"
        },
    
        {
            question: "13) Which of the following property is used as the shorthand property of margin properties",
             optionOne: "margin-left",
             optionTwo: "margin-right",
             optionThree: "margin",
             optionFour: "None of the above"
        },
        {
            question: "14) Which of the following is used to specify the subscript of text using CSS?",
             optionOne: "vertical-align: sub",
             optionTwo: "vertical-align: super",
             optionThree: "vertical-align: subscript",
             optionFour: "None of the above"
        },
        {
            question: "15) The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
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