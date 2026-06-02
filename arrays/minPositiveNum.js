// Find Minimum Positive Number


const arr = [-2, 5, -1, 8, 0, 3];

let minPositive=Infinity;

for(let i=1;i<arr.length;i++){
    if(arr[i]>0 && arr[i]<minPositive ){
        minPositive=arr[i]
    }
}

console.log(minPositive);
