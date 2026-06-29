// Count Common Elements

const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2, 4];

let obj = {};
let count = 0;

for (let i = 0; i < arr1.length; i++) {

    if (obj[arr1[i]]) {
        obj[arr1[i]]++;
    } else {
        obj[arr1[i]] = 1;
    }
}



for(let i=0;i<arr2.length;i++){
    if(obj[arr2[i]]>0){
        count++;
    }
}

console.log(count);


