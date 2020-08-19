# Bubble Sort 

Bubble sort at least works one time, if there is swap at previous iteration it will run again.


## Swap Condition 

if first element is gt second element.


## Complexity

There is two loop inner and outer, do while's do permors for loop again if there is swap

So complexity is swap*n , worst case is $O(n^2)$
```js


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
            }
        }
    }
    while(swapping)
    return array;
}


```