# Insertion Sort Order

Insertion sort is optimized version of bubble sort. If there is swap at some point it means there is no unsorted pairs before, thats why it starts from last swapped position.


Insertion sort is only  useful when we know array is partially sorted.

## Complexity 

Worst case complexity is $O(n^2)$


```js

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

```