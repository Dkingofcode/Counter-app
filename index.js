const Input = document.getElementById("input");
const Reset = document.querySelector(".reset");
const Subtract = document.querySelector(".subtract");
const Add = document.querySelector(".add");
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        Input.value++;
        setColor();
    }
     if (e.target.classList.contains("reset")) {
        Input.value = "0";
        setColor();
    }
     if(e.target.classList.contains("subtract")) {
        Input.value--;
        setColor();
     }
});

function setColor() {
    if(Input.value > 0){
        Input.style.color = "Green";
    } else if(Input.value < 0){
        Input.style.color = "red";
    } else {
        Input.style.color = "black";
    }
}



// Reset.addEventListener("click", () => {
//     Input.value = "0";
// })

// Subtract.addEventListener("click", () => {
//     Input.value-- 
// })

// Add.addEventListener("click", () => {
//     Input.value++ 
// })

















