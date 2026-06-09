// Find Most Frequent Character

const str = "javascript";

let obj = {}

for (let i = 0; i < str.length; i++) {

    if (obj[str[i]]) {
        obj[str[i]] = obj[str[i]] + 1
    } else {
        obj[str[i]] = 1
    }
}

// console.log(obj);

let maxChar = "";
let maxCount = 0;

for(let key in obj){
    if(obj[key]>maxCount){
        maxCount=obj[key];
        maxChar=key
    }
}
console.log(maxCount);
console.log(maxChar);


