// find missing number

const arr = [1, 2, 4, 5];

let obj = {}

for (let i = 0; i < arr.length; i++) {

    obj[arr[i]] = true

}

let missing = null

for (let i = 1; i <= 5; i++) {
    if (!obj[i]) {
        missing = i;
        break;
    }
}


console.log(missing);



