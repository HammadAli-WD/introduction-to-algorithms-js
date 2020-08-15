# Unique Array Benchmark 

Algorithm : Check if array is unique.



## $O(n^2)$ Solution 

This solution compares all elements when they are not at same position in array.


Since we are running 2 nested array , complexity is $O(n^2)$ , quadratic.


```js

const isUnique = (array) => {
    let result = true;
    for (let i =0;i<array.length;i++){
        for(let j =0;j<array.length;j++){
            if(i!==j&&array[i]===array[j]){
                result = false;
            }
        }
    }
    return result;
}

```


## $O(n)$ Solution 

Object look up's complexity is constant $O(1)$ thats why we only care loop. Loop is running n time so  complexity is linear , $O(n)$
```js
const isUnique = (array) => {
    const check = {};
    let result = true
    for(let i =0; i<array.length;i++){
        if(check[array[i]]){
            result=false;
        }
        else{
            check[array[i]]=true;
        }
    }
    return result;
}
```


## Unique Sort Challenge

First we make array unique with the complexity $O(n)$
And when we sort we have $O(n*logn)$ complexity

so totally we care worst case  $O(n*logn)$ complexity