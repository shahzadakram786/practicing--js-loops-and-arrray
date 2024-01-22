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



let inputprj1 = document.getElementById("input");
let buttonprj1 = document.getElementById("ascbtn1");
let buttonprj2 = document.getElementById("desbtn1");
let paraprj1 = document.getElementById("prj1para")

buttonprj1.addEventListener('click', () => {

    let num = parseInt(inputprj1.value);
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[j + 1]) {
                let tempAsc = num[j];
                num[j] = num[j + 1];
                num[j + 1] = tempAsc;

            }

        }

    }
    paraprj1.innerHTML = ``





})