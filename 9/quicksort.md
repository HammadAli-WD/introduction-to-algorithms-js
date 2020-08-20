# Quick Sort

Quick sort is another algorithm that we use divide and conquer approach.

In this recursive function our base case to return array is array.length<=1

Steps : 

1 . we choose  a step and pop it out.

2 . then we create two arrays gtPivot and ltPivot (greater than pivot and less than pivot)

3. in loop we are comparing all elements with pivot if element is gt pivot it goes gt,else it goes lt array.

4. we call function with sub arrays and concat them with the order lt,pivot,gt
