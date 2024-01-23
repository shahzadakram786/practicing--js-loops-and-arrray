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
let buttonprj2 = document.getElementById("desbtn2");
let buttonprjS1 = document.getElementById("AscStr")
let buttonprjS2 = document.getElementById("DesStr")
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

    if (num.every(Element => !isNaN(Element))) {

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
        paraprj1.innerHTML = `Here is you Asending order: ${num}`

    } else if (num.every(element => isNaN(element))) {
        paraprj1.innerHTML = "you have entered wrong data type "

    }
});


// completed asc ordr



buttonprj2.addEventListener('click', () => {
    // if (!isNaN(inputprj1) && !isNaN(inputprj2) && !isNaN(inputprj3) && !isNaN(inputprj4) && !isNaN(inputprj5)) {


    let num2 = [
        parseFloat(inputprj1.value),
        parseFloat(inputprj2.value),
        parseFloat(inputprj3.value),
        parseFloat(inputprj4.value),
        parseFloat(inputprj5.value)
    ]



    // let num2 = [
    //     (inputprj1.value),
    //     (inputprj2.value),
    //     (inputprj3.value),
    //     (inputprj4.value),
    //     (inputprj5.value)
    // ]
    if (num2.every(Element => !isNaN(Element))) {
        for (let i = 0; i < num2.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                if (num2[j] < num2[j + 1]) {
                    let tempAsc = num2[j];
                    num2[j] = num2[j + 1];
                    num2[j + 1] = tempAsc;

                }

            }

        }
        console.log(num2);
        paraprj1.innerHTML = `Here is you Desending order: ${num2}`
    } else if (num2.every(element => isNaN(element))) {
        paraprj1.innerHTML = "you have entered wrong data type "

    }

});



// statring strings in Asending and Descending order


buttonprjS1.addEventListener('click', () => {
    let str1 = [
            inputprj1.value,
            inputprj2.value,
            inputprj3.value,
            inputprj4.value,
            inputprj5.value
        ]
        // let nu = parseInt([inputprj1.value]);

    if (str1.every(Element => isNaN(Element))) {

        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str1.length; j++) {
                if (str1[j] > str1[j + 1]) {
                    let tempAscS1 = str1[j];
                    str1[j] = str1[j + 1];
                    str1[j + 1] = tempAscS1;

                }

            }

        }
        console.log(str1);
        paraprj1.innerHTML = `Here is you Asending order: ${str1}`

    } else if (str1.every(element => !isNaN(element))) {
        paraprj1.innerHTML = "you have entered wrong data type "

    }
});
buttonprjS2.addEventListener('click', () => {
    let str2 = [
            inputprj1.value,
            inputprj2.value,
            inputprj3.value,
            inputprj4.value,
            inputprj5.value
        ]
        // let nu = parseInt([inputprj1.value]);

    if (str2.every(Element => isNaN(Element))) {

        for (let i = 0; i < str2.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str2[j] < str2[j + 1]) {
                    let tempAscS2 = str2[j];
                    str2[j] = str2[j + 1];
                    str2[j + 1] = tempAscS2;

                }
            }

        }
        console.log(str2);
        paraprj1.innerHTML = `Here is you Asending order: ${str2}`

    } else if (str2.every(element => !isNaN(element))) {
        paraprj1.innerHTML = "you have entered wrong data type "

    }
});