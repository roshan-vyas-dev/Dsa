// Remove Spaces from String

const str = "I love JavaScript";

let result="";

for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        result+=str[i]
    }
}

console.log(result);
