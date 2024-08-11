let boxes = document.querySelector(".boxes")
let box = document.querySelectorAll(".box")
let button = document.querySelector("button")
let img = document.querySelector("img")
let colorCode;
button.addEventListener("click",()=>{
    box.forEach(e => {
        colorCode = colorGenerate();
        e.style.setProperty("--bgClr",colorCode);
        e.innerText = `${colorCode}`
    });
})


let colorGenerate=()=>{
    let hexCode = '123456789abcdefABCDEF';
    let color = '#';
    for(let i=0;i<=5;i++){
        color += hexCode[Math.floor(Math.random() * 20)]
    }
    return color
}

