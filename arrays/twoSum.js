// Two Sum

const arr = [2, 7, 11, 15];
const target = 9;


let sumArr = []

for (let i = 0; i < arr.length; i++) {


    for (let j = i + 1; j < arr.length; j++) {

       if(arr[i] +arr[j]===target){
        sumArr.push(i,j);
        break
       }

    }
}

console.log(sumArr);
