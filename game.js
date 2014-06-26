function Game() {
	this._screenWidth = null;
	this._screenHeight = null;
	this._canvas = null;
	this._players = [];
};

Game.prototype.setup = function()
{
	//capture the clients screen dimensions
	this._screenWidth = document.body.clientWidth - 20;
	this._screenHeight = document.body.clientHeight - 20;
	
	//create the drawing board for our game, we will use the html5 canvas
	var canvas = document.createElement('canvas');
	canvas.id     = "game-canvas";
	canvas.width  = this._screenWidth;
	canvas.height = this._screenHeight;
	canvas.style.zIndex   = 1;
	canvas.style.position = "absolute";
	canvas.style.border   = "1px solid";
	this._canvas = canvas;
	document.body.appendChild(canvas);
};

Game.prototype.addPlayer = function(new_player)
{	
	this._players.push(new_player);
	return true;
};

Game.prototype.drawPlayer = function(player)
{
	console.log("draw player");
	console.log(player);
	if(player.getContext() == null)
	{	
		console.log("hello");
		//get a 2d context on the game canvas
		var ctx = this._canvas.getContext("2d");
		var sprite = new Image();
		var pos = player.getPos();				
				
		sprite.onload = function() {
			console.log("sprite has loaded");
			ctx.drawImage(sprite, pos.x, pos.y);
			player.setSprite(sprite);
			player.setContext(ctx);
		}
		
		sprite.src = player.getSpriteFile();
	}
	else
	{
		var ctx = player.getContext();
		var sprite = player.getSprite();
		var pos = player.getPos();
		console.log(pos);
		console.log(sprite);
		ctx.clearRect(0,0,this._screenWidth, this._screenHeight);
		ctx.drawImage(sprite, pos.x, pos.y);
	}
}	























