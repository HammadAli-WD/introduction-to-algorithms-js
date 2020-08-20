function findMedian(array1,array2){
    let middle = Math.floor(array1.length+array2.length/2)
    let i =0;
    let newArray = [];
    while(middle>0){
        if(array1[0]>array2[0]){
            newArray.push(array1.shift())
        }
        else{
            newArray.push(array2.shift())
        }
        middle--
    }
    newArray = newArray.concat(array1).concat(array2);
    console.log(newArray)
    return  newArray.pop() 
}


console.log(findMedian([9, 10, 12, 13, 13, 13,],[ 15, 15, 16, 16, 18, 22, 23, 24, 24, 25]))