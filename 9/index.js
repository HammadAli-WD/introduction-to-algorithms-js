function mergeSort(array){
    const length = array.length;
    if(array.length===1){
        return array;
    }
    const mid = Math.ceil(array.length/2)
    const leftPart = array.slice(0,mid);
    const rightPart = array.slice(mid,length);
    return merge(mergeSort(leftPart),mergeSort(rightPart))
}

function merge(left,right){
    const sorted = [];
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            sorted.push(left[0]);
            left.shift();
        }
        else{
            sorted.push(right[0]);
            right.shift();
        }
    }
    console.log(sorted.concat(left).concat(right))
    return sorted.concat(left).concat(right)
}


function main (){
    const array = [38,27,43,3,9,82,10];

    console.log(`
            Array : ${array};
            Sorted : ${mergeSort(array)}
    `)
}
main()