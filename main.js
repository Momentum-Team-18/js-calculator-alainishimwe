let numbers = document.querySelectorAll(".button");
let mydisplay = document.querySelector(".display");
let myClear = document.querySelector(".button1");
let myEqualSign = document.querySelector(".equalsign");

for (let number of numbers) {
    number.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        mydisplay.innerText += event.target.innerText;
    })
}
myClear.addEventListener("click", (event) => {
    mydisplay.innerText = '';
})

myEqualSign.addEventListener("click", (event) => {
    let answer = eval(mydisplay.innerText);
    mydisplay.innerText = answer;
})
