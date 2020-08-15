# Calculating Time

For multiple expressions, if the expression is loop we multiply loop iteration number otherwise, we sum expression number.


## Example for loop 


```js

for (let i =0; i<n;i++){
    for(let j=0; j<n;j++){
        // do something
    }
}

```

Since this  expression is 2 nested loop  , its complexity is $O(n^2)$


```js

const something = 1+1;
const otherThing = something*5;

```
There is two operation here so complexity is $O(2)$.





## Example 

Looping until strings length's (n long string) complexity is $O(n)+2$ .

```js

const countChars = function(str){
    const count = 0; // 1 op
    for (let i = 0; i < str.length;i++){
        count++ // str.length op
    }
    return count;  // 1 op
}

```

We care only worst case so, $O(n)$ ,linear.



## Example 

Adding one element and removing first one adding to head

```js

const hello = ["hello","hola"];
hello.push("bonjour"); // 1 op
hello.shift(); // n op
hello.unshift("merhaba") // n op

```
Total Complexity : 

push is 1 op $O(1)$

shift is n op $O(n)$

unshift is n op $O(n)$


Total $2*O(n)+1$


## [Unique Sort Challenge](./example.md)








