const arr = [-2, 5, -1, 8, 0, 3];

let positiveCount=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        positiveCount++
    }
}

console.log(positiveCount);

