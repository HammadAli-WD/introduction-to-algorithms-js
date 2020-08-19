function swap(array,a,b){
    [array[a],array[b]] = [array[b],array[a]];
    return array
}

function bubbleSort (array){
    let swapping= true
    do {
        swapping=false
        for(let i =0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                array=swap(array,i,i+1)
                swapping=true;
                console.log(array)
            }
        }
    }
    while(swapping)
    return array;
}