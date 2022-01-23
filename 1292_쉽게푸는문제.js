const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let sequenceArray = [];

function sequence(N,r){
    sequenceArray.push(N);
    if(N<=1){
        return;
    }
    if(r<=1){
        return sequence(N-1,N-1);
    }
    
    return sequence(N,r-1);
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    input = input.map(str => str.split(" ").map(num => parseInt(num)))[0];
    const A = input[0];
    const B = input[1];
    sequence(B,B);
    sequenceArray = sequenceArray.reverse();
    const output = sequenceArray.slice(A-1,B)
    console.log(output.reduce((prev ,curr) => prev+curr))
});