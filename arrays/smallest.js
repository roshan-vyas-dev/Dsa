// find smallest element in arr

const arr = [12, 5, 8, 1, 20];

let smallest=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}

console.log(smallest);
