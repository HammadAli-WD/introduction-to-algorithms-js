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
    const coins = [1,6,10];
    console.log(makeChange(12,coins))
}

main()