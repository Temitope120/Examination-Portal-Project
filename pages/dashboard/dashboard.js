const searchInput = document.querySelector("#search")
console.log(searchInput)


// to hide the unneccessary and show the relevant  info while a user is searching
let students = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value)
    students.forEach( student => {
        const isVisible = student.name.toLowerCase().includes(value) || student.email.toLowerCase().includes(value)
        student.element.classList.toggle("hide", !isVisible)
    })
   
})
