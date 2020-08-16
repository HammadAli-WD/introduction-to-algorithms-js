## Example : Binary Search

Search for a a value in a **sorted** array by cutting the side of the search area in half.


### Steps : 
Lets say we are looking for 3 : 


Initial array is : 
```js

let array = [1,2,3,4,5,6,7,8,9,10];

```
Step 1 : 



Middle is 5 

is 3 less than 5 ? Yes , so we get left part.

```js
array = [1,2,3,4,5];

```


Step 2 : 



Middle is 2 

is 3 less than 2 ? No , so we get right part.

```js
array = [1,2,3,4,5];

```


Step 2 : 



Middle is 4

is 4 less than 2 ? No , so we get right part.

```js
array = [3,4,5];

```


Middle is 3

Value found.

```js
array = [3];

```


### Implementation & Complexity

Since we are splitting array in two we can split maximum $logn$ times. Thats why complexity is $O(n^2)$


```js

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

```