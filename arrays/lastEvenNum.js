//  last even number

const arr = [7, 11, 8, 4, 2, 9];

let lastEven=null;

for(let i=0;i<arr.length;i++){

    if(arr[i]%2==0){
        lastEven=arr[i]
    }
}

console.log(lastEven);
