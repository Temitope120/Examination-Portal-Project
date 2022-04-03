
(function() {

    const myQuestions = [
        {
            question: "What is HTML?",
             optionOne: "HTML is the standard markup language mainly used to create web pages",
             optionTwo: "HTML is the standard markup language mainly used to create web pages",
             optionThree: "HTML consists of a set of elements that helps the browser how to view the content",
             optionFour: "All of the above"
        },    
       {
        question: "HTML is a subset of ___________",
         optionOne: "SGMT",
         optionTwo: "SGML",
         optionThree: "SGME",
         optionFour: "XHTML"
        },
    
       {
        question: "Which element is used for or styling HTML5 layout?",
         optionOne: "CSS",
         optionTwo: "jQuery",
         optionThree: "PHP",
         optionFour: "javaScript"
        },
    
        {
            question: "Which of the following elements in HTML5 defines video or movie content?",
            optionOne: "video",
            optionTwo: "movie",
            optionThree: "audio",
            optionFour: "media"
        },
    
        {
            question: "Which of the following is not a HTML5 tag?",
            optionOne: "track",
            optionTwo: "video",
            optionThree: "slider",
            optionFour: "source"
        },
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