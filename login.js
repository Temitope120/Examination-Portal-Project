let tog = document.querySelector('.toggle')
let display = document.querySelector('.toggle-menu')
 tog.addEventListener('click', () =>{
    display.classList.toggle('display')
 })

 document.querySelector('.form-area').addEventListener('submit', saveSignUpData)

 function saveSignUpData(){
    let idStudent = document.querySelector('#studentId').value;
    let password = document.querySelector("#password").value;
    const userInput = {idStudent, password};
    sessionStorage.setItem(`${idStudent},`, JSON.stringify(userInput));

    localStorage.setItem("id_student", idStudent)
    localStorage.setItem("pass_word", password)


    let loginRecords = new Array();
    if(idStudent != password != ""){
        loginRecords = JSON.parse(localStorage.getItem("signupdata"))
        if(loginRecords.some((v) => {
            return v.idStudent === idStudent
        })){
            alert("Email Already Exist");
        }
        if(loginRecords.some((v) => {
            return v.psw === password1
        })){
           alert("password is not the same");
        }else{
            loginRecords.push({
                "id_student" : idStudent,
                "pass_word": password,
                "con_pass": password1
            })
        }
    }else{
        alert("Go to Sign Up page")
    }
    localStorage.setItem("signupdata", JSON.stringify(loginRecords));
 }



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