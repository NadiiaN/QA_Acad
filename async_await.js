console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
setTimeout(() => {
    console.log("3");
    resolve();
}, 3000));
/*
p1.then(() =>{
    console.log("4");
});
*/
async function test(promise) {
    await promise;
    console.log("4");
}
test(p1);

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
