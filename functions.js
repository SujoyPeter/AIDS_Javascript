//Functions 

/* 
When you want 
to run your code in future.

when you want to reuse code.

when you want to run your code with diff
data
*/

//Types of functions
//1. Traditional Functions
//2. Anonymous Function
//3. Arrow Functions

// Traditional Functions
function add(a, b) {
    return a + b;
}
// Anonymous Function

let ad = function (a, b) {
    return a + b;
}
// Arrow Functions

let bd = (a, b) => {
    return a + b;
}



function add() {
    let a = 5;
    let b = 10;
    let sum = a + b;
    console.log(sum);
}

function add(a1, a2) {
    return a1 + a2;

}
add();
add();
console.log(add(45, 37));
console.log(add("Sujoy", "Peter"));

