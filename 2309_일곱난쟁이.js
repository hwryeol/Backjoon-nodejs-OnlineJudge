const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    input = input.map((num)=>parseInt(num));
    const sum = input.reduce((prev,curr)=> prev+curr);
    outer: for(let i=0;i<9;i++){
        for(let j=i+1;j<9;j++){
            if(sum - (input[i] + input[j]) === 100){
                const result = input.filter((num) => !(num === input[i] || num === input[j]))
                result.sort((a,b) => a - b);
                result.map(num => console.log(num))
                break outer;
            } 
        }
    }
    process.exit();
});