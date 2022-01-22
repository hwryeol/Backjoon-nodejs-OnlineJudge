const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    const result = input.map(str => str.split(" ").map(n => parseInt(n))).filter(result => result.length>1);
    result.map(arr => arr.sort((a,b)=>a-b));
    result.map(n=>console.log(n[7]))
});