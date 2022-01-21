const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = 0;
let max = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    input = input.map(num => num.split(" ").map(num => parseInt(num)))
    for(let i=0; i<input.length; i++){
        result = result - input[i][0];
        result = result + input[i][1];
        if(max<result){
            max = result;
        }
    }
    console.log(max);
});