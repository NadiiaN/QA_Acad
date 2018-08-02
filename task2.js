let circle = {
    type:"circle",
    r:8
};

let triangle = {
    type:"triangle",
    side_a:8,
    side_b:9,
    hypotenuse: 23
}
let square = {
    type:"square",
    side:5
};

function calcArea(figure){
    switch (figure.type){
        case "circle":
           return Math.PI * (circle.r * circle.r);
        case "triangle":
           return (triangle.side_a * triangle.side_b) / 2;
        case "square":
           return square.side * square.side;
        default:
           return "Can't find area"; 
    }
}
console.log("Triangle area: " + calcArea(triangle) + ", square area: " + calcArea(square) + ", circle area: " + Math.round(calcArea(circle)));
let a = calcArea(triangle);
let b = calcArea(square);
let c = Math.round(calcArea(circle));
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
 console.log(sort(a, b, c));
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
