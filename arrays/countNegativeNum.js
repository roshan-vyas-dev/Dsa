// Count Negative Numbers

const arr = [-2, 5, -1, 8, 0, 3, -7];

let negativeNumCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeNumCount++
    }
}

console.log(negativeNumCount);
