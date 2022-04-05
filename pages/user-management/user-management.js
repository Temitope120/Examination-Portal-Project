
 document.querySelector('#form')
 .addEventListener('submit', () =>{
     let firstName = document.querySelector('#firstName').value;
     let confirmPassword = document.querySelector("#confirmPassword").value
     let password = document.querySelector("#password").value;
     const userInput = {firstName, password, confirmPassword};
     sessionStorage.setItem(`${firstName},`, JSON.stringify(userInput));
 })


 let passwordd = document.querySelector("#password");
 console.log(passwordd)
 let confirmPasswordd = document.querySelector("#confirmPassword");
 console.log(confirmPasswordd)
 let form = document.getElementById("form");
 console.log(form)

const errorElement = document.getElementById("error")
console.log(errorElement)



// to prevent the page from submitting
form.addEventListener("submit", (e) => {
    let messages = [];
    if(passwordd.value.toLowerCase() === "password" && passwordd.value === "" && passwordd === null && confirmPasswordd.value !== passwordd){
        messages.push("Check Password and try again!")
    }
    if(messages.length > 0){ 
        e.preventDefault() //to stop errors from being submitted
        errorElement.innerText = messages.join(", "); 
    }
})