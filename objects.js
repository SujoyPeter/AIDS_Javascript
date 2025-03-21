//Array vs Objects
var a = {};

var Abhishek = {
    name: "Abhishek",
    age: 25,
    occupation: "Software Engineer",
    salary: 200000
};

var b = { ...Abhishek };

Abhishek.age = 29;
Abhishek.salary = 250000
console.log(Abhishek.age)
console.log(Abhishek.salary)

//For-In Loop

for (var key in Abhishek) {
    console.log(key + " " + Abhishek[key])
}

