const factorial = (n) => n===1 || n ==0 ? 1 : n*factorial(n-1);

const cache = {}

 
const memoTimes10 = (n) => {
    if(n in cache){
        
        return cache[n]
    }
    else{
        const result = n*10;
        cache[n]=result;
       
        return result;
    }
}
console.log(`
     
    Factorial is ${5} is ${factorial(5)}
    MemoTimes10 : ${10} is ${memoTimes10(10)}
`)