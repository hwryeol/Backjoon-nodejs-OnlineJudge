const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count;
function isPrime(n){
  if(n === 2){
    return true;
  }
  if(n === 1){
    return false;
  }
  if(count <= 1){
    return true;
  }
  if(n%count === 0){
    return false
  }
  count--;
  return isPrime(n);
}

let output = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", async function() {
    const result = input.map(str => str.split(" ").map(n => parseInt(n))).filter(result => result.length>1);
    result[0].map(num => {
      count = parseInt(Math.sqrt(num));
      if(isPrime(num)){
        output++;
      }
    })
    console.log(output);
});