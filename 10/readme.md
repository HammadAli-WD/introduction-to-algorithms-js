# Greedy Algorithms


Greedy only cares local minimum.



## Example


### **Problem Statement**

You have to pay your bills but you have to use with bigger coins and  you must pay it with least coins of number.




### Solution 


```js

function makeChange(amount,coins){
    let changes = []
    coins = coins.sort((a,b)=>a-b)
    while(amount>0){
        const max = coins[coins.length-1]
        if(amount>=max){
            amount=amount-max;
            changes.push(max)
        }
        else{
            coins.pop()
        }
    }
   return changes;
}

function main(){
    const coins = [1,5,10,20,50,100,200,500,1000];
    console.log(makeChange(750,coins))
}

main()

```