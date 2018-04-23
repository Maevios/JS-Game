var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game')
	
var cat, catcher, cursors, scoreTxt;

game.state.add('level1', level1);
// game.state.add("splash1", splash1);
// game.state.add('level2', level2);
// game.state.add('splash2', splash2);
game.state.add('boot', boot);

game.state.start('boot')