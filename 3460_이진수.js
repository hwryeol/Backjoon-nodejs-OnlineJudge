const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isT = true;
let T = 0;
let count = 0;

rl.on("line", function(line) {
    if(isT){
        T = line;
        isT = false;
    } else {
        let N = line;
        while(N>=1){
            if(N<1){
                break;
            }
            if(parseInt(N)%2 === 1){
                console.log(count)
            }
            N = N/2;
            count++;
        }
        count=0;
        }
    }).on("close", function() {
    process.exit();
});