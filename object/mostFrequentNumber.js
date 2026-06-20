    // Find Most Frequent Number

    const arr = [1, 2, 2, 3, 4, 4, 4, 5];

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    console.log(obj);

    let maxNum=null;
    let maxCount=0;


    for(let key in obj){
        if(obj[key]>maxCount){
            maxCount=obj[key];
            maxNum=key
        }
    }

    console.log(maxNum);

