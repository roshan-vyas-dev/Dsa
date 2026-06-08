// Find Largest Word(s)

const str = "apple mango grape";

const words = str.split(" ")
let maxLength = words[0].length;

let result = []

for (let i = 1; i < words.length; i++) {

    if (words[i].length > maxLength) {
        maxLength = words[i].length
    }

}
// console.log(maxLength);

for (let i = 0; i < words.length; i++) {
    if (words[i].length === maxLength) {
        result.push(words[i])
    }
}

console.log(result);


