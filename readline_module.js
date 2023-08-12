const readline = require('readline');
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question('what is num1 + num2 ?\n', (userInput) => {
    if (userInput.trim() == answer) { rl.close(); }
    //console.log(userInput);
    else {
        rl.setPrompt("icorrcet\n");
        rl.prompt();
        rl.on("line", (userInput) => {
            if (userInput.trim() == answer) { rl.close(); }
            else {
                rl.setPrompt('your answer is wrong');
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log('correct!!!');
});
