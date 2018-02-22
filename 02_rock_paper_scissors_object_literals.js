// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript




// other global variables


	var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
 		// object literals can contain properties and methods:
		
		 //properties of the object
		  playerChoiceDisplay : document.getElementById("player_choice"), // display player's choice
		  computerChoiceDisplay : document.getElementById("computer_choice"), // display computer's choice
		  resultDisplay : document.getElementById("result"), // display the game result


		 computerChoice : '',
		 userChoice : '',
		 
		 
		
		// a method 

		 computerInput :function(){
	 
			
			switch(Math.floor( Math.random()*3)){ // retutn a whole number between 0 and 2
				case 0:
				this.computerChoice = "Rock";
				break;
				case 1:
				this.computerChoice = "Paper";
				case 2:
				this.computerChoice = "Scissors";
			}
		},
		
		 compare : function(){
			//draw
			if (this.userChoice===this.computerChoice){
				this.resultDisplay.innerHTML = 'Game is a draw';
			} else if(this.userChoice==='Paper' && this.computerChoice === 'Rock'){
				this.resultDisplay.innerHTML = 'You win';
			}else if(this.userChoice==='Paper' && this.computerChoice === 'Scissors'){
				this.resultDisplay.innerHTML = 'You lose';
			}else if(this.userChoice==='Scissors' && this.computerChoice === 'Rock'){
				this.resultDisplay.innerHTML = 'You lose';
			}else if(this.userChoice==='Scissors' && this.computerChoice === 'Paper'){
				this.resultDisplay.innerHTML = 'You win';
			}else if(this.userChoice==='Rock' && this.computerChoice === 'Paper'){
				this.resultDisplay.innerHTML = 'You lose';
			}else if(this.userChoice==='Rock' && this.computerChoice === 'Scissors'){
				this.resultDisplay.innerHTML = 'You win';
			}
		},
		
		 display :function(){
			// to make user and computer choice visible
			this.playerChoiceDisplay.innerHTML = this.userChoice;
			this.computerChoiceDisplay.innerHTML = this.computerChoice;
		}
		///// module end /////
	};

	var buttons = document.getElementsByClassName("button"); // returning an array
	for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);

	}
	function play() {
		myGame.userChoice = this.id; // registering the buttons id that triggers the function play!
		myGame.computerInput();
		myGame.compare();
		myGame.display();
	}
