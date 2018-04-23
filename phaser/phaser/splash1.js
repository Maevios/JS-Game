var ball;

function create() {

    startBounceTween();

    var instructions = game.add.text(game.world.centerX, -50, 'Level 1:\nMove the catcher with the arrow keys.\nCatch 10 cats in 30 seconds.', {
        font: "25px Luckiest Guy",
        fill: "#fff"
    })
    setTimeout(function() {
        game.state.start("level1")
    }, 5000);

    bgSound = game.add.audio('catScream');
        bgSound.play();
        bgSound.loopFull();
   
}

function startBounceTween() {

    instructions.y = 0;

    var bounce=game.add.tween(instructions);

    bounce.to({ y: game.world.height-ball.height }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
    bounce.onComplete.add(startBounceTween, this);
    bounce.start();

}