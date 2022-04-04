let tog = document.querySelector('.toggle')
let display = document.querySelector('.toggle-menu')
 tog.addEventListener('click', () =>{
     display.classList.toggle('display')
 })

 document.querySelector('.form-area')
 .addEventListener('submit', () =>{
     let matricNumber = document.querySelector('#staffId').value;
     let password = document.querySelector("#password").value;
     const userInput ={matricNumber, password};
     sessionStorage.setItem(`${matricNumber},`, JSON.stringify(userInput));
 })


//  Form Validation
const staffId = document.getElementById("staffId")
console.log(staffId)
const password = document.getElementById("password")
console.log(password)

const form = document.getElementById("form")
console.log(form)
const errorElement = document.getElementById("error")
console.log(errorElement)



// to prevent the page from submitting
form.addEventListener("submit", (e) => {
    let messages = [];
    if(staffId.value === "" || staffId.value === null && password.value === "" || password.value === null){
        messages.push("Unable to Login. You do not have access to this page")
    }
    if(password.value.toLowerCase() === "password"){
        messages.push("Password is not valid")
    }
    if(messages.length > 0){
        e.preventDefault() //to stop errors from being submitted
        errorElement.innerText = messages.join(", "); 
    }
})