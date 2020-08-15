// create a unique sort algorithm by mutating js sort;


const makeUnique = (array) => {
    const past = Date.now();
    const check = {};
    const a = [];
    let result = true
    for(let i =0; i<array.length;i++){
        if(check[array[i]]){
            result=false;
        }
        else{
            a.push(array[i])
            check[array[i]]=true;
        }
    }
    const next = Date.now();
    const time = next-past;
    return {result,time,array:a};
}
const uniqueSort=(arr)=>{
    const {array} = makeUnique(arr);
    return array.sort((a,b)=>a-b)
}

console.log(`
  

 Unique sort : ${uniqueSort([1,5,4,36,8,5,3,1])}

`)