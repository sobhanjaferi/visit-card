let hoverBtn = document.querySelector("#menu");
let hoverDiv = document.querySelector(".hover");

hoverBtn.addEventListener("click",()=>{
    hoverDiv.style.display = "block"
    hoverBtn.style.transform = "rotate(-30deg)"

    hoverBtn.addEventListener("click",()=>{
    hoverDiv.style.display = "none"
    hoverBtn.style.transform = "rotate(0deg)"
})
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