"use strict";

var game = new Game();
game.setup();

var player_one = new Player("player_one");

if(!game.addPlayer(player_one))
	console.log("Could not add player");
	
game.drawPlayer(player_one);

document.addEventListener('keydown', function(event) {
	var moveFactor = 10;
    var pos = player_one.getPos();
	var newX = pos.x;
	var newY = pos.y;
	
	if(event.keyCode == 37) {
        newX -= moveFactor;
    }
    else if(event.keyCode == 39) {
        newX += moveFactor;
    }
	else if(event.keyCode == 38)
	{
		newY -= moveFactor;
	}
	else if(event.keyCode == 40)
	{
		newY += moveFactor;
	}
	
	player_one.setPos(newX, newY);
	game.drawPlayer(player_one);
});