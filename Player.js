function Player(name) {	
	this._spriteFile = "images/mario.png";
	this._pos = { x:0, y:0};	
	this._name = name;
	this._context = null;
	this._sprite = null;
};

Player.prototype.setSprite = function(sprite)
{
	this._sprite = sprite;
};

Player.prototype.getSprite = function()
{
	return this._sprite;
};

Player.prototype.setContext = function(context)
{
	this._context = context;
}

Player.prototype.getContext = function()
{
	return this._context;
}

Player.prototype.getPos = function()
{
	return this._pos;
};

Player.prototype.setPos = function(x,y)
{
	this._pos.x = x;
	this._pos.y = y;
};

Player.prototype.getSpriteFile = function()
{
	return this._spriteFile;
};

Player.prototype.getName = function()
{
	return this._name;
};