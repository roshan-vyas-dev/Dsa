// Count Duplicate Numbers

const arr = [1, 2, 2, 3, 4, 4, 4];

let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] = obj[arr[i]] + 1
    } else {
        obj[arr[i]] = 1
    }
}

// console.log(obj);

let duplicates = [];

for (let key in obj) {

    if(obj[key]>1){
        duplicates.push(Number(key))
    }

}

console.log(duplicates);

