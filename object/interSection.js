// Intersection of Two Arrays (Unique)


const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2, 4, 3];

let obj={};
let result=[];

for(let i=0;i<arr1.length;i++){
    
    obj[arr1[i]]=true

}

// console.log(obj);

for(let i=0;i<arr2.length;i++){
    if(obj[arr2[i]]){
        result.push(arr2[i]);
        obj[arr2[i]]=false


    }
}

console.log(result);









