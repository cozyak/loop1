/*для фото */
const slider = document.querySelector(".slider");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

let current = 0;
let width = 800;

document.documentElement.style.setProperty("--width-of-slide", width+"px");


let num = slider.querySelectorAll(".slide").length;
btnPrev.setAttribute("disabled", "true");

btnNext.addEventListener("click", () => {
    if(current < num - 1){
        current++; 
        console.log(1)
        btnPrev.removeAttribute("disabled")
    }
    else {
        console.log(2)
        btnNext.setAttribute("disabled", "true")
    }     
    slider.style.transform = `translateX(-${current*width}px)`;
})

btnPrev.addEventListener("click", () => {
    if(current > 0){
        current--; 
        btnNext.removeAttribute("disabled")
    }
    else {
        btnPrev.setAttribute("disabled", "true")
    }     
    slider.style.transform = `translateX(-${current*width}px)`;
})








