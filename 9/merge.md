# Merge Sort 



##  Step 1 : 


-  Divide input array into n single element subarrays. 


Complexity  $O(logn)$

##  Step 2 : 
- Compare first of left array to right array's first

- Push the first lower value to empty array

Complexity  $O(1)$

##  Step 3 : 
- Shift the array with lower value


Complexity  $N/A$
##  Step 4 : 
- Do  steps above , until one of list is empty, when it is empty, merge remainings  and return

Complexity  $O(n)$

Total complexity is $O(nlogn)$
                  
```js

                  
                   [38,27,43,3,9,82,10]
                   /                  \
            [38,27,43,3]            [9,82,10]
             /     \               /        \
        [38,27] [43,3]            [9,82]     [10]
      /   /      |    \          /      \       \ 
    [38]  [27]   [43]  [3]     [9]    [82]    [10]
        \/          \ /         \       |      /
        [27,38]       [3,43]      [9,   82]    [10]         
            \       /            \    |    /
           [3,27,8,43]          [9 , 10 , 82]
                     \                / 
                     [3,8,9,10,27,43,82]

```

 


```js

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
   
    return sorted.concat(left).concat(right)
}



```


### Question : 


How to find median values of two sorted arrays ?