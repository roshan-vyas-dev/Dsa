// Find First Vowel

const str = "sky";

let firstVowel = null;

for(let i=0;i<str.length;i++){

      if(str[i]==="a" || str[i]==="e"|| str[i]==="i"||str[i]==="o"||str[i]==="u"){
        firstVowel=str[i];
        break;
    }


}

console.log(firstVowel);
