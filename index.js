let toggle = document.getElementById("toggle")
console.log(toggle)

let links = document.getElementById("links")
console.log(links)

toggle.addEventListener("click", () => {
    links.classList.toggle("show")
})