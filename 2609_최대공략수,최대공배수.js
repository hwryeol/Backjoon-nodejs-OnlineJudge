const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function getGCD(A,B){
    const r = A%B;
    if(r==0){
        return B;
    }
    return getGCD(B,r);
}

let input = [];
rl.on('line',(line)=>{
    input = line.split(" ").map(((n)=>parseInt(n)));
})
rl.on('close',()=>{
    const A = input[0];
    const B = input[1];
    const gcd = getGCD(A,B);
    const lcd = (A*B)/gcd;
    console.log(gcd);
    console.log(lcd)
})