// Find Maximum Even Number

const arr = [7, 12, 3, 20, 8, 15];

let maxEven=-Infinity;

for(let i=0;i<arr.length;i++){

    if( arr[i]%2===0 &&  arr[i]>maxEven ){
        maxEven=arr[i]
    }
}

console.log(maxEven);
