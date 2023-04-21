let numbers = document.querySelectorAll(".button");
let mydisplay = document.querySelector(".display");
let myClear = document.querySelector(".button1");
let myEqualSign = document.querySelector(".equalsign");
let decimalPoint = document.querySelector(".decimal")

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


// function addZero () {
//     if(mydisplay[0] == 2) {
//         console.log(mydisplay[0])
//         let newNumber = mydisplay.push(4);
//         mydisplay.innerText = newNumber;
//     }
// }

// decimalPoint.addEventListener("click", (event) => {
//     if (mydisplay.innerText == 4) {
//         mydisplay.innerText = 3;
//     } 
// });