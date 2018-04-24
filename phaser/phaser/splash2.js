var ball;
var splash2={
 create:function() {

    
    game.add.sprite(0,0,"bg2");
    var instructions = game.add.text(150, 350, '                                 Level 2:\nNow try to cath all the bears before the time runs out!\n                 But be careful for the Boss!', {
        font: "25px Luckiest Guy",
        fill: "#fff"
    })
    setTimeout(function() {
        game.state.start("level2")
    }, 5000);

    instructions.y = 0;

        var bounce=game.add.tween(instructions);
    
        bounce.to({ y: 250 }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
        bounce.start();
   
}
}