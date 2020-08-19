function insertionSort(array){
    let swaps = 0;
    for(let i = 1;i<array.length;i++){
       for(let j = 0;j<i;j++){
        if(array[i]<array[j]){
            array=swap(array,i,j)
        }
        swaps++
       }
       
    }  
    console.log({swaps})
    return array 
}
function swap(array,a,b){
    [array[a],array[b]] = [array[b],array[a]];
    return array
}