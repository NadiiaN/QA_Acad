function add(num1, num2) {
   return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function divide(num1, num2){
    if (num2 != 0) {
        return num1 / num2;
    }
    else
    console.log("Error: cannot divide by 0");
};

function multiply(num1, num2){
    return num1 * num2;
};

function calculate(num1, num2, num3) {
    switch(num3) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "/": return divide(num1, num2);
        case "*": return multiply(num1, num2);
        default: console.log(num3 + " doesn't exist");
    }
}
console.log("Result: " + calculate(8, 2, "/"));
/*console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
    
    }   
  });*/
