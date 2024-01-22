let num = [2, 3, 52, 1, 4, 36];
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[j] < num[j + 1]) {
            let temp = num[j]
            num[j] = num[j + 1]
            num[j + 1] = temp
        }
    }
}
console.log(num)