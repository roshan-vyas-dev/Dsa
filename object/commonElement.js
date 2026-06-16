// Common Elements Between Two Arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let obj = {}
let common = []

for (let i = 0; i < arr1.length; i++) {

    obj[arr1[i]] = true;
}

for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
        common.push(arr2[i])
    }

}

console.log(common);

// console.log(obj);

