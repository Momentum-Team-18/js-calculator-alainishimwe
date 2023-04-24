let numbers = document.querySelectorAll(".button");
let mydisplay = document.querySelector(".display");
let myClear = document.querySelector(".button1");
let myEqualSign = document.querySelector(".equalsign");
let decimalPoint = document.querySelector(".decimal")

// console.log(typeof myClear);
// console.log( numbers.innerHTML);
// console.log(typeof myEqualSign);


for (let number of numbers) {
    number.addEventListener("click", (event) => {
        console.log(number)
        //console.log(event.target.innerText);
        mydisplay.innerText += event.target.innerText;
        //console.log( typeof mydisplay.innerText);
    })
}
myClear.addEventListener("click", (event) => {
    mydisplay.innerText = '';
})

// myEqualSign.addEventListener("click", (event) => {
//     let answer = eval(mydisplay.innerText);
//     mydisplay.innerText = answer;
// })

myEqualSign.addEventListener("click", (event) => {

    try {
        let answer = eval(mydisplay.innerText);
        mydisplay.innerText = answer;

    } 
    catch (err) {
        mydisplay.innerText = "You entered invalid input";
    }
    
})


// function addZero () {
//     if(mydisplay.firstChild.data == '2') {
//         //console.log(mydisplay[0])
//         //let newNumber = mydisplay.firstChild.data = 3;
//         mydisplay.innerText = "5";
//     }
// }

// numbers.addEventListener("click", addZero());

// decimalPoint.addEventListener("click", (event) => {
//     if (mydisplay.innerText == '4') {
//         mydisplay.innerText = '3';
//     } 
// });