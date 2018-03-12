class player{
    constructor ( name ){
        this.name = person
    }
}

class dice extends player {
    constructor ( dice1, dice2, sum){
        super(name)
        this.dice1 = Math.floor(Math.random()* 6 + 1);
        this.dice2 = Math.floor(Math.random()* 6 + 1);  
        this.sum = this.dice1 + this.dice2;
    }
}

human = new dice; //create human player
computer = new dice; //create cimputer player

// var human_r = human.dice1 + human.dice2; // variable with sum for the human
// var computer_r = computer.dice1 + computer.dice2; // variable with sum for the human

//buttons
const refresh = document.getElementById("play-again");
const clear = document.getElementById("clear-data");
// display result
const result = document.getElementById("result");


 localStorage.setItem ("human_count" , 0);
 var human_count = localStorage.getItem ("human_count")

localStorage.setItem ("computer_count" , 0);
var computer_count = localStorage.getItem ("computer_count")



const human_dice_1 = document.getElementById("human-dice-1");  
    human_dice_1.innerHTML = "Dice #1 = " + human.dice1;

const human_dice_2 = document.getElementById("human-dice-2");
    human_dice_2.innerHTML ="Dice #2 = " +  human.dice2;

const human_result = document.getElementById("human-result");
    human_result.innerHTML ="Sum = " +  human.sum;

const computer_dice_1 = document.getElementById("computer-dice-1");
    computer_dice_1.innerHTML ="Dice #2 = " +  computer.dice1;

const computer_dice_2 = document.getElementById("computer-dice-2");
    computer_dice_2.innerHTML ="Dice #1 = " +  computer.dice2;

const computer_result = document.getElementById("computer-result");
    computer_result.innerHTML ="Sum = " +  computer.sum;


if(human.sum > computer.sum){
    result.innerHTML = "You Won!!"
   localStorage.human_count = Number(localStorage.human_count) + 1;
   // document.getElementById("human-score").innerHTML = human_count;
   // document.getElementById("computer_count").innerHTML = computer_count;
}
else{
    result.innerHTML = "You Lose..."
    localStorage.computer_count = Number(localStorage.computer_count) + 1;
  //  document.getElementById("computer_count").innerHTML = computer_count;
  //  document.getElementById("human-score").innerHTML = human_count;
}
if(human.sum === computer.sum){
    result.innerHTML = "It's a Draw!!"
   // document.getElementById("computer_count").innerHTML = computer_count;
   // document.getElementById("human-score").innerHTML = human_count;
}

// store name locally
if(localStorage.user){
    document.getElementById("user").innerHTML = "Nice to have you back " +  localStorage.getItem ("user") + "!!";
}else{
    var person = prompt("Please enter your name", "User");
    localStorage.setItem ("user" , person) 
    document.getElementById("user").innerHTML = "Nice to have you back " +  localStorage.getItem ("user") + "!!";
}
  

function clear_storage(){
   localStorage.clear();
}




