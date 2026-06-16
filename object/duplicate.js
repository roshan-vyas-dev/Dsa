// Find Duplicate Words

const str = "apple banana apple mango banana";

let words = str.split(" ");

let obj = {}

for (let i = 0; i < words.length; i++) {

    if (obj[words[i]]) {
        obj[words[i]] = obj[words[i]] + 1
    } else {
        obj[words[i]] + 1
    }

}

console.log(obj);
