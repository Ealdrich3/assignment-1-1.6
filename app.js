/*
document.write("pleasework");
//old way
var life = 100 ; // lifebar for easten

life = life - 10;

//90

life = life - 10;

let name = 'easten 1'; 

let checkout = false; // BOOLEAN 

let box = null; 

//object synbol

console.log(name)
// disable


// new way
const health =100;

const hp =1000;  
*/

/*
const name="Workingstudent"; //globalscope

function logger() {
    console.log("productivetime");
    console.log("productivetime"); //function scope
    console.log("productivetime");
    console.log("productivetime");
}

logger();//global scope

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5,10);

function toUpper(text) {
    const uppercased = text.toUpperCase();
    console.log(uppercased);
}

toUpper(name);

const toupper = () =>{
    
}

const student = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  */

  /*
const age = 18;
let text = "123456789123456789";
let length = text.length;

if(age > 18){       //if statement
    console.log('you are good to go!');
} else if(age < 15) {  //else statement 
    console.log('wow you are really young... why are you here');
}

else {
    console.log('you are not old enough');
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 === 6) {  // ||= or statement
    console.log("You rolled a double");
} else{
    console.log("you didnt");
}
*/

const names= ["Luffy", "Naruto", "Goku", "deku", "Tanjiro", "Saitama", "Denji"];

for (name of names) {
    console.log(name);
    if (name === "Saitama") {
        console.log("Saitama has won the fight");
        break;
    }
}

let loading = 0 

while (loading < 100) {
    console.log("Website is still loading")

    loading++; 
}

const text = document.querySelector(".title");
const changecolor = document.querySelector(".changecolor");

text.style.transform = "red";

changecolor.addEventListener("click", function(){ //callback function
    text.classList.toggle("change")
}) ;

const userlist= document.querySelectorAll("name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function() {
    const newLi = document.createElement("li");
    const licontent = document.createTextNode(listinput.value);
    newLi.appendChild(licontent);
    userlist.appendChild(newli);
}
)


