function sort(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a + ", " + b + ", " + c);
        }
        else {
            console. log(a + ", " + c + ", " + b);
        }
    }
    else if (b > a && b > c) {
        if (a > c) {
            console.log(b + ", " + a + ", " + c);
        }
        else {
            console.log(b + ", " + c + ", " + a);
        }
    }
    else if (c > a && c > b) {
        if (a > b) {
            console.log(c + ", " + a + ", " + b);
        }
        else {
            console.log(c + ", " + b + ", " + a);
        }
    }
}
 sort(8, -4, 26);
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
