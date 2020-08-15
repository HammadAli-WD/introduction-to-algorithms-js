const isUniqueQuadratic = (array) => {
    const past = Date.now()
    let result = true;
    for (let i =0;i<array.length;i++){
        for(let j =0;j<array.length;j++){
            if(i!==j&&array[i]===array[j]){
                result = false;
            }
        }
    }
    const next = Date.now();
    const time = next-past;
    return {result,time};
}

const isUniqueLinear = (array) => {
    const past = Date.now();
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
    const next = Date.now();
    const time = next-past;
    return {result,time};
}
// random array
const r = (n)=> {
    const array = []
    for(let i=0;i<n;i++){
        const n = Math.ceil(Math.random()*10000000000)
        array.push(n)
    }
    return array;
}
const array = r(10000)
 console.log(`
 
    O(n^2) Solution : ${JSON.stringify(isUniqueQuadratic(array))}
    O(n) Solution : ${JSON.stringify(isUniqueLinear(array))}

`) 
