// First Even Number

const arr = [7, 11, 9, 8, 4, 2];

let firstEven=null;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        firstEven=arr[i]
        break
    }
}

console.log(firstEven);
