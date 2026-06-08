// Find Largest Word

const str = "I love JavaScript programming";

const words = str.split(" ");

let largest =words[0]

for (let i = 1; i < words.length; i++) {
    if(words[i].length>largest.le){
        largest=words[i]
    }

}
console.log(largest);
