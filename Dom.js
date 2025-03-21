//Pillars Of DOM
//1. Elements:- change or modify
//2. CSS:- change or modify
//3. Event listener :- 


//Modifying an Element


// var a = document.querySelector("h1");
// console.log(a);
// a.innerHTML = 'Badal gaya'

// a.style.backgroundColor = "black";
// a.style.color = "yellow";


//Adding an Element

// const b = document.createElement("p");
// const input = document.createTextNode("This is a para created by js");

// b.appendChild(input);

// const element = document.querySelector("h1")
// element.appendChild(b);


//Remove an Element

// b.remove();


var a = document.querySelector("h1");//Selecting An Element

a.addEventListener('click', function handleClick() {
    console.log("Badhai ho Click ho gya");
    a.textContent = 'Badal gaya hu bro aab party de';
    a.style.setProperty("background-color", "black");
    a.style.setProperty("color", "yellow");
});


