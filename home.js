let menu = document.querySelector("#menu");
let closeMenu = document.getElementById("close_menu");
let hoverDiv = document.querySelector(".hover");

menu.addEventListener("click",()=>{
    hoverDiv.style.display = "block"
    menu.style.display = "none"
    closeMenu.style.display = "block";
})

closeMenu.addEventListener("click",()=>{
    hoverDiv.style.display = "none"
    menu.style.display = "block"
    closeMenu.style.display = "none"
})

let telegram = document.getElementById("telegram");
let number = document.getElementById("number");
let email = document.getElementById("email");
let idValues = document.getElementById("output_conection");

telegram.addEventListener("click",()=>{
    idValues.innerHTML = "@sot837";
    idValues.style.textDecoration = "underline";
})

number.addEventListener("click",()=>{
    idValues.innerHTML = "09939160928";
    idValues.style.textDecoration = "underline";
})

email.addEventListener("click",()=>{
    idValues.innerHTML = "sobhanjafarii87@gmail.com";
    idValues.style.textDecoration = "underline";
})