const str = "apple banana apple mango banana apple";

let words = str.split(" ")

let obj = {};

for (let i = 0; i < words.length; i++) {

    if (obj[words[i]]) {
        obj[words[i]] = obj[words[i]] + 1

    } else {
        obj[words[i]] = 1
    }
}

// console.log(obj);

let duplicates=[];

for(let key in obj){
    if(obj[key]>1){
        duplicates.push(key)
    }
}

console.log(duplicates);

