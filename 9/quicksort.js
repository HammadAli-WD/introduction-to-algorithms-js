function quickSort(array){
    if(array.length<=1){
        return array;
    }
    const pivot = array.pop();
    const ltPivot = [];
    const gtPivot = [];
    for(let i = 0; i<array.length;i++){
        if(array[i]<pivot){
            ltPivot.push(array[i]);
        }
        else{
            gtPivot.push(array[i]);
        }
    }
    return [...quickSort(ltPivot),pivot,...quickSort(gtPivot)]
}

console.log(quickSort([4,69,19,10,2,48,556,3,57,8,44,71,6,4]))
//[2,3,4,4,6,8,10,19,44,48,57,69,71,556]