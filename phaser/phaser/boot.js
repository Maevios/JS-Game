var boot= {

preload:function(){

	game.load.image('bg', 'images/bg.png');
	game.load.image('catcher', 'images/catcher.png');
    game.load.image('cat', 'images/cat.png');
    game.load.image('bg2', 'images/bg2.png');
    game.load.image('bear', 'images/bear.png');

    game.load.audio('catScream', 'sound/cat.wav');
},
create:function(){
game.state.start('level1');
}
}