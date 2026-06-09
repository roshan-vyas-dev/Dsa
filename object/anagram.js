// Check Anagram

const str1 = "listen";
const str2 = "silent";

if (str1.length !== str2.length) {
    console.log("not a anagram");
    return;
}

let obj = {}

for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
        obj[str1[i]] = obj[str1[i]] + 1
    } else {
        obj[str1[i]] = 1
    }
}

let isAnagram=true;

for (let i = 0; i < str2.length; i++) {

    if (!obj[str2[i]]) {
        isAnagram=false

        break;
    }

    obj[str2[i]]--;

}

console.log(isAnagram ? "anagram" : "not an anagram");

