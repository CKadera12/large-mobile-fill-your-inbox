(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[322,0,114,60],[438,31,30,29],[438,0,30,29],[115,162,113,58],[230,182,113,58],[345,182,113,58],[322,62,113,58],[0,222,113,58],[115,222,113,58],[230,242,113,58],[345,242,113,58],[0,282,113,58],[115,102,113,58],[0,102,113,58],[230,122,113,58],[345,122,113,58],[115,282,113,58],[0,162,113,58],[0,0,320,100],[437,62,43,47]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bluetinlargemobile = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.candle2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.candle3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cookieeight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cookieeleven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookiefive = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cookieseven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cookieten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cookiethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cookietwelve = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.largemobiletable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.redcandle = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitecandle3gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candle3();
	this.instance.parent = this;
	this.instance.setTransform(-10.9,14.3,0.862,0.862,-96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-14.2,27.8,28.5);


(lib.whitecandle2gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candle2();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,14.8,0.788,0.788,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.7,29.1,29.6);


(lib.tablelargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobiletable();
	this.instance.parent = this;
	this.instance.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tablelargemobile, new cjs.Rectangle(-160,-50,320,100), null);


(lib.somethingdeliciouslargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgHA2IgLgCIgEACIgCABIgCgBIgDgBQgDgDgDgJQgDgIAAgIQAAgDACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAEAIIAFAGQADAEAFADQAGACAFAAQAHAAAEgDQAEgEAAgGQAAgIgRgJIgGgDQgQgIgGgGQgFgGAAgKQAAgOAJgIQAKgJAPAAIAGAAIAHACIAGgCIACgBQAGAAAEAIQAGAJAAAJQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgHQgEgGgEgDQgFgCgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEADAMAHIABAAQAdAOAAARQAAAOgLAKQgLAKgRAAg");
	this.shape.setTransform(95.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AAXA1QgBgCAAgDIAAgHIAAgBIgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBABIgBABQgFAFgGADQgGACgIAAQgHAAgIgCQgGgDgFgGQgEgGgDgJQgCgIAAgVIAAgIIAAgHIAAgCQABgIgCgDQgBgDgEgBIgEgBQgGgBAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABgBQABgCAIgCIAOgEIALgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAGIAAAFIgBAnQAAAUAEAIQAFAIAKAAQAMAAAFgKQAFgLAAgYIAAgJQAAgHgCgDQAAgDgEgBIgFgBQgFgBAAgEQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQACgCAHgCIAPgEIAKgCQABAAABABQAAAAABAAQAAAAABABQAAAAAAAAQACACAAAFIgBAHIgBAqIAAARIABAHQABAEAFACIACABQAGACAAAEIgBADIgHAEIgPAFIgLABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_1.setTransform(84.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAPgQAXgBQAXABANAPQAPAOAAAXQAAAXgQAQQgPAQgWAAQgWAAgPgPgAgTgeQgGAIgBAOQABAUAIAOQAJAOAMAAQAKAAAGgJQAHgJAAgOQAAgTgJgOQgJgNgLAAQgKAAgHAIg");
	this.shape_2.setTransform(72.6,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_3.setTransform(63.6,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AggAoQgPgQAAgXQAAgWAQgQQAPgQAXgBQARAAAMAJQAMAKAAALQAAAGgDACQgDAEgGAAQgFAAgEgDQgDgDgDgIQgDgIgEgDQgFgCgGAAQgLAAgGAJQgIAIABAQQAAASAJAMQAKALAOAAIAKgBQAEgBAFgDIADgDQAGgEADAAIADABIACADIgDAHIgFAHQgIAGgJAEQgJAEgKgBQgWABgOgPg");
	this.shape_4.setTransform(55.2,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_5.setTransform(46.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgRBLQgFgCAAgFQAAgCAEgCIAGgEQABgBABgHIABgUIAAgRIAAgTIAAgIQAAgagBgHQgBgIgCgBIgHgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAJgEIAOgEIAKgCQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQACACAAAFIgBAIIgBBKIABAjQABAJABABIAGAEQAFABAAAEQAAAEgFACQgFABgOABQgPgBgFgBg");
	this.shape_6.setTransform(40.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AghAoQgPgQAAgXQAAgXAQgPQAOgQAXgBQAVAAAMAMQALAMAAATQAAAHgCACQgCABgHABIgoAAQgDgBgCgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgBADAAIAVAAIAFgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgLgHgGQgGgHgKAAQgMAAgGALQgGALAAAPQAAAPAJANQAIALAMAAQAHAAAGgCQAGgCAEgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQgBADgCAEIgHAHQgJAHgIADQgJAEgKgBQgVABgPgPg");
	this.shape_7.setTransform(32,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgWBLIgNAAIgJAAIgIAAQgNAAgEgCQgEgBAAgFQAAgEAGgCQAFgCABgBQACgDAAgPIABgoIgBgmQgBgQgBgCQgBgCgFgCQgGgCAAgEQAAgFAEgBQAFgCAMAAIAJAAIALAAIAOAAIAMAAQAmAAAVAUQAVAUAAAkQAAAkgWATQgVASgpAAgAgWg6QgFABgBADIgCAQIgBAgIABAnIACAUQABADAHACQAHACAJAAQAXAAAMgOQAMgOAAgeQAAgegNgQQgOgQgZAAQgIAAgFACg");
	this.shape_8.setTransform(18.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgmBEQgNgIAAgLQAAgFADgEQADgEAGABQADAAADACQACADACAFQACAHAHAEQAGAEANABQANgBAKgFQAIgFABgIQgBgFgDgCQgDgEgHAAIgMABIgPACQgTAAgKgHQgKgGABgJQAAgFADgFQADgEAIgFQgGgEgDgHQgDgHAAgJQAAgQANgLQAMgMAUAAIAKABIAQADQAEAAAEgBIALgHIAEADIABAEQAAAEgDAEQgDAEgHAEIAEAIIABAJQAAARgNALQgMAJgUABIgLgBIgKgCIgDADIgCAEQAAAGAGABQAEADALAAIAPgBIAQgCQAPAAAHAHQAIAFAAAMQAAAQgQALQgQALgYAAQgVAAgNgIgAgQgzQgGAHAAAKQAAALAFAHQAGAGAIAAQAJAAAFgGQAGgHAAgKQAAgLgFgHQgHgGgIgBQgIABgFAGg");
	this.shape_9.setTransform(-1,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AAOA0QgFgCAAgEQAAgEAFgBIAEgDQACAAABgFIABgQQABghgFgIQgEgIgLAAQgFAAgFADQgFADgDAGQgCAFgBAHIgBAcIABAOQABAEACAAIAEADQAFABAAAEQAAAEgFACQgFABgOABQgQgBgFgBQgEgCgBgFQABgDAEgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgJQAAgRgBgFQgBgFgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAGgDIAQgFIAKgCQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAIACAGIAAAHIAAABIABAAIAAAAIABAAIACgCIACgDQAMgKALgBQAIABAHADQAHADAFAGQAFAFACAIQACAJAAAQIAAANIAAAHIAAAGIAAALQACADACABIADABQAFACAAADQAAAFgFACQgEABgRABQgPgBgEgBg");
	this.shape_10.setTransform(-13.3,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAGgEIAQgFIAKgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_11.setTransform(-22.7,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAPBLQgGgCAAgEQAAgEAGgBIADgDQADgBABgEIABgQQAAgigFgHQgEgIgKAAQgGAAgFADQgFADgCAFQgDAFgBAHIgBAdIABAOQABAEADAAIADADQAGABAAAEQAAAEgGACQgEABgOABQgQgBgFgBQgFgCAAgFQAAgDAFgCIADgBQACgBABgFIABgQIAAgRIAAgQIAAguQAAgLgCgCIgIgEQgFgCAAgDQAAgDACgCIALgGIALgDIAJgBQAEAAABACQACACAAAFIAAAEIgBAqIAAAFIAAADIACAAIADgCIADgEQAGgFAFgDQAFgDAHAAQARABAKALQAIAMAAAWIAAAKIABATIAAAFIABAIIACAEIADABQAGACAAADQAAAFgGACQgEABgRABQgOgBgEgBg");
	this.shape_12.setTransform(-32.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgFA/QgFgCgEgEQgEgDgBgGQgCgFAAgQIAAg3IgJAAIgDAAIgBgEIAAgCQAAgEALgIIAFgFIADgDQALgJAEAAIACAAIABADIAAATIAYAAIADACIABADIAAADIgBAEIgDABIgWAAIgBABIgBACIAAAzQAAAOACADQADAEAGgBIAIgBIAHgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAGgJAFQgJAGgLgBQgGAAgFgBg");
	this.shape_13.setTransform(-42,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AghAoQgPgQAAgXQAAgXAPgPQAQgQAWgBQAVAAALAMQAMAMAAATQAAAHgCACQgCABgIABIgmAAQgEgBgCgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgBAEAAIAUAAIAGgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgLgHgGQgHgHgJAAQgMAAgGALQgGALAAAPQAAAPAIANQAJALAMAAQAHAAAGgCQAFgCAFgDIAEgDQAGgEACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQABADgDAEIgHAHQgJAHgJADQgIAEgKgBQgVABgPgPg");
	this.shape_14.setTransform(-51.4,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AAuA0QgFgCAAgEQAAgEAGgCIADgCQADgBABgFIABgRQAAgfgEgIQgEgIgLAAQgMAAgGALQgFAKAAAZIAAAFQAAAMABADQABAEADABIADABQAFACAAADQAAAFgFACQgFABgQABQgNgBgFgBQgFgCAAgEQAAgEAFgBIAEgDQACAAABgFIABgQQAAghgEgIQgFgIgLAAQgFAAgFADQgFADgDAGQgCAFgBAIIgBAbIABAOQABAEACAAIAEADQAFABAAAEQAAAEgFACQgFABgOABQgQgBgFgBQgFgCAAgFQAAgDAFgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgGQAAgTgBgFQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAGgDIAPgGIALgCQAAAAABABQABAAAAAAQABAAAAABQAAAAABAAQABACAAAEIAAAGIAAABIABABIAAAAIABAAIAAAAIADgCIABgCQAMgMANAAQAFABAFABQAEACAEADQADACAEAFIAFAEQABAAADgCIAFgGQAGgFAGgCQAFgCAGgBQAMAAAJAGQAJAEAEAJQAFAKAAAeIAAAKIAAAFIAAAFIABAJQABADACABIADABQAFACAAADQAAAFgFACQgFABgQABQgPgBgFgBg");
	this.shape_15.setTransform(-66.8,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAQgQAWgBQAWABAOAPQAPAOAAAXQAAAXgQAQQgPAQgWAAQgWAAgPgPgAgTgeQgGAIgBAOQAAAUAJAOQAJAOAMAAQAKAAAGgJQAHgJAAgOQAAgTgJgOQgJgNgLAAQgKAAgHAIg");
	this.shape_16.setTransform(-82.3,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AgZBLQgLgCgIgFQgEgCgCgJQgDgJAAgMQAAgEACgDQABgCADAAQAGAAAEAJIADAEQAHAMAHAFQAJAFAKAAQALAAAIgGQAIgHgBgKQAAgPgegNIgCgCQgagKgIgJQgJgJAAgPQAAgTAOgMQAOgMAWAAIAMABIAOAEIAEgDIADgBIAGACIADAFIAGANQACAHAAAFQAAAEgCACQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgFAAgGgIIgCgCQgFgIgHgDQgHgEgJAAQgKAAgHAGQgHAFAAAJQAAAJAGAGQAFAFAWAKIAEACQASAHAJAHQAFAFADAHQAEAHAAAJQAAAVgPAMQgPAMgaAAQgNAAgLgDg");
	this.shape_17.setTransform(-94.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.somethingdeliciouslargemobile, new cjs.Rectangle(-102.5,-14.4,205.1,28.8), null);


(lib.signuplargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPApQgIgCgFgHIAJgIQADAFAFACQAGADAFAAIAFgBQADAAADgCIAEgFQABgCAAgEQAAgEgBgCIgFgFIgGgDIgHgCIgIgDQgEgBgDgDQgDgDgCgEQgCgDAAgHQAAgGADgFQACgEAFgDQAEgDAFgBIAJgBIAIAAIAGACQAHADAEAEIgJAIQgCgDgFgCQgEgCgFAAIgFAAIgFACIgEAFQgCACAAAEQAAADACADQABADACABIAGADIAGACIAIADQAFABADADQAEACACAEQADAFAAAGQAAAHgDAFQgCAEgEAEQgFADgFABIgKABQgIAAgHgDg");
	this.shape.setTransform(71.7,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIAMAAIAABJIAlAAIAAAKg");
	this.shape_1.setTransform(65.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_2.setTransform(60.3,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgIAUIgOAAIAlhTIAJAAIAlBTgAAQALIgQgnIgPAnIAfAAg");
	this.shape_3.setTransform(54.2,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgAqIAAhGIgdBGIgGAAIgchGIAABGIgMAAIAAhTIATAAIAYBAIAZhAIATAAIAABTg");
	this.shape_4.setTransform(44.4,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIA2AAIAAAKIgrAAIAAAaIAoAAIAAAJIgoAAIAAAcIAsAAIAAAKg");
	this.shape_5.setTransform(35.4,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAbAAQAFgBAFACQAGABAEADQAEACADAFQACAEAAAHQAAAKgGAFIgGAEIgJADIAYAmgAgSgEIAOAAIAHgBQAEgBACgBIAFgFQABgCAAgEQAAgEgBgCIgFgFIgGgCIgGAAIgPAAg");
	this.shape_6.setTransform(24.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAsIgIgDQgJgDgFgGQgHgGgCgIQgEgJAAgJQAAgJAEgJQACgIAHgFQAFgGAJgDIAIgDIAJAAQAJAAAJADIAHADIAHAGQAGAFAEAIQADAJAAAJQAAAJgDAJQgEAIgGAGIgHAGIgHADQgJADgJAAIgJAAgAgMgfQgHADgDAFQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAFAGACQAFADAHAAQAHAAAGgDQAGgCAFgFQADgFADgGQACgGAAgHQAAgGgCgGQgDgGgDgFQgFgFgFgDQgHgCgHAAQgHAAgFACg");
	this.shape_7.setTransform(15.6,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIA1AAIAAAKIgpAAIAAAbIAmAAIAAAJIgmAAIAAAlg");
	this.shape_8.setTransform(7.2,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIAaAAQAFgBAGACQAGACAEACQAEADACAEQACAFAAAGQAAAGgCAFQgDAEgEADQgEADgGABIgLABIgOAAIAAAlgAgQgEIAOAAIAGAAIAGgDQADgCACgDQABgCAAgEQAAgEgBgCQgCgDgDgCIgGgCIgGAAIgOAAg");
	this.shape_9.setTransform(-3.2,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGArIgIgCIgFgDIgFgFQgEgEgCgHQgCgFAAgHIAAg0IAMAAIAAA0IABAIQABAEADADQACAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEIADgHIABgIIAAg0IAMAAIAAA0QAAAHgCAFQgBAHgFAEIgFAFIgFADIgHACIgIAAIgGAAg");
	this.shape_10.setTransform(-11.5,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAqIgshEIAAAAIAABEIgMAAIAAhTIAPAAIArBCIABAAIAAhCIAMAAIAABTg");
	this.shape_11.setTransform(-23.7,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLApQgIgDgGgGQgGgGgDgIQgEgJAAgJQAAgJAEgJQADgIAGgFIAHgGIAHgDQAJgDAIAAIAKAAIAJADQAIACAFAGIgIAIQgEgEgGgDIgGgBIgHgBQgHAAgGACQgGADgEAFQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAFAGACQAGADAHAAIALgBIAJgDIAAgYIgTAAIAAgJIAfAAIAAAoQgHAEgIABIgRACQgJAAgJgDg");
	this.shape_12.setTransform(-33.4,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_13.setTransform(-39.7,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPApQgIgCgFgHIAJgIQADAFAFACQAGADAFAAIAFgBQADAAADgCIAEgFQABgCAAgEQAAgEgBgCIgFgFIgGgDIgHgCIgIgDQgEgBgDgDQgDgDgCgEQgCgDAAgHQAAgGADgFQACgEAFgDQAEgDAFgBIAJgBIAIAAIAGACQAHADAEAEIgJAIQgCgDgFgCQgEgCgFAAIgFAAIgFACIgEAFQgCACAAAEQAAADACADQABADACABIAGADIAGACIAIADQAFABADADQAEACACAEQADAFAAAGQAAAHgDAFQgCAEgEAEQgFADgFABIgKABQgIAAgHgDg");
	this.shape_14.setTransform(-45,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.signuplargemobile, new cjs.Rectangle(-50.5,-8.6,128,18.8), null);


(lib.redcandlegfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redcandle();
	this.instance.parent = this;
	this.instance.setTransform(-25.3,-16.6,0.951,0.951,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-26.6,50.6,53.3);


(lib.partyreadylargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgHA2IgLgCIgEACIgCABIgCgBIgDgBQgDgDgDgJQgDgIAAgIQAAgDACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAEAIIAFAGQADAEAFADQAFACAGAAQAHAAAEgDQAEgEAAgGQAAgIgRgJIgGgDQgQgIgGgGQgGgGABgKQAAgOAJgIQAJgJAQAAIAGAAIAHACIAGgCIACgBQAFAAAFAIQAGAJAAAJQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgHQgEgGgEgDQgFgCgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEADAMAHIABAAQAdAOAAARQAAAOgLAKQgLAKgRAAg");
	this.shape.setTransform(95.6,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AghAoQgPgQAAgXQAAgXAPgPQAPgQAYgBQATAAAMAMQAMAMAAATQAAAHgCACQgBABgJABIgmAAQgEgBgCgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQACgBAEAAIAUAAIAGgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgLgHgGQgHgHgJAAQgMAAgGALQgGALAAAPQAAAPAIANQAIALANAAQAHAAAGgCQAFgCAFgDIAEgDQAGgEACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAADgCAEIgHAHQgJAHgJADQgIAEgKgBQgVABgPgPg");
	this.shape_1.setTransform(85.5,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgyBHQgFgBAAgFQAAgDAEgCIAGgDQACgCAAgIQABgIAAgaIAAgQQAAgdgBgIQgBgIgCgBIgFgCQgGgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAGgDIAPgFIAKgCQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQABABAAAEIAAAFIAAACIABABIADgDIAFgDQAGgFAFgCQAGgDAGAAQATAAANAPQAMAOAAAWQAAAZgNAQQgOAQgWAAQgIAAgDgDQgEgCAAgFQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIACAAIAEABQALAAAIgKQAGgJAAgQQABgSgIgKQgHgLgNAAQgJAAgGAGQgHAGAAAPIAABCIABAKQAAAEABACIAHADIADABIADACIABADQgBAEgFABQgHACgOAAQgQAAgFgCg");
	this.shape_2.setTransform(73.3,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_3.setTransform(64.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AggAoQgPgQAAgXQAAgWAQgQQAQgQAWgBQARAAAMAJQAMAKAAALQAAAGgDACQgEAEgFAAQgFAAgEgDQgDgDgDgIQgDgIgEgDQgFgCgGAAQgLAAgHAJQgGAIAAAQQgBASAKAMQAKALAOAAIAJgBQAGgBADgDIAFgDQAFgEADAAIADABIABADIgCAHIgFAHQgJAGgIAEQgJAEgLgBQgUABgPgPg");
	this.shape_4.setTransform(55.9,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AghAoQgPgQAAgXQAAgXAPgPQAQgQAWgBQAVAAAMAMQALAMAAATQAAAHgCACQgCABgHABIgoAAQgDgBgCgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgBADAAIAVAAIAFgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgLgHgGQgHgHgJAAQgMAAgGALQgGALAAAPQAAAPAIANQAJALAMAAQAIAAAFgCQAGgCAEgDIAEgDQAGgEACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQABADgDAEIgHAHQgJAHgJADQgIAEgKgBQgVABgPgPg");
	this.shape_5.setTransform(44.8,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AAWA0QgJgigIgGQgGgGgLAAQgIAAAAgHQAAgGAHAAQAQAAAJgHQAIgGAAgPQAAgOgJgGQgIgIgPAAIgMABQgDABgBAEIgBAJIAAAUIAAAuIAAAgQABAGACACIAFACQAGADAAAEQAAAEgGACQgFACgRAAQgQAAgGgCQgGgCAAgEQAAgEAHgDIAEgCQACgCABgMIABgsIgBgoQAAgPgCgCQgBgCgFgCQgGgCAAgEQAAgEADgCQADgBAHAAIAXAAIAVgBIAQAAQAWAAAMAKQAMAJAAATQAAANgIAKQgIAKgOAEIAAABQALACAHAHQAGAHAFARIADAKQAEARAGAAIADgBIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAFgGADQgGAEgKAAQgVAAgHgZg");
	this.shape_6.setTransform(31.9,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AgwBFQgEgFAAgGQAAgFADgEQAEgEAFAAIAFABIADADIACADQAEAEABABQAFgBAGgHQAFgIABgIQAAgJgHgRIgCgCIgRgkIgJgUQgCgEgGgDIgFgCIgBgEQAAgFAGgBQAFgCAPAAQAPAAAGACQAEABAAAEIAAAEIgCACIgEABQgEACAAABIACAIIAIAWIAIATQADAFACAAQABAAACgFIAHgQIAIgVIACgKQAAgDgGgDQgGgEABgDQgBgDAFgBQAFgCAMAAQAMAAAFACQAEABAAAEQAAAEgGACIgFABQgFADgHASIgDAIIgNAhQgRArgKANQgMANgPAAQgHAAgGgEg");
	this.shape_7.setTransform(12.9,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgtA/QgMgOAAgXQAAgZAOgPQAOgQAWAAIAHABQADABACACQACACAAADQAAAGgHAAIgCgBIgDAAQgMAAgGAKQgIAIABARQAAARAHALQAIALAMAAQAKAAAGgGQAFgGAAgMIAAgcIAAgvQAAgIgBgCQgBgDgEgCIgDAAQgHgCABgEQAAgDACgCIAKgFIAMgDIAKgBQADAAACACQACACgBAEIAAAGIgBA/IABAsQABAKABABIAHADQAGABAAADQAAAFgPAFIgKADIgJABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgCgBAAgEIAAgFIAAgCIgBgBIgDACIgFAEQgFAFgGACQgFACgHAAQgTAAgNgOg");
	this.shape_8.setTransform(1.6,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AATAxIgGgFIgEACQgMAIgNAAQgQAAgJgIQgKgJAAgOQAAgRAMgIQAMgKAWAAQAFAAACACQADABAAAEQAAAFgHAAQgJAAgHAGQgGAFAAAIQAAAIAGAGQAFAEAJAAQAJABAFgFQAEgEAAgMIAAgmQAAgJgEgFQgEgFgGAAQgGAAgEACQgEADgEAEIgDADQgGAHgHABQgEgBgDgCQgCgCAAgFQAAgKAMgGQAMgIATAAQALABAIADQAIADAFAFQADAFACAGIABAWIAAAgIAAAJQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAHACgBAEQAAAEgGAFQgHADgJAAQgFABgFgGg");
	this.shape_9.setTransform(-10.6,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AghAoQgPgQAAgXQAAgXAPgPQAPgQAYgBQATAAAMAMQAMAMAAATQAAAHgCACQgBABgJABIgmAAQgEgBgCgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQACgBAEAAIAUAAIAGgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgLgHgGQgGgHgKAAQgMAAgGALQgGALAAAPQAAAPAJANQAHALANAAQAHAAAGgCQAFgCAGgDIADgDQAGgEACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAADgCAEIgHAHQgJAHgJADQgIAEgKgBQgVABgPgPg");
	this.shape_10.setTransform(-22,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AAWA0QgJgigIgGQgGgGgLAAQgIAAAAgHQAAgGAHAAQAQAAAJgHQAIgGAAgPQAAgOgJgGQgIgIgPAAIgMABQgDABgBAEIgBAJIAAAUIAAAuIAAAgQABAGACACIAFACQAGADAAAEQAAAEgGACQgFACgRAAQgQAAgGgCQgGgCAAgEQAAgEAHgDIAEgCQACgCABgMIABgsIgBgoQAAgPgCgCQgBgCgFgCQgGgCAAgEQAAgEADgCQADgBAHAAIAXAAIAVgBIAQAAQAWAAAMAKQAMAJAAATQAAANgIAKQgIAKgOAEIAAABQALACAHAHQAGAHAFARIADAKQAEARAGAAIADgBIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAFgGADQgGAEgKAAQgVAAgHgZg");
	this.shape_11.setTransform(-34.9,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgUALQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgFIADgFIACgEIAGgBIAFAAIAJAAIASgBIACAAIAFABQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAFgEAFQgDAFgFAAIgFAAIgFAAIgXABIgCAAg");
	this.shape_12.setTransform(-46.3,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgvBFQgGgFAAgGQAAgFAFgEQADgEAFAAIAEABIAEADIADADQACAEACABQAGgBAFgHQAFgIAAgIQABgJgIgRIgBgCIgRgkIgJgUQgCgEgGgDIgFgCIgBgEQAAgFAFgBQAGgCAPAAQAQAAAFACQAEABAAAEIAAAEIgCACIgEABQgEACAAABIADAIIAHAWIAIATQADAFACAAQABAAACgFIAHgQIAIgVIACgKQAAgDgGgDQgFgEAAgDQAAgDAEgBQAFgCALAAQANAAAEACQAFABAAAEQAAAEgGACIgFABQgFADgHASIgDAIIgNAhQgSArgKANQgLANgPAAQgIAAgEgEg");
	this.shape_13.setTransform(-55.2,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgFA/QgFgCgEgEQgEgDgBgGQgBgFAAgQIAAg3IgKAAIgDAAIgBgEIAAgCQAAgEALgIIAFgFIADgDQALgJAEAAIACAAIABADIAAATIAYAAIADACIACADIAAADIgCAEIgDABIgVAAIgCABIgBACIAAAzQABAOACADQACAEAGgBIAJgBIAGgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAGgJAFQgJAGgLgBQgGAAgFgBg");
	this.shape_14.setTransform(-64.3,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgfA0QgFgCAAgFQAAgDAFgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgGQAAgTgBgFQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAGgDIAOgFIAKgCQAFABABAOIAAABIABABQAFgJAGgEQAGgEAGgBQAHABAEAEQAEAEAAAIQAAAHgDAEQgDAFgGAAIgFgBIgFgEIgCgEQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgIAAgDALQgCAJAAAfIABAOQABAFADAAIAEACQAGACAAAEQAAAEgFACQgGABgOABQgQgBgFgBg");
	this.shape_15.setTransform(-72,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AASAxIgFgFIgFACQgMAIgNAAQgOAAgKgIQgKgJAAgOQAAgRANgIQAMgKAVAAQAFAAACACQAEABAAAEQgBAFgGAAQgKAAgHAGQgGAFAAAIQAAAIAGAGQAFAEAJAAQAKABADgFQAFgEAAgMIAAgmQAAgJgEgFQgEgFgGAAQgFAAgFACQgFADgDAEIgCADQgHAHgHABQgEgBgDgCQgCgCAAgFQAAgKAMgGQAMgIATAAQALABAIADQAIADAFAFQADAFABAGIABAWIAAAgIABAJQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAGACABAEQAAAEgIAFQgHADgJAAQgFABgFgGg");
	this.shape_16.setTransform(-81.8,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("Ag2BKQgFgCAAgEQAAgFAGgCIAFgCQACgCABgNIABgsIgBgnQAAgPgCgCQgBgCgGgCQgFgCAAgEQAAgEADgCQADgCAGAAIALAAIANAAIAUAAIARgBQAXAAAMAKQALAKAAAUQAAAWgPALQgOALgbAAQgKAAAAgHQAAgHAJAAQAMAAAIgHQAJgGAAgQQAAgOgJgHQgIgHgQAAIgLABQgDACgBADIgBAJIgBAWIAAAtIABAdQABAIACACIAEACQAHACAAAFQAAAEgGACQgGACgQAAQgQAAgHgCg");
	this.shape_17.setTransform(-93.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadylargemobile, new cjs.Rectangle(-102.4,-14.4,204.9,28.8), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logokale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgVgDgGgEQgKgFAAgNQAAgKAFgHQAHgHAIAAIARAAQAKAAAFgLQACgKABgXIAAl5QgBgXgCgKQgFgLgKAAIgRAAQgIAAgHgHQgFgHAAgKQAAgNAKgFQAGgEAVgDQBdgNBrAAQBOAAA2ASQA0ASAnAoQAlAlAUA5QAUA4AABEQAABNgZA9QgaA+guAlQglAegxAOQgwAOhFAAQhrAAhdgNgAgwjrQgcAFgJALQgKAMAAAhIAAFjQAAAhAUALQAOAHAnADQBMAEAthAQAqg/AAhwQAAhwgqg/Qgrg/hKAAIgeADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIgfgyQgGgJgKAAIgtAAQgDAAgEADQgEAEABADIAAAyQAAAGgKACIgPAAQgMAAAAgMIAAi5QgBgIAKAAIBqAAQAgAAAUATQAVATAAAfQAAAYgPAPQgIAJgPAKQgHAGADAGIAjAyQAFAIgFADQgEAFgPAAQgQAAgHgJgAg4g4IAAAuQAAAFAEADQAEACAFAAIA+AAQAQAAALgIQALgIAAgRQAAgQgLgJQgLgJgQABIg+AAQgNAAAAAKg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBkQgFgDAAgEIgOhsQgCgGgFAAQgDAAgDADIgxA+QgEAGgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBoQgCALgTAAQgGAAgFgDQgGgDAAgFIAViwQACgJADgEQAEgEALAAQAKAAAFAJIA4BPQAFAHAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAIIAVC1QABALgXAAQgFAAgFgDg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDwQhFg1gYheIgBgCQgCgMgHAAQgGAAgCALIgBACQgYBfhGA1QhIA3hoAAQh+AAhMhQQhMhQAAiFQAAiHBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQACALAGAAQAHgBACgKIABgBQAXhgBGg1QBHg3BoAAQB/AABNBQQBMBPAACFQAACHhMBRQhNBRiBAAQhmAAhHg3gACniqQgpA/AABuQAABrApA/QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/gAmFiqQgoA/AABuQAABsAoA+QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIIAJgFQAEgCAFAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAHQgNAJgQAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgLQAAgVAdgBICvAAQAcAAAAAYQAAAKgHAFQgHAFgRABQgOACgGAFQgGAFAAAJQAAAJADAKIBzFHQACAGAFgBQAEAAACgGIA/i2QAIgYgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgDgGgGQgFgEAAgKQAAgaAdAAICnAAQAdAAAAAYQAAASgcAEQgRACgFAFQgGAFAAAMQAAAKAIAZIBfEsQACAFAEAAQAFAAABgGIBdk6QAEgLAAgJQAAgSgdgEQgbgCAAgVQAAgNAHgGQAIgFARgBIElAAQAVABAIAFQAIAFAAAOQAAAKgGAIQgGAGgJAAIgQAAQgLAAgFALQgCAIAAAZIAABtQAAAeAFAGQAGAHAXAAIB0AAQAXAAAHgIQADgDAAgHIABgdIAAhpQAAgbgDgGQgFgLgKAAIgQAAQgKAAgHgGQgGgIAAgKQAAgOAIgFQAJgFAWgBICaAAQAWABAJAFQAJAFAAAOQAAAKgHAIQgGAGgJAAIgSAAQgEAAgEADQgFADgBAFQgDAJAAAYIAAF9QAAAXADAKQABAFAFACQAEADAEABIASAAQAJAAAGAGQAHAIAAAJQAAAOgJAFQgIAGgXAAIiaAAQgWAAgIgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIAQAAQAKAAAFgLQADgGAAgbIAAh8IgBgeQAAgHgDgEQgHgHgXAAIh0AAQgXAAgGAGQgFAHAAAdIAACCQAAAYACAJQAFALALAAIAQAAQAJAAAGAGQAGAIAAAKQAAAOgIAEQgIAGgVAAIiaAAQgWAAgJgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIARAAQAEgBAFgDQAEgCABgFQADgGAAgbIAAl9QAAgwgkAEQgLABgHAKQgIAIgGAWIiHGzQgJAfgKALQgLALgTAAQgTAAgLgJg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgHQAGgGAJAAIARAAQAEAAAEgDQAEgEACgEQADgIAAgXIAAl/QAAgZgDgJQgDgLgLABIgRAAQgKgBgGgGQgHgHAAgLQAAgNAJgGQAJgFAWAAICcAAQAWAAAJAFQAJAGAAANQAAALgGAHQgHAGgJABIgSAAQgOgBgDALQgDAGAAAcIAAFjQAAAdACAJQACAJAIAFQAGAEALACQALACAagBIAwAAQAvAAAPgfIAIgPQAIgQAPgBQAMAAAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgDALgHAFQgHAFgOAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.holidayinspirationlargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AAOA0QgFgCAAgEQAAgEAFgBIAEgDQADAAABgFIABgQQgBghgEgIQgEgIgLAAQgFAAgFADQgFADgCAGQgDAFgBAHIgBAcIABAOQABAEACAAIAEADQAGABAAAEQAAAEgGACQgFABgOABQgPgBgFgBQgGgCAAgFQAAgDAGgCIACgBQADgBABgEIABgLIAAgHIAAgJIAAgJQAAgRgBgFQgBgFgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAHgDIAOgFIALgCQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAIABAGIAAAHIABABIAAAAIABAAIAAAAIADgCIACgDQAMgKAMgBQAHABAHADQAHADAFAGQAEAFACAIQACAJABAQIAAANIAAAHIAAAGIABALQAAADADABIADABQAFACAAADQAAAFgFACQgEABgRABQgOgBgFgBg");
	this.shape.setTransform(86.3,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAPgQAXgBQAXABAOAPQAOAOAAAXQAAAXgQAQQgPAQgWAAQgWAAgPgPgAgTgeQgHAIAAAOQABAUAIAOQAJAOAMAAQAKAAAHgJQAGgJAAgOQAAgTgJgOQgJgNgLAAQgLAAgGAIg");
	this.shape_1.setTransform(74.1,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_2.setTransform(65,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgEA/QgGgCgDgEQgFgDgBgGQgCgFABgQIAAg3IgKAAIgDAAIgBgEIAAgCQAAgEALgIIAEgFIAFgDQAKgJAEAAIADAAIABADIAAATIAXAAIAEACIABADIAAADIgBAEIgEABIgVAAIgCABIAAACIAAAzQAAAOACADQACAEAGgBIAJgBIAHgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAGgJAFQgJAGgLgBQgGAAgEgBg");
	this.shape_3.setTransform(58.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AATAxIgGgFIgEACQgMAIgNAAQgQAAgJgIQgKgJAAgOQABgRALgIQANgKAVAAQAFAAACACQADABAAAEQAAAFgGAAQgKAAgHAGQgGAFAAAIQAAAIAGAGQAFAEAJAAQAKABAEgFQAEgEAAgMIAAgmQAAgJgEgFQgEgFgGAAQgGAAgEACQgEADgEAEIgDADQgGAHgHABQgEgBgDgCQgCgCAAgFQAAgKAMgGQAMgIATAAQALABAIADQAJADAEAFQADAFACAGIAAAWIAAAgIABAJQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAHACAAAEQgBAEgGAFQgIADgIAAQgFABgFgGg");
	this.shape_4.setTransform(48.9,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgfA0QgFgCAAgFQAAgDAFgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgGQAAgTgBgFQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAGgDIAOgFIAKgCQAFABABAOIAAABIABABQAFgJAGgEQAGgEAGgBQAHABAEAEQAEAEAAAIQAAAHgDAEQgDAFgGAAIgFgBIgFgEIgCgEQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgIAAgDALQgCAJAAAfIABAOQABAFADAAIAEACQAGACAAAEQAAAEgFACQgGABgOABQgQgBgFgBg");
	this.shape_5.setTransform(39.3,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_6.setTransform(31.9,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AgxBHQgGgBAAgFQAAgDAFgCIAFgDQACgCAAgIQACgIAAgaIAAgQQAAgdgCgIQgBgIgCgBIgEgCQgHgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAIAGgDIAPgFIALgCQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACABAAAEIAAAFIAAACIAAABIAFgDIADgDQAHgFAFgCQAGgDAGAAQAUAAAMAPQAMAOAAAWQAAAZgOAQQgOAQgVAAQgJAAgCgDQgEgCAAgFQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIADAAIADABQALAAAHgKQAIgJAAgQQAAgSgIgKQgHgLgMAAQgLAAgFAGQgHAGAAAPIAABCIAAAKQABAEABACIAGADIAFABIACACIABADQAAAEgHABQgFACgPAAQgPAAgFgCg");
	this.shape_7.setTransform(22.3,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgHA2IgLgCIgEACIgCABIgDgBIgCgBQgDgDgDgJQgDgIAAgIQAAgDABgCQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAFAIIADAGQAEAEAFADQAGACAFAAQAHAAAEgDQAEgEAAgGQAAgIgRgJIgGgDQgQgIgGgGQgGgGABgKQgBgOAKgIQAKgJAOAAIAHAAIAIACIAFgCIADgBQAFAAAEAIQAFAJABAJQgBADgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgFgHQgEgGgEgDQgEgCgGAAQgGAAgDADQgDAEgBAFQABAFADAEQAEADAMAHIABAAQAdAOAAARQAAAOgLAKQgLAKgRAAg");
	this.shape_8.setTransform(11.7,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AAOA0QgFgCAAgEQAAgEAFgBIAEgDQADAAAAgFIABgQQABghgFgIQgEgIgLAAQgFAAgFADQgFADgDAGQgCAFgBAHIgBAcIABAOQABAEACAAIAEADQAGABgBAEQABAEgGACQgFABgNABQgRgBgFgBQgEgCAAgFQAAgDAEgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgJQAAgRgBgFQgBgFgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIAGgDIAPgFIALgCQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAIABAGIAAAHIAAABIABAAIAAAAIAAAAIADgCIACgDQALgKAMgBQAIABAHADQAHADAFAGQAFAFACAIQABAJAAAQIAAANIAAAHIAAAGIABALQABADADABIADABQAFACAAADQAAAFgFACQgEABgQABQgQgBgEgBg");
	this.shape_9.setTransform(0.9,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AgVBJQgGgBAAgFQAAgEAHgDIAEgCQACgCABgMIABgsIgBgoQgBgPgBgCQgBgBgFgCQgGgDAAgEQAAgEAFgCQAEgBASAAQATAAAEABQAFACAAAEQAAAEgGADIgGACQgCACAAAKIgBAiIABAxQABASABACQAAACAHACQAFACAAAEQAAAFgGABQgGACgQAAQgQAAgFgCg");
	this.shape_10.setTransform(-8.8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgvBFQgGgFAAgGQAAgFAEgEQAEgEAFAAIAFABIADADIADADQADAEABABQAFgBAGgHQAFgIABgIQAAgJgIgRIgBgCIgRgkIgJgUQgCgEgGgDIgFgCIgBgEQAAgFAFgBQAGgCAPAAQAPAAAGACQAEABAAAEIAAAEIgCACIgEABQgEACAAABIACAIIAIAWIAIATQADAFACAAQAAAAADgFIAHgQIAIgVIACgKQAAgDgGgDQgGgEABgDQgBgDAFgBQAFgCALAAQANAAAFACQAEABAAAEQAAAEgGACIgFABQgFADgHASIgDAIIgNAhQgSArgJANQgLANgQAAQgHAAgFgEg");
	this.shape_11.setTransform(-23.4,4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AASAxIgFgFIgFACQgMAIgNAAQgOAAgKgIQgKgJABgOQAAgRAMgIQAMgKAWAAQAEAAADACQADABAAAEQAAAFgIAAQgKAAgGAGQgGAFAAAIQAAAIAFAGQAGAEAJAAQAKABADgFQAFgEAAgMIAAgmQAAgJgEgFQgEgFgHAAQgEAAgFACQgFADgEAEIgBADQgHAHgHABQgEgBgCgCQgDgCAAgFQAAgKAMgGQAMgIATAAQALABAIADQAJADAEAFQADAFABAGIABAWIAAAgIACAJQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAGACAAAEQABAEgIAFQgGADgKAAQgEABgGgGg");
	this.shape_12.setTransform(-34.4,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgtA/QgMgOAAgXQAAgZAOgPQAOgQAWAAIAHABQADABACACQACACAAADQAAAGgHAAIgCgBIgDAAQgMAAgGAKQgIAIABARQAAARAHALQAIALAMAAQAJAAAHgGQAFgGAAgMIAAgcIAAgvQAAgIgBgCQgBgDgEgCIgDAAQgHgCABgEQAAgDACgCIAKgFIAMgDIAKgBQADAAACACQACACgBAEIAAAGIgBA/IABAsQABAKABABIAHADQAGABAAADQAAAFgPAFIgKADIgJABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgCgBAAgEIAAgFIAAgCIgBgBIgDACIgFAEQgFAFgGACQgFACgHAAQgTAAgNgOg");
	this.shape_13.setTransform(-46.1,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_14.setTransform(-55.8,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgRBLQgFgCAAgFQAAgCAEgCIAGgEQABgBABgHIABgUIAAgRIAAgTIAAgIQAAgagBgHQgBgIgCgBIgHgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAJgEIAOgEIAKgCQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQACACAAAFIgBAIIgBBKIABAjQABAJABABIAGAEQAFABAAAEQAAAEgFACQgFABgOABQgPgBgFgBg");
	this.shape_15.setTransform(-62,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAPgQAXgBQAWABAOAPQAPAOAAAXQAAAXgQAQQgPAQgWAAQgWAAgPgPgAgTgeQgGAIAAAOQgBAUAKAOQAIAOAMAAQAKAAAGgJQAHgJAAgOQAAgTgJgOQgJgNgMAAQgJAAgHAIg");
	this.shape_16.setTransform(-70.8,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AAXBJQgGgBAAgFQAAgEAHgDIAFgCQABgBABgHIABgYIAAgPIgBgEQgBgCgFgBQgGgBgTAAIgVABQgGABgCABIgBADIgBAIIAAAJIABAYQABAHABABIAFACQAHADAAAEQAAAFgGABQgGACgRAAQgQAAgGgCQgFgBAAgFQAAgEAGgDIAFgCQACgCABgNIABgrIgBgnQgBgQgBgCQgBgBgGgCQgFgDAAgEQAAgEAEgCQAFgBATAAQASAAAFABQAFACAAAEQAAAEgHADIgFACQgBABgBAHIgBAfQAAAEAEABQAEACAPAAIAIAAIAWgBQAGgBACgBIABgCIABgEIAAgFIgBgZQgBgGgBgBIgFgCQgHgDAAgEQAAgEAFgCQAFgBASAAQATAAAFABQAEACAAAEQAAAEgGADIgFACQgCACgBAOIgBAqIABAnQABAQABACQABACAGACQAFACAAAEQAAAFgFABQgGACgRAAQgQAAgGgCg");
	this.shape_17.setTransform(-84.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidayinspirationlargemobile, new cjs.Rectangle(-94.8,-14.4,189.6,28.8), null);


(lib.fillyourinboxlargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AAPBLQgGgCAAgEQAAgEAGgBIADgDQADgBABgEIABgQQAAgigFgHQgEgIgKAAQgFAAgGADQgFADgCAFQgDAFgBAHIgBAdIABAOQABAEADAAIAEADQAFABAAAEQAAAEgFACQgFABgOABQgQgBgFgBQgFgCAAgFQAAgDAFgCIADgBQACgBABgFIABgQIAAgRIAAgQIAAguQAAgLgCgCIgIgEQgFgCAAgDQAAgDACgCIALgGIALgDIAJgBQAEAAACACQABACAAAFIAAAEIgBAqIAAAFIAAADIACAAIADgCIADgEQAGgFAFgDQAFgDAHAAQARABAKALQAIAMAAAWIAAAKIABATIAAAFIABAIIACAEIADABQAGACAAADQAAAFgGACQgEABgRABQgOgBgEgBg");
	this.shape.setTransform(89.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgFA/QgFgCgEgEQgEgDgBgGQgCgFAAgQIAAg3IgJAAIgDAAIgBgEIAAgCQAAgEALgIIAFgFIADgDQALgJAEAAIACAAIABADIAAATIAYAAIADACIABADIAAADIgBAEIgDABIgWAAIgBABIgBACIAAAzQAAAOACADQADAEAGgBIAIgBIAHgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAGgJAFQgJAGgLgBQgGAAgFgBg");
	this.shape_1.setTransform(80,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_2.setTransform(73,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AAGALIgMggQgGgOgFgDIgDgBQgGgDAAgDQAAgFAFgBQAGgCAQAAQAOAAAFACQAFABAAAFIgBADIgCACIgDABQgFACAAACIACAHIAJAWIAJATQACAFACAAIADgDIAFgJIALgaQAEgKAAgDIgBgEIgDgCIgDgBQgEgCAAgEQAAgEAEgBQAFgCANAAQALAAAEACQAFABAAAEQAAAFgGABIgDACQgFACgKAWIgCAFIgEAJQgYA2gHAAQgHAAgSgrgAg9AGIgDgGIgGgSQgHgSgFgCIgDgBQgGgDAAgDQAAgFAFgBQAGgCAQAAQAPAAAFACQAFABAAAFIgBADIgCACIgDABQgFACAAACIADAJIAIAUIAIATQADAFABAAQAEAAACgGIAEgIIACgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgCAGQgLAYgFAIQgFAIgEAAQgHAAgVgwg");
	this.shape_3.setTransform(61.5,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAKAzQgGgDABgEQgBgCAEgCIADgEQAAgBgEgIIgSgbIgRgZIgKgLIgGgCQgFgBAAgEQAAgFAFgBQAGgCANAAQAPAAAFACQAFABAAAEQAAADgCADQgBAAgBAAQgBABAAAAQgBABAAAAQAAAAAAAAQAAAEAMAQIAAABIAEgFQAJgOAAgCIgDgCQgEgDgBgDQAAgDAGgCQAFgCALAAQAJAAAEACQAEABABAEQAAAEgIADIgFACQgEACgHAIQgGAHgIAOIATAcIAKALIAHADQAFADAAADQAAAFgFACQgFABgOAAQgOAAgGgBgAgwAzQgFgDAAgEQAAgEAIgCIAGgCQADgCAFgGIAJgNIADgDIADgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAACgCAEIgIAMQAAABAAAAQAAABABAAQAAABABAAQABABAAAAQAEACABADQgBAEgFACQgEACgMAAQgJAAgEgBg");
	this.shape_4.setTransform(41.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAQgQAWgBQAXABAOAPQAOAOAAAXQAAAXgPAQQgQAQgWAAQgWAAgPgPgAgTgeQgGAIAAAOQgBAUAKAOQAIAOAMAAQAKAAAGgJQAHgJAAgOQAAgTgJgOQgJgNgMAAQgJAAgHAIg");
	this.shape_5.setTransform(30.4,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgOBLQgJgDgFgEIgHAEIgGACIgDgBIgEgBIAAgCQAEgEABgJQACgKAAgXIAAgXIAAgXIgBgaQgBgGgCgBIgGgCQgGgCAAgDQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQACgCAIgDIAMgEIAKgBQAEAAACABIABAFIAAAGIgBAfIAAAtIAAAbQAAAPAFAGQAFAFALAAQANAAAHgLQAHgLAAgUQAAgRgHgIQgHgKgMAAIgDAAIgCAAQgIAAAAgHQAAgFAIgDQAGgDAJAAQAUAAALANQAMAOAAAWQAAAagOAQQgPAQgZAAQgJAAgJgCg");
	this.shape_6.setTransform(17.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AAOA0QgFgCAAgEQAAgEAFgBIAEgDQADAAABgFIABgQQgBghgEgIQgEgIgLAAQgFAAgFADQgFADgCAGQgDAFgBAHIgBAcIABAOQABAEACAAIAEADQAGABAAAEQAAAEgGACQgFABgNABQgQgBgFgBQgGgCAAgFQAAgDAGgCIACgBQADgBABgEIABgLIAAgHIAAgJIAAgJQAAgRgBgFQgBgFgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAHgDIAOgFIALgCQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAIABAGIAAAHIABABIAAAAIABAAIAAAAIADgCIACgDQAMgKAMgBQAHABAHADQAHADAFAGQAEAFACAIQACAJABAQIAAANIAAAHIAAAGIABALQAAADADABIADABQAFACAAADQAAAFgFACQgEABgRABQgOgBgFgBg");
	this.shape_7.setTransform(5.8,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgWBJQgFgBAAgFQAAgEAGgDIAFgCQACgCABgMIABgsIgBgoQgBgPgBgCQgBgBgGgCQgFgDAAgEQAAgEAEgCQAFgBASAAQASAAAFABQAFACAAAEQAAAEgHADIgFACQgBACgBAKIgBAiIAAAxQABASABACQACACAFACQAGACAAAEQAAAFgGABQgGACgQAAQgQAAgGgCg");
	this.shape_8.setTransform(-3.9,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgfA0QgFgCAAgFQAAgDAFgCIADgBQADgBABgEIABgLIAAgHIAAgJIAAgGQAAgTgBgFQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAGgDIAOgFIAKgCQAFABABAOIAAABIABABQAFgJAGgEQAGgEAGgBQAHABAEAEQAEAEAAAIQAAAHgDAEQgDAFgGAAIgFgBIgFgEIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgIAAgDALQgCAJAAAfIABAOQABAFADAAIAEACQAGACAAAEQAAAEgFACQgGABgOABQgQgBgFgBg");
	this.shape_9.setTransform(-17.2,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AAXA1QgCgCABgDIAAgHIAAgBIgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBABIgCABQgEAFgHADQgFACgIAAQgIAAgGgCQgHgDgFgGQgEgGgCgJQgDgIAAgVIABgIIAAgHIAAgCQAAgIgCgDQgBgDgEgBIgEgBQgGgBAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCAHgCIAPgEIALgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAGIAAAFIgBAnQAAAUAFAIQAEAIAKAAQALAAAFgKQAGgLAAgYIAAgJQAAgHgBgDQgBgDgEgBIgEgBQgGgBAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCAHgCIAOgEIALgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQABACAAAFIAAAHIgBAqIAAARIAAAHQABAEAFACIADABQAFACAAAEIgCADIgGAEIgPAFIgLABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_10.setTransform(-27.9,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AglAnQgPgPAAgYQAAgWAQgPQAPgQAXgBQAXABAOAPQAOAOAAAXQAAAXgPAQQgQAQgWAAQgWAAgPgPgAgTgeQgHAIABAOQAAAUAJAOQAIAOAMAAQAKAAAHgJQAGgJAAgOQAAgTgJgOQgJgNgMAAQgKAAgGAIg");
	this.shape_11.setTransform(-40,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgVBJQgGgBAAgFQAAgEAGgDIAFgCQADgDABgqIAAgKIgNgTIgTgfQgGgJgEgCIgFgCQgHgDAAgEQAAgEAFgCQAFgBAUAAQAUAAAFABQAFACAAAEQAAAEgIADIAAABIgEACIgBADQAAACAFAIIAUAgIASgbQAGgKAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgGgEQgEgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEgCQAFgBARAAQARAAAEABQAFACAAAEQAAAEgGADIgIAEQgFADgKAPQgKAPgPAaIAAASQABAjADACIAEACQAHADAAAEQAAAFgGABQgGACgQAAQgPAAgGgCg");
	this.shape_12.setTransform(-52.8,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgRBLQgFgCAAgFQAAgCAEgCIAGgEQABgBABgHIABgUIAAgRIAAgTIAAgIQAAgagBgHQgBgIgCgBIgHgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAJgEIAOgEIAKgCQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQACACAAAFIgBAIIgBBKIABAjQABAJABABIAGAEQAFABAAAEQAAAEgFACQgFABgOABQgPgBgFgBg");
	this.shape_13.setTransform(-68.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgRBLQgFgCAAgFQAAgCAEgCIAGgEQABgBABgHIABgUIAAgRIAAgTIAAgIQAAgagBgHQgBgIgCgBIgHgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAJgEIAOgEIAKgCQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQACACAAAFIgBAIIgBBKIABAjQABAJABABIAGAEQAFABAAAEQAAAEgFACQgFABgOABQgPgBgFgBg");
	this.shape_14.setTransform(-74.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_15.setTransform(-80.6,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("Ag0BKQgGgBAAgFQAAgEAGgCQAFgCABgCQACgCAAgQIABgoIgBgmQgBgQgBgCQgBgBgFgCQgGgDAAgEQAAgEAFgCQAFgBASAAIA/AAIAKgBIAFgBIADAAIACACIAEALQACAHAAAFQAAAFgCACQgCADgDAAQgDAAgFgHIgDgFQgCgDgFgCQgEgCgHAAIgPAAIgOABQgFABgCADQgCACgBAHIAAAUIAAAIQAAAFABABQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIARAAQAIAAADgDQADgCABgHIABgCQABgKAGAAQAEAAACAFQACAGAAAUQAAATgCAFQgCAGgEAAQgGAAgBgLIgBgCQAAgGgEgDQgDgCgIAAIgQAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBACAAAGIAAAIIAAAeQABAGACABIAFACQAGADAAAEQAAAFgGABQgGACgQAAQgRAAgFgCg");
	this.shape_16.setTransform(-89.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fillyourinboxlargemobile, new cjs.Rectangle(-98.4,-14.4,196.9,28.8), null);


(lib.diylargemobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgHA2IgLgCIgEACIgCABIgDgBIgCgBQgDgDgDgJQgDgIAAgIQAAgDABgCQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAFAIIADAGQAEAEAFADQAGACAFAAQAHAAAEgDQAEgEAAgGQAAgIgRgJIgGgDQgQgIgGgGQgGgGABgKQgBgOAKgIQAKgJAOAAIAHAAIAIACIAFgCIADgBQAFAAAEAIQAFAJABAJQgBADgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgFgHQgEgGgEgDQgEgCgGAAQgGAAgDADQgDAEgBAFQABAFADAEQAEADAMAHIABAAQAdAOAAARQAAAOgLAKQgLAKgRAAg");
	this.shape.setTransform(37.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgxBHQgGgBAAgFQAAgDAEgCIAGgDQACgCAAgIQABgIAAgaIAAgQQAAgdgBgIQAAgIgDgBIgFgCQgGgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAGgDIAPgFIAKgCQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQABABAAAEIAAAFIAAACIAAABIAFgDIADgDQAHgFAFgCQAGgDAGAAQAUAAAMAPQAMAOAAAWQAAAZgOAQQgOAQgVAAQgJAAgCgDQgEgCAAgFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIACAAIAEABQALAAAIgKQAGgJABgQQAAgSgIgKQgHgLgMAAQgLAAgFAGQgHAGAAAPIAABCIAAAKQABAEABACIAGADIAEABIADACIABADQAAAEgHABQgFACgPAAQgPAAgFgCg");
	this.shape_1.setTransform(26.3,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgSBKQgFgCAAgEQAAgDAFgDIADAAQADgCABgEIABgLIAAgHIAAgJIAAgKQAAgRgBgDQgBgGgCgBIgFgBQgGgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAGgEIAQgFIAKgCQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAFIAAAGIAAAFIgBAaIAAAAIAAAaIABAOQABAEACABIAEACQAFABAAAFQAAADgFACQgFACgOAAQgPAAgFgCgAgMg0QgFgEAAgFQAAgGAFgEQAFgEAHAAQAGAAAFADQAEAEAAAGQAAAGgFAEQgFAEgGAAQgHAAgEgEg");
	this.shape_2.setTransform(17.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgVBKQgGgCAAgEQAAgEAFgCQAGgCABgCQABgCABgRIABgwIgBgcIgBgRQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgGgCIgEAAQgIABgEACQgEABgCAEIgEAHIgDAHIgDADIgEABQgDAAgBgCIgBgKQAAgNADgIQADgJAFAAIABABIAVABIA8AAIAVgBIACgBQAFAAADAJQADAIAAANQAAAHgBADQgCACgDAAIgEgBIgDgDIgDgHIgDgHQgDgEgEgBQgEgCgHgBIgFAAIgGACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgBARIAAAcIABAwQAAARABACIAHAEQAGACAAAEQAAAEgGACQgGACgQAAQgPAAgGgCg");
	this.shape_3.setTransform(7.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgVBJQgGgBAAgFQAAgEAGgDIAFgCQADgDABgqIAAgKIgNgTIgTgfQgGgJgEgCIgFgCQgHgDAAgEQAAgEAFgCQAFgBAUAAQAUAAAFABQAFACAAAEQAAAEgIADIAAABIgEACIgBADQAAACAFAIIAUAgIASgbQAGgKAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgGgEQgEgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEgCQAFgBARAAQARAAAEABQAFACAAAEQAAAEgGADIgIAEQgFADgKAPQgKAPgPAaIAAASQABAjADACIAEACQAHADAAAEQAAAFgGABQgGACgQAAQgPAAgGgCg");
	this.shape_4.setTransform(-12.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgVBJQgGgBAAgFQAAgEAHgDIAEgCQACgCABgMIABgsIgBgoQAAgPgCgCQgBgBgFgCQgGgDAAgEQAAgEAEgCQAFgBASAAQATAAAEABQAFACAAAEQAAAEgHADIgEACQgCACgBAKIgBAiIABAxQABASABACQAAACAHACQAFACAAAEQAAAFgGABQgFACgRAAQgPAAgGgCg");
	this.shape_5.setTransform(-22.4,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgWBLIgNAAIgJAAIgIAAQgNAAgEgCQgEgBAAgFQAAgEAGgCQAFgCABgBQACgDAAgPIABgoIgBgmQgBgQgBgCQgBgCgFgCQgGgCAAgEQAAgFAEgBQAFgCAMAAIAJAAIALAAIAOAAIAMAAQAmAAAVAUQAVAUAAAkQAAAkgWATQgVASgpAAgAgWg6QgFABgBADIgCAQIgBAgIABAnIACAUQABADAHACQAHACAJAAQAXAAAMgOQAMgOAAgeQAAgegNgQQgOgQgZAAQgIAAgFACg");
	this.shape_6.setTransform(-34.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diylargemobile, new cjs.Rectangle(-44.2,-14.4,88.4,28.8), null);


(lib.ctavideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("Ao5BvIAAjdIRzAAIAADdg");
	this.shape.setTransform(14.1,0.3,1.244,0.977);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctavideo, new cjs.Rectangle(-56.8,-10.5,142,21.7), null);


(lib.ctarectanglemobilelarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("Ao6BvIAAjdIR1AAIAADdg");
	this.shape.setTransform(14.5,0.5,1.251,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglemobilelarge, new cjs.Rectangle(-56.9,-10.6,142.9,22.2), null);


(lib.cookietwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwo_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookietwelve_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwelve();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwelve_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiethree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethree();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethree_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieten_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieten();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieten_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiesix_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesix_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieseven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseven();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseven_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieone_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookienine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookienine_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiegreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiegreens_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiefrosting_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefrosting_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiefour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefour_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookiefive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefive();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefive_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieeleven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeleven();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeleven_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieeight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeight();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeight_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.cookieberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieberries_1, new cjs.Rectangle(-56.5,-29,113,58), null);


(lib.bluetinlargemobile_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluetinlargemobile();
	this.instance.parent = this;
	this.instance.setTransform(-57,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluetinlargemobile_1, new cjs.Rectangle(-57,-30,114,60), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.blackrectanglefillinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AYmnpIAAPTMgxLAAAIAAvTg");
	this.shape.setTransform(0,0,1.013,1.011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-50.5,321,101);


(lib.ctarolloverorange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(2));

	// cta-rectangle
	this.instance = new lib.ctavideo();
	this.instance.parent = this;
	this.instance.setTransform(14.1,0.7,0.999,1.016,0,0,0,14.1,0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(2).to({alpha:0},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-10.4,141.9,22);


// stage content:
(lib.largemobileslidetransitionfillinboxsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_214 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(157).call(this.frame_214).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.7,50.2,1.558,0.155,0,0,0,0.2,1.3);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(219));

	// black-rectangle
	this.instance = new lib.blackrectanglefillinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.2,50.5,1.954,0.168,0,0,0,0.4,0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,scaleX:1.95,scaleY:0.17,x:160.3,y:50,alpha:0},9).wait(210));

	// logo
	this.instance_2 = new lib.logokale("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.6,21.6,0.163,0.163,0,0,0,0.3,0.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,x:269,y:29.6},0).to({regX:2.5,regY:1.1,scaleX:0.22,scaleY:0.22,x:269.4,y:29.8,alpha:1},6).to({regX:1.2,regY:1,scaleX:0.21,scaleY:0.21,x:269.2},7,cjs.Ease.get(1)).wait(197));

	// fill-inbox-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwWCtIAAjvMAiNAAAIAADvg");
	mask.setTransform(114.3,17.3);

	// fill-your-inbox
	this.instance_3 = new lib.fillyourinboxlargemobile();
	this.instance_3.parent = this;
	this.instance_3.setTransform(106.7,22.3);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({x:-84.7},0).to({x:111.7,alpha:1},11,cjs.Ease.get(1)).to({x:106.7},6,cjs.Ease.get(1)).wait(175));

	// diy-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Au6EkIAAjwIfUAAIAADwg");
	mask_1.setTransform(105,29.2);

	// diy
	this.instance_4 = new lib.diylargemobile();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.5,45.3);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({x:-30.5},0).to({x:57.5,alpha:1},11,cjs.Ease.get(1)).to({x:52.5},6,cjs.Ease.get(1)).wait(30).to({alpha:0},5).wait(72));

	// party-ready-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AyLEqIAAj8MAl3AAAIAAD8g");
	var mask_2_graphics_95 = new cjs.Graphics().p("AyLEqIAAj8MAl3AAAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:126,y:29.8}).wait(95).to({graphics:mask_2_graphics_95,x:126,y:29.8}).wait(124));

	// party-ready
	this.instance_5 = new lib.partyreadylargemobile();
	this.instance_5.parent = this;
	this.instance_5.setTransform(110.7,45.3);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({x:-88.7},0).to({x:115.7,alpha:1},11).to({x:110.7},6,cjs.Ease.get(1)).wait(36).to({alpha:0},5).wait(119));

	// holiday-inspiration-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Au6EkIAAjwIfUAAIAADwg");
	mask_3.setTransform(105,29.2);

	// holiday-inspiration
	this.instance_6 = new lib.holidayinspirationlargemobile();
	this.instance_6.parent = this;
	this.instance_6.setTransform(103.1,45.3);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142).to({x:-84.8},0).to({x:108.1,alpha:1},11).to({x:103.1},6).wait(30).to({alpha:0},5).wait(25));

	// something-delicious-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Aw5EkIAAjwMAjTAAAIAADwg");
	mask_4.setTransform(117.8,29.2);

	// something-delicious
	this.instance_7 = new lib.somethingdeliciouslargemobile();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.8,45.3);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({x:-92.5},0).to({x:115.8,alpha:1},11).to({x:110.8},10).wait(9));

	// sign-up-mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ap4HUIAAlgIV6AAIAAFgg");
	mask_5.setTransform(77,46.8);

	// sign-up
	this.instance_8 = new lib.signuplargemobile();
	this.instance_8.parent = this;
	this.instance_8.setTransform(67.1,73.7);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({x:-46.6},0).to({x:71.1,alpha:1},10,cjs.Ease.get(1)).to({x:67.1},8,cjs.Ease.get(1)).wait(144));

	// cta-mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AuHHSIAAlOIduAAIAAFOg");
	mask_6.setTransform(99.9,46.6);

	// cta-rollover
	this.cta_rollover = new lib.ctarolloverorange();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(81.7,74.7,1.008,1.011,0,0,0,14.3,0.9);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(57).to({x:-31.9,alpha:0},0).to({x:85.8,alpha:1},10).to({x:81.7},8).wait(144));

	// cta-rectangle-mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AuhHAIAAkgIejAAIAAEgg");
	mask_7.setTransform(102.6,44.8);

	// cta-rectangle
	this.instance_9 = new lib.ctarectanglemobilelarge();
	this.instance_9.parent = this;
	this.instance_9.setTransform(67.1,73.9);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({x:-46.6},0).to({x:71.1,alpha:1},10,cjs.Ease.get(1)).to({x:67.1},8,cjs.Ease.get(1)).wait(144));

	// cookie-greens
	this.instance_10 = new lib.cookiegreens_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(252.5,74);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({x:251.5,alpha:1},0).wait(152));

	// cookie-berries
	this.instance_11 = new lib.cookieberries_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(252.5,74);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(64).to({x:251.5,alpha:1},0).wait(155));

	// cookie-frosting
	this.instance_12 = new lib.cookiefrosting_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(251.5,74);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({alpha:1},0).wait(162));

	// cookie-twelve
	this.instance_13 = new lib.cookietwelve_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(251.5,74);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({alpha:1},0).wait(169));

	// cookie-eleven
	this.instance_14 = new lib.cookieeleven_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(251.5,74);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(46).to({alpha:1},0).wait(173));

	// cookie-ten
	this.instance_15 = new lib.cookieten_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(251.5,74);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(42).to({alpha:1},0).wait(177));

	// cookie-nine
	this.instance_16 = new lib.cookienine_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(251.5,74);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(38).to({alpha:1},0).wait(181));

	// cookie-eight
	this.instance_17 = new lib.cookieeight_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(251.5,74);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({alpha:1},0).wait(185));

	// cookie-seven
	this.instance_18 = new lib.cookieseven_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(251.5,74);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(30).to({alpha:1},0).wait(189));

	// cookie-six
	this.instance_19 = new lib.cookiesix_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(251.5,74);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(26).to({alpha:1},0).wait(193));

	// cookie-five
	this.instance_20 = new lib.cookiefive_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(251.5,74);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(22).to({alpha:1},0).wait(197));

	// cookie-four
	this.instance_21 = new lib.cookiefour_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(251.5,74);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(18).to({alpha:1},0).wait(201));

	// cookie-three
	this.instance_22 = new lib.cookiethree_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(251.5,74);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({alpha:1},0).wait(205));

	// cookie-two
	this.instance_23 = new lib.cookietwo_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(251.5,74);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({alpha:1},10).wait(200));

	// cookie-one
	this.instance_24 = new lib.cookieone_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(251.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(219));

	// blue-tin
	this.instance_25 = new lib.bluetinlargemobile_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(252,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(219));

	// candle-3
	this.instance_26 = new lib.whitecandle3gfx("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(87.3,84.5,0.674,0.674);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(219));

	// red-candle
	this.instance_27 = new lib.redcandlegfx("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(65.6,104.2,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(219));

	// candle-2
	this.instance_28 = new lib.whitecandle2gfx("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(39.1,106.9,0.864,0.864,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(219));

	// candle-1
	this.instance_29 = new lib.whitecandle3gfx("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(20.3,92.9,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(219));

	// table
	this.instance_30 = new lib.tablelargemobile();
	this.instance_30.parent = this;
	this.instance_30.setTransform(160.1,50.5,1,1.011,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,43.1,321.4,131.4);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;