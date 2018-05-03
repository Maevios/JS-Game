// initializing a new Phaser game:
// calling the Phaser Game class with constructor arguments:
// Stage width, height, rendering context (CANVAS, WEBGL, AUTO), HTML container ID  - if empty, game is attached to <body>, object defining the Phaser main game states

var timer, timerEvent, text;

var level2={
 
 create:function(){

    // Create a custom timer
    timer = game.time.create();
        
    // Create a delayed event 1m and 30s from now
    timerEvent = timer.add(Phaser.Timer.SECOND * 30, this.endTimer, this);
    
    // Start the timer
    timer.start();

     //add cat sound
    bearScream = game.add.audio('bearScream',0.5);
	// world building / game setup
	game.add.sprite(0,0,"bg2");
	// attaching the catcher
	catcher = game.add.sprite(game.width / 2, game.height / 2, "catcher");
	catcher.anchor.setTo(.5,0);
	game.physics.enable(catcher, Phaser.Physics.ARCADE);
	
    bear = game.add.sprite( Math.random() * game.width, Math.random() * game.height, "bear");
    dino = game.add.sprite( Math.random() * game.width - 50, Math.random() * game.height - 50, "dino");
    dino.width = 100;
    dino.height = 100;

    

    game.physics.enable(bear, Phaser.Physics.ARCADE);
    game.physics.enable(dino.children, Phaser.Physics.ARCADE);
	// invoke game controls
	cursors = game.input.keyboard.createCursorKeys();
	
	//creating the score
	score=0;
	//the textfield to display score
	//arguments: coordinates,value,style
	scoreTxt = game.add.text(10,10,score.toString(),styles);
	var styles = {
		font:'20px Verdana',
		fill: 'red'		
	};
},
	
 update:function(){
	// run the game loop
	// if left arrow is pressed
	if(cursors.left.isDown && catcher.x>20){
		catcher.x -= 5;
		// scaling 100%, pointing at the original direction
		catcher.scale.x = 1;
	}
	if(cursors.right.isDown && catcher.x<785){
		catcher.x += 5;
		// scaling 100%, pointing at the opposite direction
		catcher.scale.x = -1;
	}
	if(cursors.up.isDown && catcher.y>20){
		catcher.y -= 5;
	}
	if(cursors.down.isDown && catcher.y<585){
		catcher.y += 5;
    }

    if (score === 10){
        this.win();
    }
	//implementing the HitTest
	// arguments : objects,callback function
    game.physics.arcade.overlap(bear,catcher, this.bearHitHandler);
    game.physics.arcade.overlap(dino,catcher, this.lose);
    
},

win:function(){
    game.world.remove(catcher);
    game.world.remove(scoreTxt);
    game.world.remove(bear);
    game.world.remove(dino);
    
    score = 0;
   
    var instructions = game.add.text(350, 300, 'You win!!', {
        font: "25px Luckiest Guy",
        fill: "#fff"
    })
    
        instructions.y = 0;
        var bounce=game.add.tween(instructions);
        bounce.to({ y: 350 }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
        bounce.start();
    
        setTimeout(function() {
            game.state.start("splash1")
            }, 5000);
},

lose:function(){
    game.debug.text("You lose!", 380, 300, "#ff0");
    game.world.remove(catcher);
    game.world.remove(scoreTxt);
    game.world.remove(bear);
    game.world.remove(dino);
    score = 0;
    setTimeout(function() {
        game.state.start("level2")
        }, 3000);
    
},

render: function () {
    // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
    if (timer.running) {
        game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 750, 30, );     
    }
    else {
       this.lose();
    }
},
endTimer: function() {
    // Stop the timer when the delayed event triggers
    timer.stop();
},
formatTime: function(s) {
    // Convert seconds (s) to a nicely formatted and padded time string
    var minutes = "0" + Math.floor(s / 60);
    var seconds = "0" + (s - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);   
},

//extra functionality
 bearHitHandler:function(bear){
    console.log('Bear cought');
    bear.x = Math.random() * game.width;
    bear.y =Math.random() * game.height;
    dino = game.add.sprite( Math.random() * game.width - 50, Math.random() * game.height - 50, "dino");
    dino.width = 100;
    dino.height = 100;
    score ++;
    scoreTxt.setText(score.toString());
    bearScream.play();
},

}
