const os = require('os');
const readline = require('readline').createInterface({
    input: process.stdin, // <stream.Readable>
    output: process.stdout //<stream.Writable> 
});


    readline.question('1 or 2?', num => {
        if (num === '1') {
            console.log(`Home directory is ${os.homedir()}!`);
            readline.close();
        } if (num === '2') {
            console.log(`Architecture is ${os.arch()}!`);
            readline.close();
        } else {
            console.log("Choose 1 or 2!");
            readline.close();
        }
    });