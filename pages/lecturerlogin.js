let tog = document.querySelector('.toggle')
let display = document.querySelector('.toggle-menu')
 tog.addEventListener('click', () =>{
     display.classList.toggle('display')
 })

 document.querySelector('.form-area')
 .addEventListener('submit', () =>{
     let matricNumber = document.querySelector('#staff-num').value;
     let password = document.querySelector("#password").value;
     const userInput ={matricNumber, password};
     sessionStorage.setItem(`${matricNumber},`, JSON.stringify(userInput));
     alert(`you have been logged in`)
 })