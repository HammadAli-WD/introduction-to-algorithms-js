# Memoization with closure

Closure approach  is keeping  cache alive in function's scope.

With this way global cache is not causing problems with same keys. So its private for global, and accessible for only within function.



```js
const tenTimesClosure = () => {
    let cache = {};
    return (n) => {
        console.log(`Cache is ${JSON.stringify(cache)}`);
        if(n in cache){
            console.log(`Getting from cache : ${cache[n]}`)
            return cache[n];
        }
        else{
            let result = 10*n;
            cache[n]=result;
        
            console.log(`Calculated result : ${result}`)
            return result;             
        }
    }
}

const memoizedClosure  = tenTimesClosure();
    try{
      // this is the function returned and it is calculating the result
        memoizedClosure(10);
       
         // this is the function fetching calculated result from cache.
        memoizedClosure(10);
    }
    catch(e){
        console.error(e)
    }

```



## Next Step : Generic Closure


Lets move calculation function is outside with a callback so we can make it more dynamic.



```js
 const calculate = (n)=>n*10;
 const memoizedClosure  = tenTimesClosure(calculate);
  try{
        memoizedClosure(10);
        memoizedClosure(10);
    }
    catch(e){
        console.error(e)
    }
    const tenTimesClosure = (callback) => {
    let cache = {};
    return (n) => {
        console.log(`Cache is ${JSON.stringify(cache)}`);
        if(n in cache){
            console.log(`Getting from cache : ${cache[n]}`)
            return cache[n];
        }
        else{
            let result = callback(n);
            cache[n]=result;
        
            console.log(`Calculated result : ${result}`)
            return result;             
        }
    }
}

```


