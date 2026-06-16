// First Repeating Character

const str = "abcaed";


let obj={};

let repeating=null;

for(let i=0;i<str.length;i++){

    if(obj[str[i]]){
        repeating=str[i];
        break;
    }else{
        obj[str[i]]=1
    }
}

console.log(repeating);
