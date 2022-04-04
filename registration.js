
document.querySelector(".form-area")
.addEventListener('submit', () =>{
    let firstName = document.querySelector("#fname").value;
    let lastName = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // let password1 = document.querySelector("#password1")
    const userInput={firstName, lastName, email, password}
    sessionStorage.setItem(`${firstName}, ${lastName},`, JSON.stringify(userInput))
})

//  Form Validation
const email = document.querySelector("#email")
console.log(email)
const password = document.querySelector("#password")
console.log(password)

const form = document.querySelector("#form")
const errorElement = document.querySelector(".error")



// to prevent the page from submitting
form.addEventListener("submit", (e) => {
    let messages = [];
    if(email.value === "" || email.value === null){
        messages.push("email is a required field")
    }

    if(password.value.length <= 6){
        messages.push("Password must be longer than 6 characters")
    }

    if(password.value.length >= 20){
        messages.push("Password is too long")
    }
    if(password.value.toLowerCase() === "password"){
        messages.push("Password can not be set to password")
    }
    if(messages.length > 0){
        e.preventDefault() //to stop errors from being submitted
        errorElement.innerText = messages.join(", ")
    }

})