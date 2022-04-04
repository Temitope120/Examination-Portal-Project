let tog = document.querySelector('.toggle')
let display = document.querySelector('.toggle-menu')
 tog.addEventListener('click', () =>{
    display.classList.toggle('display')
 })

 document.querySelector('.form-area')
 .addEventListener('submit', () =>{
     let matricNumber = document.querySelector('#matric-num').value;
     let password = document.querySelector("#password").value;
     const userInput = {matricNumber, password};
     sessionStorage.setItem(`${matricNumber},`, JSON.stringify(userInput));
    //  alert(`you have been logged in`)
 })



 //  Form Validation
const studentId = document.getElementById("studentId")
console.log(studentId)
const passsword = document.getElementById("password")
console.log(passsword)

const form = document.getElementById("form")
console.log(form)
const errorElement = document.getElementById("error")
console.log(errorElement)



// to prevent the page from submitting
form.addEventListener("submit", (e) => {
    let messages = [];
    if(studentId.value === "" || studentId.value === null && passsword.value === "" || passsword.value === null){
        messages.push("Unable to Login. You do not have access to this page")
    }
    if(passsword.value.toLowerCase() === "password"){
        messages.push("Password is not valid")
    }
    if(messages.length > 0){
        e.preventDefault() //to stop errors from being submitted
        errorElement.innerText = messages.join(", "); 
    }
})