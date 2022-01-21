const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    const input = line.split(' ');
    const N = parseInt(input[0]);
    const K = parseInt(input[1]);
    let count = 0
    for(let i=1; i<=N; i++){
        if(N%i === 0){
            count++;
            if(count === K){
                console.log(i);
                count = 0;
                break;
            }
        }
    }
    if(count){
        console.log(0)
    }

}).on("close", function() {
  process.exit();
});