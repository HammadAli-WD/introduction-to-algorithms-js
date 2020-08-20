# Quick Sort

Quick sort is another algorithm that we use divide and conquer approach.

In this recursive function our base case to return array is array.length<=1

Steps : 

1 . we choose  a step and pop it out.

2 . then we create two arrays gtPivot and ltPivot (greater than pivot and less than pivot)

3. in loop we are comparing all elements with pivot if element is gt pivot it goes gt,else it goes lt array.

4. we call function with sub arrays and concat them with the order lt,pivot,gt


```js
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

```
