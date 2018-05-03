var ball;
var splash1={
 create:function() {

    
    game.add.sprite(0,0,"bg");
    var instructions = game.add.text(200, 350, '                           Level 1:\n       Use the arrow to move the cather.\nTry to cath 10 cats before the time runs out!', {
        font: "25px Luckiest Guy",
        fill: "#fff"
    })
        instructions.y = 0;
        var bounce=game.add.tween(instructions);
        bounce.to({ y: 250 }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
        bounce.start();

        setTimeout(function() {
        game.state.start("level1")
        }, 5000);
   
},
onComplete:function() {
    this.tween = game.add.tween(instructions).to( { y: 700 }, 1000, Phaser.Easing.Exponential.Out, true, 2500);
    }
}