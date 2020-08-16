const binarySearch=(array,value)=>{
    let left = 0;
    let right = array.length-1;
    console.log({left,right});
    while(left<=right){
        let middle = Math.ceil((left+right)/2);
        if(array[middle]===value){
            return middle;
        }
        else if(value<array[middle]){
            right = middle+1;
        }
        else{
            left = middle-1
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7],1))