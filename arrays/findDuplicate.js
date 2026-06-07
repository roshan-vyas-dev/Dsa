//  Find Duplicate Element

const arr = [1, 2, 3, 2, 5];

let duplicate=null;

for(let i=0;i<arr.length;i++){

    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            duplicate=arr[i]
        }

    }
}

console.log(duplicate);
