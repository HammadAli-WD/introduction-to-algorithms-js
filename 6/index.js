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

function main(){
    const calculate = (n)=>n*10;
    const memoizedClosure  = tenTimesClosure(calculate);
    try{
        memoizedClosure(10);
        memoizedClosure(10);
    }
    catch(e){
        console.error(e)
    }
}

main()