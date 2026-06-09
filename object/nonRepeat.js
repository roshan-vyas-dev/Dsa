// First Non-Repeating Character

const str = "aabbcdde";

let obj = {};

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
        obj[str[i]] = obj[str[i]] + 1
    } else {
        obj[str[i]] = 1
    }
}
// console.log(obj);
let noRepeat = "";

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
        noRepeat = str[i];
        break;
    }
}
console.log(noRepeat);
