// Scope: Global Variables
var number1 = 1;
var number2 = 11;
var output = document.getElementById('output');
var trigger = document.getElementById('trigger');

//Regular Function with a return value
function add(){
    var added = number1+number2;
    return added;
}

console.log(add());

//ECMA6 arrow function,with multiple statements you need to include a function body{}

var result = () => number1 + number2;
console.log(result());

// function with user input
//function userInput(){
    // let is restricting the scope of the actua; code block,statement or expression
   // let number1 = parseInt(prompt('Type a number :' , ''));
  //  let number2 = parseInt(prompt('Type a second number :' , ''));
   // var result  = number1 + number2;

    //output.innerHTML = "The result is :" + result;
//}

//console.log(userInput());


//constructor function

function player(name, score){
    this.name = name;
    this.score = score;

    //this.greeting = function(){
    //    alert("Hi" + this.name + " your score is " + this.score);
   // }  
}

//var myPlayer = new player('Angelos', 5);
//myPlayer.greeting();

// creating an m dimensional array using literal notation

var playerScore = [
    ['Jessica', 0],
    ['John', 3],
    ['Joe', 5],
    ['Mark', 8],
    ['Maria', 10],
];
console.log(playerScore);
playerScore.push(['Peter',65]);

function listPlayers(){
    for(var i=0; i<playerScore.length; i++){
        output.innerHTML += playerScore[i] + '<br>'
    }
}

trigger.addEventListener('click',listPlayers)