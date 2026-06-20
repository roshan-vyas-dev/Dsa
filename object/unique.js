// Find Unique Numbers

const arr = [1, 2, 2, 3, 4, 4, 5];

let obj={};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]=obj[arr[i]]+1
    }else{
        obj[arr[i]]=1
    }
}

let unique=[];

for(let key in obj){
    if(obj[key]===1){
        unique.push(Number(key))
    }
}

console.log(unique);


