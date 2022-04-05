let toggle = document.getElementById("toggle")
console.log(toggle)

let links = document.getElementById("linkss")
console.log(links)

toggle.addEventListener("click", () => {
    links.classList.toggle("show")
})