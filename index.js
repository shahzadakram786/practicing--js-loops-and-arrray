// let num = [2, 3, 52, 1, 4, 36];
// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//         if (num[j] < num[j + 1]) {
//             let temp = num[j]
//             num[j] = num[j + 1]
//             num[j + 1] = temp
//         }
//     }
// }
// console.log(num);



let inputprj1 = document.getElementById("input1");
let inputprj2 = document.getElementById("input2");
let inputprj3 = document.getElementById("input3");
let inputprj4 = document.getElementById("input4");
let inputprj5 = document.getElementById("input5");
let buttonprj1 = document.getElementById("ascbtn1");
let buttonprj2 = document.getElementById("desbtn1");
let paraprj1 = document.getElementById("prj1para")




buttonprj1.addEventListener('click', () => {
    let num = [
            parseFloat(inputprj1.value),
            parseFloat(inputprj2.value),
            parseFloat(inputprj3.value),
            parseFloat(inputprj4.value),
            parseFloat(inputprj5.value)
        ]
        // let num = parseInt([inputprj1.value]);
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[j + 1]) {
                let tempAsc = num[j];
                num[j] = num[j + 1];
                num[j + 1] = tempAsc;

            }

        }

    }
    console.log(num);
    paraprj1.innerHTML += `Here is you Asending order ${num}`





});