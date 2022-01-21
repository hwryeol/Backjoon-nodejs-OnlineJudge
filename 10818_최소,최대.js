const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let max = -1000000;
let min = 1000000;

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    const N = input[0];
    const num = await input[1].split(' ');
    num.map((n)=>{
        n = parseInt(n);
        if(n>max){
            max = n;
        }if(n<min){
            min = n;
        }
    })
    console.log(min,max)
});