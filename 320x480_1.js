(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.coffe = function() {
	this.initialize(img.coffe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,179);


(lib.dog2 = function() {
	this.initialize(img.dog2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,769);


(lib.dog = function() {
	this.initialize(img.dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,878);


(lib.fig = function() {
	this.initialize(img.fig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,468);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,126);


(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,557);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dog2();
	this.instance.setTransform(8,-2,0.4179,0.4179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(8,-2,322.2,321.4), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBSQgHgGAAgKQAAgKAHgGQAHgHAJAAQALAAAGAHQAHAGAAAKQAAAKgHAGQgHAHgKgBQgJABgHgHgAgOAZIgIhwIAtAAIgHBwg");
	this.shape.setTransform(190.675,17.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_1.setTransform(179.125,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIBrAAIAAAgIhEAAIAABlg");
	this.shape_2.setTransform(166.375,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBQIAPgbQAJAIAMAAQAPAAAHgRIABgBIg7iGIApAAIAlBbIAlhbIAmAAIg8COQgKAWgNAKQgNAKgUgBQgXAAgOgMg");
	this.shape_3.setTransform(151.4,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBdIAAi2IAlAAIAAAPQAPgRAagBQAdAAATAUQATATAAAeQAAAfgTAUQgTASgdAAQgYAAgPgRIAABAgAgYgyQgKALAAAQQAAASAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgSQAAgQgKgLQgKgKgOAAQgOAAgKAKg");
	this.shape_4.setTransform(135.575,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBSIAAgdIhdAAIAAAdIgkAAIAAg9IAFAAQAMgBAGgQQAEgMACgaIABgvIB0AAIAABmIATAAIAAA9gAgSgfQgCApgKALIA3AAIAAhGIgqAAg");
	this.shape_5.setTransform(117.5,20.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMBQIAPgbQAJAIAMAAQAPAAAHgRIABgBIg7iGIApAAIAlBbIAmhbIAlAAIg9COQgJAWgNAKQgNAKgUgBQgXAAgOgMg");
	this.shape_6.setTransform(94.15,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_7.setTransform(79.825,19.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_8.setTransform(64.275,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABMBRIAAgbIi7AAIAAiFIAnAAIAABlIAtAAIAAhlIAlAAIAABlIAsAAIAAhlIAnAAIAABlIATAAIAAA7g");
	this.shape_9.setTransform(44.25,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_10.setTransform(23.225,19.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+A5IAKgbQAWAKAaAAQAcAAAAgQQAAgNgWAAIgbAAIAAgXIAZAAQAUAAAAgNQAAgOgZAAQgUAAgXAJIgJgbQAbgMAbAAQAbAAASAKQARALABARQAAAUgWAJQAZAHAAAWQAAAUgTALQgSAMgdAAQghAAgagNg");
	this.shape_11.setTransform(8.8,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,223.4,34.5), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBDIAAhPIgpBCIgPAAIgnhCIAABPIgjAAIAAiFIAoAAIAqBMIAuhMIAkAAIABCFg");
	this.shape.setTransform(184.825,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAVgUQAUgTAeAAQAeAAAUASQAUAUAAAeIgBALIhkAAQADANAJAHQALAHAOAAQAUAAAOgNIAUAWQgTAWgkAAQghAAgWgTgAAigLQgCgNgJgHQgJgIgNAAQgMAAgJAIQgJAHgCANIBBAAIAAAAg");
	this.shape_1.setTransform(166.4,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_2.setTransform(150.625,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBdIAAi2IAlAAIAAAPQAPgRAagBQAdAAATAUQATATAAAeQAAAfgTAUQgTASgdAAQgYAAgPgRIAABAgAgYgyQgKALAAAQQAAASAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgSQAAgQgKgLQgKgKgOAAQgOAAgKAKg");
	this.shape_3.setTransform(135.275,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_4.setTransform(117.225,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BNQgVgXABgsQAAhRBIgPIA+gMIAGAiIg5ALQgWAEgLALQgLAKgDAUQATgUAcAAQAeAAARARQARAQABAdQgBAdgUASQgVASggAAQgiAAgUgWgAgWAKQgJAJAAAPQAAAPAJAKQAJAKAOAAQAQAAAIgKQAKgKgBgPQABgPgKgJQgIgJgQAAQgOAAgJAJg");
	this.shape_5.setTransform(100.15,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBDIAAiFIAoAAIAACFgAhXBDIAAiFIAmAAIAAArIAgAAQA0AAAAArQAAAXgPAMQgPAMgcAAgAgxAoIAXAAQAXAAAAgUQAAgTgXAAIgXAAg");
	this.shape_6.setTransform(80.85,19.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BDIAAiFIBDAAQAaAAAOAJQAOAJAAARQAAAUgUAJQAYAHAAAYQAAAmg3AAgAgbApIAgAAQAWAAAAgPQAAgPgVAAIghAAgAgbgLIAdAAQAUAAAAgOQAAgPgUAAIgdAAg");
	this.shape_7.setTransform(62.775,19.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyBDIAAiFIAmAAIAACFgAhXBDIAAiFIAmAAIAAArIAgAAQA0AAAAArQAAAXgPAMQgPAMgbAAgAgxAoIAXAAQAYAAAAgUQAAgTgYAAIgXAAg");
	this.shape_8.setTransform(36.8,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9BXIAAhnIg0BVIgRAAIg0hTIAABlIgmAAIAAitIAiAAIBABrIBBhrIAiAAIAACtg");
	this.shape_9.setTransform(14.025,17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,205.6,34.5), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnbFyIAAj0IO3AAIAAD0gAnbh9IAAj0IO3AAIAAD0g");
	this.shape.setTransform(103.25,108.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(41.2,-16.8,123.99999999999999,247.8), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coffe();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,233,179), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coffe();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,233,179), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coffe();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,233,179), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBTQgHgGAAgKQAAgKAHgFQAGgHAKAAQALAAAGAHQAIAFgBAKQABAKgIAGQgGAHgLAAQgJAAgHgHgAgMAbQAAgTASgRIAOgNQAHgHAAgHQAAgJgIgGQgHgGgMAAQgXAAgNAUIgegSQAWgiAvAAQAdAAARAMQASAMAAAXQAAAVgVATIgPANQgGAIAAAIg");
	this.shape.setTransform(143.75,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_1.setTransform(129.125,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIBrAAIAAAgIhEAAIAABlg");
	this.shape_2.setTransform(116.375,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBQIAOgbQAKAIANAAQAOAAAHgRIAAgBIg5iGIAoAAIAkBbIAnhbIAlAAIg8COQgKAWgOAKQgMAKgTgBQgYAAgOgMg");
	this.shape_3.setTransform(101.4,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBdIAAi2IAlAAIAAAPQAPgRAagBQAdAAATAUQATATAAAeQAAAfgTAUQgTASgdAAQgYAAgPgRIAABAgAgYgyQgKALAAAQQAAASAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgSQAAgQgKgLQgKgKgOAAQgOAAgKAKg");
	this.shape_4.setTransform(85.575,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBSIAAgdIhfAAIAAAdIgkAAIAAg9IAGAAQANgBAFgQQAEgMABgaIACgvIB1AAIAABmIATAAIAAA9gAgTgfQgBApgLALIA4AAIAAhGIgrAAg");
	this.shape_5.setTransform(67.5,20.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBDIAAgmIgeAAIgYAmIgpAAIAegsQgcgLAAgdQAAgYARgMQARgNAdAAIBBAAIAACFgAgWgPQAAASAXAAIAeAAIAAgmIgeAAQgXAAAAAUg");
	this.shape_6.setTransform(43.45,19.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIBCIACggIAGAAQANAAAEgPQADgJABgYIACg2IByAAIAACGIgmAAIAAhmIgqAAIgBAYQgCAngIATQgKAXgYAAQgIAAgMgDg");
	this.shape_7.setTransform(26.95,19.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwBSIAAgdIhfAAIAAAdIgkAAIAAg9IAGAAQANgBAFgQQAEgMABgaIACgvIB0AAIAABmIAUAAIAAA9gAgTgfQgBApgKALIA3AAIAAhGIgrAAg");
	this.shape_8.setTransform(10.6,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,167.2,34.5), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyBDIAAiFIAnAAIAACFgAhYBDIAAiFIAnAAIAAArIAgAAQA0AAAAArQAAAXgPAMQgPAMgcAAgAgxAoIAXAAQAXAAABgUQgBgTgXAAIgXAAg");
	this.shape.setTransform(248,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_1.setTransform(230.575,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_2.setTransform(215.025,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABMBRIAAgbIi7AAIAAiFIAnAAIAABlIAtAAIAAhlIAlAAIAABlIAsAAIAAhlIAnAAIAABlIATAAIAAA7g");
	this.shape_3.setTransform(195,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_4.setTransform(173.975,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+A5IAKgbQAWAKAaAAQAcAAAAgQQAAgNgWAAIgbAAIAAgXIAZAAQAUAAAAgNQAAgOgZAAQgUAAgXAJIgJgbQAbgMAbAAQAbAAASAKQARALABARQAAAUgWAJQAZAHAAAWQAAAUgTALQgSAMgdAAQghAAgagNg");
	this.shape_5.setTransform(159.55,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnBSIAAgeIhyAAIAAiFIAnAAIAABmIA1AAIAAhmIAnAAIAABmIAUAAIAAA9g");
	this.shape_6.setTransform(137.575,20.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBDIAAgmIgdAAIgZAmIgqAAIAggsQgdgLAAgdQAAgYARgMQARgNAdAAIBBAAIAACFgAgWgPQgBASAYAAIAeAAIAAgmIgdAAQgYAAAAAUg");
	this.shape_7.setTransform(119.7,19.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtAyQgWgUAAgeQAAgdAWgUQAVgTAgAAQAVAAAQAJQAPAJAIAQIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQggAAgVgTg");
	this.shape_8.setTransform(105.125,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAUgUQAVgTAeAAQAfAAATASQAUAUAAAeIAAALIhmAAQAEANAKAHQAKAHAOAAQAUAAAOgNIAVAWQgUAWgkAAQgiAAgVgTgAAjgLQgDgNgJgHQgIgIgOAAQgMAAgJAIQgJAHgCANIBCAAIAAAAg");
	this.shape_9.setTransform(89.4,19.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAwBDIAAhPIgpBCIgPAAIgnhCIAABPIgjAAIAAiFIAoAAIAqBMIAuhMIAkAAIABCFg");
	this.shape_10.setTransform(71.425,19.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_11.setTransform(45.275,19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBCIADggIAFAAQANAAAEgPQADgJACgYIABg2IByAAIAACGIgmAAIAAhmIgqAAIgBAYQgCAngIATQgKAXgXAAQgJAAgMgDg");
	this.shape_12.setTransform(27.2,19.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_13.setTransform(10.875,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,264.9,34.5), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAVgUQAUgTAeAAQAeAAAUASQAUAUAAAeIgBALIhlAAQAEANAJAHQALAHAOAAQAUAAAOgNIAUAWQgTAWgkAAQgiAAgVgTgAAigLQgCgNgJgHQgJgIgNAAQgMAAgJAIQgJAHgCANIBBAAIAAAAg");
	this.shape.setTransform(181.35,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQB1IAAguQgogDgUgSQgVgSAAgfQAAg/BRgEIAAgyIAiAAIAAAyQAnACAUARQAWASgBAeQABAfgWASQgUASgnADIAAAugAASApQArgFAAgjQAAghgrgFgAg7ABQgBAjAsAFIAAhOQgsAFABAhg");
	this.shape_1.setTransform(162.9,19.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0AyQgVgUAAgeQAAgdAVgUQAVgTAgAAQAfAAAVATQAVAUAAAdQAAAegVAUQgVATgfAAQggAAgVgTgAgXgaQgLAKABAQQgBARALAKQAKAKAOAAQAOAAAJgKQAKgKAAgRQAAgQgKgKQgJgKgOAAQgOAAgKAKg");
	this.shape_2.setTransform(144.1,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAkg0IApAAIgvBAIAzBFg");
	this.shape_3.setTransform(128.85,19.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_4.setTransform(103.975,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBDIgkgzIgUAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAjg0IAqAAIgvBAIAyBFg");
	this.shape_5.setTransform(88,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlBDIAAiFIAmAAIAABlIAtAAIAAhlIAmAAIAABlIAsAAIAAhlIAnAAIAACFg");
	this.shape_6.setTransform(66.95,19.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_7.setTransform(46.875,19.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaBDIAAgyQgRAJgTAAQg3AAAAgyIAAgqIAnAAIAAAoQAAAXAZAAQAOAAANgHIAAg4IAoAAIAACFg");
	this.shape_8.setTransform(31.275,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFBHIAQggQAVAQAdAAQAOAAAJgGQAJgGAAgKQAAgWggAAIgTAAIAAgaIAjgoIhJAAIAAghIB6AAIAAAaIgoAtQAXAEAMANQANANAAAUQAAAXgSAQQgTARgjAAQgoAAgbgSg");
	this.shape_9.setTransform(8.95,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,195.5,34.5), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyBDIAAiFIAnAAIAACFgAhYBDIAAiFIAnAAIAAArIAgAAQA0AAAAArQAAAXgPAMQgPAMgbAAgAgxAoIAXAAQAXAAABgUQgBgTgXAAIgXAAg");
	this.shape.setTransform(172.95,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_1.setTransform(155.525,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_2.setTransform(139.975,19.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABMBRIAAgbIi7AAIAAiFIAmAAIAABlIAtAAIAAhlIAmAAIAABlIAsAAIAAhlIAnAAIAABlIATAAIAAA7g");
	this.shape_3.setTransform(119.95,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_4.setTransform(98.925,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+A5IALgbQAUAKAbAAQAcAAAAgQQAAgNgWAAIgaAAIAAgXIAYAAQAUAAAAgNQAAgOgZAAQgUAAgXAJIgJgbQAbgMAbAAQAbAAASAKQARALABARQAAAUgWAJQAZAHAAAWQAAAUgTALQgSAMgdAAQghAAgagNg");
	this.shape_5.setTransform(84.5,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBeIAAhQIhABQIgkAAIAAiGIAnAAIAABPIBAhPIAkAAIAACGgAguhdIAaAAQAAATASAAQASAAAAgTIAaAAQAAAngrAAQgsAAgBgng");
	this.shape_6.setTransform(61.775,16.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAVgUQAUgTAeAAQAfAAATASQAUAUAAAeIgBALIhkAAQACANAKAHQALAHAOAAQAUAAAOgNIAVAWQgTAWglAAQghAAgWgTgAAjgLQgDgNgIgHQgKgIgNAAQgMAAgJAIQgJAHgCANIBCAAIAAAAg");
	this.shape_7.setTransform(44.7,19.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBDIAAgyIg5AAIAAAyIgnAAIAAiFIAnAAIAAA0IA5AAIAAg0IAnAAIAACFg");
	this.shape_8.setTransform(28.2,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAwBSIAAgdIhfAAIAAAdIgkAAIAAg9IAGAAQANgBAFgQQAEgMABgaIACgvIB0AAIAABmIAUAAIAAA9gAgTgfQgBApgKALIA3AAIAAhGIgrAAg");
	this.shape_9.setTransform(10.6,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,185.9,34.5), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVC7Qg8hFAAh2QAAh1A8hGQA5hBBcgBQBdABA5BBQA8BGAAB1QAAB2g8BFQg5BChdAAQhcAAg5hCgAheAAQAACdBeABQBggBAAidQAAidhgABQhegBAACdg");
	this.shape.setTransform(70.3,45.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai2DcIAqhUQAjAZA4AAQA9AAAkgkQAmglAChGQgsAshMAAQhJAAgvgpQgxgrAAhEQAAhJA2gtQA0gtBPAAQBmAAA6A/QA6A/AAB1QAAB8hFBHQhDBEhwAAQhTAAg1ghgAhEiUQgWAUAAAhQAAAiAWAUQAXATAmABQAkAAAXgVQAYgUAAghQAAgggXgUQgXgUgnAAQgkAAgXATg");
	this.shape_1.setTransform(23.625,45.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,96.3,89.3), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0,1],-0.1,0,0,-0.1,0,111.5).s().p("AsKMKQlClCAAnIQAAnHFClDQFDlCHHAAQHIAAFCFCQFDFDAAHHQAAHIlDFCQlCFDnIAAQnHAAlDlDg");
	this.shape.setTransform(110.1,110.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,220.2,220.2), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AqOkhIUdAAQAXAAANATQAOATgIAWIhJDUQgGASAGARIBJDUQAIAXgOATQgNASgXAAI0dAAQgXAAgNgSQgNgTAHgXIBJjUQAGgRgGgSIhJjUQgHgWANgTQANgTAXAAg");
	this.shape.setTransform(69.9864,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqOEiQgXAAgNgTQgNgSAHgWIBJjVQAGgSgGgRIhJjUQgHgWANgTQANgTAXAAIUdAAQAXAAANATQAOATgIAWIhJDUQgGARAGASIBJDVQAIAWgOASQgNATgXAAg");
	this.shape_1.setTransform(69.9864,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-1,-1,142,60), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgmAAIAAiFIAmAAIAAA0IAVAAIAkg0IApAAIgvBAIAzBFg");
	this.shape.setTransform(260.4,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_1.setTransform(243.525,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BNQgVgXAAgsQABhRBHgPIA/gMIAGAiIg5ALQgWAEgLALQgLAKgDAUQATgUAdAAQAdAAARARQASAQAAAdQAAAdgVASQgUASghAAQgiAAgUgWgAgWAKQgJAJAAAPQAAAPAJAKQAKAKAOAAQAPAAAIgKQAJgKAAgPQAAgPgJgJQgIgJgPAAQgPAAgJAJg");
	this.shape_2.setTransform(228.15,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0AyQgVgUAAgeQAAgdAVgUQAVgTAgAAQAgAAAUATQAVAUAAAdQAAAegVAUQgUATggAAQggAAgVgTgAgYgaQgKAKABAQQgBARAKAKQALAKAOAAQAOAAAKgKQAJgKABgRQgBgQgJgKQgKgKgOAAQgOAAgLAKg");
	this.shape_3.setTransform(211.35,19.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtAyQgWgUAAgeQAAgdAWgUQAVgTAgAAQAVAAAQAJQAPAJAIAQIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQggAAgVgTg");
	this.shape_4.setTransform(195.925,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBDIAAgmIgeAAIgYAmIgpAAIAegsQgcgLAAgdQAAgYARgMQARgNAdAAIBAAAIAACFgAgWgPQAAASAXAAIAeAAIAAgmIgeAAQgYAAABAUg");
	this.shape_5.setTransform(172.95,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBCIADggIAFAAQANAAAEgPQADgJACgYIABg2IByAAIAACGIgmAAIAAhmIgqAAIgBAYQgCAngIATQgKAXgYAAQgIAAgMgDg");
	this.shape_6.setTransform(156.45,19.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBSIAAgdIhdAAIAAAdIgkAAIAAg9IAFAAQANgBAFgQQAEgMABgaIACgvIB0AAIAABmIATAAIAAA9gAgSgfQgCApgKALIA3AAIAAhGIgrAAg");
	this.shape_7.setTransform(140.1,20.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_8.setTransform(116.525,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBDIgjgzIgUAAIAAAzIgmAAIAAiFIAmAAIAAA0IAVAAIAjg0IAqAAIgvBAIAyBFg");
	this.shape_9.setTransform(102.25,19.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_10.setTransform(86.625,19.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAUgUQAVgTAeAAQAfAAATASQAUAUAAAeIAAALIhmAAQADANALAHQAJAHAPAAQAUAAAOgNIAVAWQgTAWglAAQgiAAgVgTgAAjgLQgDgNgJgHQgIgIgOAAQgMAAgJAIQgJAHgCANIBCAAIAAAAg");
	this.shape_11.setTransform(71.75,19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBCIACggIAGAAQAMAAAFgPQADgJABgYIACg2IByAAIAACGIgnAAIAAhmIgpAAIgCAYQgBAngJATQgKAXgXAAQgIAAgMgDg");
	this.shape_12.setTransform(54.7,19.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BNQgVgXAAgsQABhRBHgPIA/gMIAGAiIg5ALQgWAEgLALQgLAKgDAUQATgUAdAAQAdAAARARQASAQAAAdQgBAdgUASQgVASggAAQgiAAgUgWgAgWAKQgJAJAAAPQAAAPAJAKQAJAKAPAAQAPAAAIgKQAKgKgBgPQABgPgKgJQgIgJgPAAQgPAAgJAJg");
	this.shape_13.setTransform(39.05,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxA6QgOgMAAgRQAAgoA6AAIAeAAQAAgageAAQgXAAgQAMIgOgbQAXgQAjAAQBAAAAAA7IAABMIglAAIAAgQQgLASgdAAQgXAAgNgLgAgZAbQAAAHAGAFQAGAEAKAAQAVAAAHgSIAAgOIgaAAQgYAAAAAQg");
	this.shape_14.setTransform(22.525,19.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_15.setTransform(8.675,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,269.7,34.5), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8AMIAAgXID5AAIAAAXg");
	this.shape.setTransform(141.65,19.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_1.setTransform(113.225,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBCIADggIAFAAQANAAAEgPQADgJACgYIABg2IByAAIAACGIgmAAIAAhmIgqAAIgBAYQgCAngIATQgKAXgXAAQgJAAgMgDg");
	this.shape_2.setTransform(95.15,19.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRB1IAAguQgngDgUgSQgVgSgBgfQAAg/BRgEIAAgyIAjAAIAAAyQAnACAVARQAUASAAAeQAAAfgUASQgVASgnADIAAAugAASApQArgFAAgjQAAghgrgFgAg8ABQAAAjArAFIAAhOQgrAFAAAhg");
	this.shape_3.setTransform(77.1,19.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtAyQgWgUAAgeQAAgdAWgUQAVgTAgAAQAVAAAQAJQAPAJAIAQIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQggAAgVgTg");
	this.shape_4.setTransform(59.225,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAkg0IApAAIgvBAIAzBFg");
	this.shape_5.setTransform(44.6,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_6.setTransform(26.775,19.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBXIAAiNIg4AAIAAggICXAAIAAAgIg4AAIAACNg");
	this.shape_7.setTransform(9.975,17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,156.4,34.5), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAAQAAgIAFgGQAFgGAIAAQAFAAAEACQAEADAFAFIATASIAAgeIAIAAIAAAsIgGAAIgZgZQgHgIgHAAQgKAAAAANQAAAKAHAFIgFAHQgKgIAAgQg");
	this.shape.setTransform(7.525,4.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAMIAAgXIA+AAIAAAJIg2AAIAAAOg");
	this.shape_1.setTransform(7.55,9.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAMIAAgXIA+AAIAAAJIg2AAIAAAOg");
	this.shape_2.setTransform(7.55,12.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXATQgIgIAAgLQAAgLAIgGQAJgIAOABQAPgBAJAIQAIAGAAALQAAALgIAIQgJAGgPABQgOgBgJgGgAgRgLQgGAFAAAGQAAAHAGAFQAGAFALAAQAMAAAGgFQAGgFAAgHQAAgGgGgFQgGgEgMAAQgLAAgGAEg");
	this.shape_3.setTransform(7.55,16.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAUQAHgIAAgLQAAgGgDgFQgDgDgFgBQgGABgDADQgDAFAAAJIAAAPIgggEIAAgiIAIAAIAAAbIARACIAAgHQAAgZASgBQAJAAAFAHQAGAFAAAMQAAAOgIAIg");
	this.shape_4.setTransform(7.575,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXATQgIgIAAgLQAAgLAIgGQAJgIAOABQAPgBAJAIQAIAGAAALQAAALgIAIQgJAGgPABQgOgBgJgGgAgRgLQgGAFAAAGQAAAHAGAFQAGAFALAAQAMAAAGgFQAGgFAAgHQAAgGgGgFQgGgEgMAAQgLAAgGAEg");
	this.shape_5.setTransform(7.55,28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXASQgIgGAAgMQAAgKAIgIQAJgGAOAAQAPAAAJAGQAIAIAAAKQAAAMgIAGQgJAIgPgBQgOABgJgIgAgRgLQgGAEAAAHQAAAHAGAFQAGAFALgBQAMABAGgFQAGgFAAgHQAAgHgGgEQgGgFgMABQgLgBgGAFg");
	this.shape_6.setTransform(7.55,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAMIAAgXIA+AAIAAAJIg2AAIAAAOg");
	this.shape_7.setTransform(7.55,39.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXATQgIgIAAgLQAAgLAIgGQAJgIAOABQAPgBAJAIQAIAGAAALQAAALgIAIQgJAGgPABQgOgBgJgGgAgRgLQgGAFAAAGQAAAHAGAFQAGAFALAAQAMAAAGgFQAGgFAAgHQAAgGgGgFQgGgEgMAAQgLAAgGAEg");
	this.shape_8.setTransform(7.55,43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAUQAHgIAAgLQAAgGgDgFQgDgDgFAAQgGAAgDADQgDAFAAAKIAAAOIgggEIAAgiIAIAAIAAAbIARACIAAgHQAAgZASAAQAJgBAFAHQAGAGAAALQAAAOgIAIg");
	this.shape_9.setTransform(7.575,49.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAbIAAgJIAbAAIAAgjIgbAAIAAgJIA+AAIAAAJIgcAAIAAAjIAcAAIAAAJg");
	this.shape_10.setTransform(7.55,57.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAbIAAgJIAbAAIAAgjIgbAAIAAgJIA+AAIAAAJIgcAAIAAAjIAcAAIAAAJg");
	this.shape_11.setTransform(7.55,64.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAbIAAgJIAvAAIgvgkIAAgIIA+AAIAAAIIgwAAIAwAlIAAAIg");
	this.shape_12.setTransform(7.55,72.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAEQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAFACIANADIAAAFIgNgDQgBAEgEAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_13.setTransform(10.775,79.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAHIgQAMIAAgIIAQgMIARAMIAAAIgAAAgKIgQALIAAgHIAQgMIARAMIAAAHg");
	this.shape_14.setTransform(8.325,82.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAaIAAgzIAIAAIAAAWIA2AAIAAAIIg2AAIAAAVg");
	this.shape_15.setTransform(7.55,87.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAZIAAgYQgBgLAHgHQAFgHAKAAQAKAAAFAHQAHAHAAALIAAAPIATAAIAAAJgAgWABIAAAPIAbAAIAAgPQgBgQgNAAQgOAAABAQg");
	this.shape_16.setTransform(7.55,93.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAFIAAgIIA+gdIAAAKIgQAGIAAAgIAQAIIAAAJgAgVAAIAdAOIAAgag");
	this.shape_17.setTransform(7.55,100.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAiIAAgDQAAgGgLgDQgGgCgSAAIgTgBIAAgrIA2AAIAAgJIAVAAIAAAIIgNAAIAAAzIANAAIAAAIgAgdAMIAMAAQAcABAGAHIAAgjIguAAg");
	this.shape_18.setTransform(8.25,107.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAbIAAgJIAbAAIAAgjIgbAAIAAgJIA+AAIAAAJIgcAAIAAAjIAcAAIAAAJg");
	this.shape_19.setTransform(7.55,114.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAFIAAgIIA+gdIAAAKIgQAGIAAAgIAQAHIAAAKgAgVAAIAdAOIAAgag");
	this.shape_20.setTransform(7.55,121.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAaIAAgzIAIAAIAAAWIA2AAIAAAIIg2AAIAAAVg");
	this.shape_21.setTransform(7.55,127.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWATQgJgJAAgOQAAgPAKgJIAFAGQgHAHAAALQAAAJAGAIQAIAHAJAAQALAAAGgHQAHgIAAgJQAAgLgIgHIAHgGQAJAJAAAPQAAAOgJAJQgJAKgOAAQgNAAgJgKg");
	this.shape_22.setTransform(7.55,133.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAhIAAgGIArgbIgrgZIAAgIIA+AAIAAAKIgtAAIAlAWIAAAEIglAWIAtAAIAAAIg");
	this.shape_23.setTransform(7.55,141.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAZIAAgYQgBgLAHgHQAFgHAKAAQAKAAAFAHQAHAHAAALIAAAPIATAAIAAAJgAgWABIAAAPIAbAAIAAgPQgBgQgNAAQgOAAABAQg");
	this.shape_24.setTransform(7.55,148.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeAEIAAgIIA+gcIAAAJIgQAHIAAAhIAQAHIAAAJgAgVAAIAdANIAAgag");
	this.shape_25.setTransform(7.55,155.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAdQgHgJgBgQIgGAAIAAgHIAGAAQABgQAHgJQAIgJALAAQAMAAAIAJQAGAJABAQIAHAAIAAAHIgHAAQgBAQgGAJQgIAJgMAAQgLAAgIgJgAAAAdQAJAAAGgHQAEgGABgMIgoAAQACAZASAAgAAUgDQgCgZgSAAQgJAAgEAHQgGAGgBAMIAoAAIAAAAg");
	this.shape_26.setTransform(7.55,162.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAaIAAgzIAIAAIAAAVIA2AAIAAAIIg2AAIAAAWg");
	this.shape_27.setTransform(7.55,169.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAXIAAgsIAIAAIAAAjIATAAIAAgfIAHAAIAAAfIAUAAIAAgkIAIAAIAAAtg");
	this.shape_28.setTransform(7.55,174.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAaIAAgaQAAgKADgGQAFgGAIAAQAKAAAEAKQACgNANAAQAIAAAEAGQAEAGABALIAAAcgAADgCIAAATIAVAAIAAgTQABgOgLAAQgLAAAAAOgAgXAAIAAARIAUAAIAAgRQAAgNgKAAQgKAAAAANg");
	this.shape_29.setTransform(7.55,181.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAGIAAgHIAQAMIARgMIAAAHIgRANgAgQgKIAAgIIAQANIARgNIAAAIIgRAMg");
	this.shape_30.setTransform(8.325,187.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgJgJgAgRgRQgGAIAAAJQAAALAGAGQAIAIAJgBQALABAGgIQAHgGAAgLQAAgJgHgIQgGgGgLAAQgJAAgIAGg");
	this.shape_31.setTransform(7.55,195.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAJgKANAAQAOAAAJAKQAJAJAAAOQAAAOgJAKQgJAKgOAAQgNAAgJgKgAgRgQQgGAHAAAJQAAAKAGAIQAIAGAJABQALgBAGgGQAHgIAAgKQAAgJgHgHQgGgIgLAAQgJAAgIAIg");
	this.shape_32.setTransform(7.55,203.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgKANABQAOgBAJAKQAJAKAAANQAAAPgJAJQgJAKgOAAQgNAAgJgKgAgRgRQgGAIAAAJQAAALAGAGQAIAIAJAAQALAAAGgIQAHgGAAgLQAAgJgHgIQgGgGgLAAQgJAAgIAGg");
	this.shape_33.setTransform(7.55,210.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgWAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_34.setTransform(8.325,218.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAUIAAgIIAQAAIAAgNQAAgJAEgFQADgEAIAAQAIAAAEAFQAEAFAAAJIAAAUgAAAAAIgBAMIASAAIAAgMQAAgKgJAAQgIAAAAAKg");
	this.shape_35.setTransform(8.325,221.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQAYIAAgCQAAgGgHgBIgOgCIgSgBIAAgjIAvAAIAAAJIgoAAIAAATIALAAQANABAIADQAIADAAAHIAAAFg");
	this.shape_36.setTransform(8.35,227.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRARQgGgHAAgKQAAgKAGgGQAHgHAKAAIADAAIAAAmQAGgBAEgEQAEgFAAgGQAAgJgGgFIAGgFQAHAHAAAMQAAALgHAHQgGAHgLAAQgKAAgHgHgAgMgKQgEAFAAAFQAAAGAEAEQADAEAHABIAAgdQgGAAgEAEg");
	this.shape_37.setTransform(8.325,232.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXAWIAAgrIAIAAIAAASIAnAAIAAAHIgnAAIAAASg");
	this.shape_38.setTransform(8.325,237.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDACIAAgNIgBAAQgMAAAAAMQAAAJAFAGIgGAEQgGgIAAgMQAAgUATAAIAcAAIAAAJIgHAAQAHAEAAAKQAAAIgEAFQgEAFgGAAQgNAAAAgTgAADABQAAALAHAAQADAAADgCQACgDAAgFQAAgKgJgDIgGAAg");
	this.shape_39.setTransform(8.325,242.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALAcIAAgDQgBgEgHgCQgEgCgLAAIgQgBIAAgkIAnAAIAAgHIASAAIAAAIIgLAAIAAAnIALAAIAAAIgAgVAIIAJABQASABAFAFIAAgaIggAAg");
	this.shape_40.setTransform(8.875,248.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgKAGgHQAHgHAKAAQALAAAGAHQAHAHAAAKQAAALgHAHQgGAHgLAAQgKAAgHgHgAgLgLQgFAFAAAGQAAAHAFAEQAEAFAHAAQAHAAAFgFQAFgEAAgHQAAgGgFgFQgFgEgHAAQgHAAgEAEg");
	this.shape_41.setTransform(8.325,254.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXAcIAAgJIAfgTIgfgSIAAgJIAvAAIAAAIIgiAAIAcASIAAADIgcASIAiAAIAAAIg");
	this.shape_42.setTransform(8.325,260.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDACIAAgNIgBAAQgMAAAAAMQAAAJAFAGIgGAEQgGgIAAgMQAAgUATAAIAcAAIAAAJIgHAAQAHAEAAAKQAAAIgEAFQgEAFgGAAQgNAAAAgTgAADABQAAALAHAAQADAAADgCQACgDAAgFQAAgKgJgDIgGAAg");
	this.shape_43.setTransform(8.325,266.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAQAYIAAgCQAAgFgHgCIgOgCIgSAAIAAgkIAvAAIAAAJIgoAAIAAATIALAAQANABAIACQAIAEAAAHIAAAFg");
	this.shape_44.setTransform(8.35,272.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAWIAAgIIAUAAIAAgKIgUgPIAAgJIAXASIAYgTIAAAKIgUAPIAAAKIAUAAIAAAIg");
	this.shape_45.setTransform(8.325,277.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRARQgGgHAAgKQAAgKAGgGQAHgHAKAAIADAAIAAAmQAGgBAEgEQAEgFAAgGQAAgJgGgFIAGgFQAHAHAAAMQAAALgHAHQgGAHgLAAQgKAAgHgHgAgMgKQgEAFAAAFQAAAGAEAEQADAEAHABIAAgdQgGAAgEAEg");
	this.shape_46.setTransform(8.325,283.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgeAZIAAgYQgBgLAHgHQAFgHAKAAQAKAAAFAHQAHAHAAALIAAAPIATAAIAAAJgAgWABIAAAPIAbAAIAAgPQgBgQgNAAQgOAAABAQg");
	this.shape_47.setTransform(7.55,289.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_48.setTransform(10.125,296);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDACIAAgNIgBAAQgMAAAAAMQAAAJAFAGIgGAEQgGgIAAgMQAAgUATAAIAcAAIAAAJIgHAAQAHAEAAAKQAAAIgEAFQgEAFgGAAQgNAAAAgTgAADABQAAALAHAAQADAAADgCQACgDAAgFQAAgKgJgDIgGAAg");
	this.shape_49.setTransform(8.325,299.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXAcIAAgJIAfgTIgfgSIAAgIIAvAAIAAAIIgiAAIAcASIAAACIgcASIAiAAIAAAIg");
	this.shape_50.setTransform(8.325,305.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDACIAAgNIgBAAQgMAAAAAMQAAAJAFAGIgGAEQgGgIAAgMQAAgUATAAIAcAAIAAAJIgHAAQAHAEAAAKQAAAIgEAFQgEAFgGAAQgNAAAAgTgAADABQAAALAHAAQADAAADgCQACgDAAgFQAAgKgJgDIgGAAg");
	this.shape_51.setTransform(8.325,312.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQAYIAAgCQAAgGgHgBIgOgCIgSgBIAAgkIAvAAIAAAJIgoAAIAAAUIALAAQANABAIADQAIADAAAHIAAAGg");
	this.shape_52.setTransform(8.35,318);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXAWIAAgIIAUAAIAAgKIgUgPIAAgJIAXASIAYgTIAAAKIgUAPIAAAKIAUAAIAAAIg");
	this.shape_53.setTransform(8.325,322.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRARQgGgHAAgKQAAgKAGgGQAHgHAKAAIADAAIAAAmQAGgBAEgEQAEgFAAgGQAAgJgGgFIAGgFQAHAHAAAMQAAALgHAHQgGAHgLAAQgKAAgHgHgAgMgKQgEAFAAAFQAAAGAEAEQADAEAHABIAAgdQgGAAgEAEg");
	this.shape_54.setTransform(8.325,328.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeAZIAAgYQgBgLAHgHQAFgHAKAAQAKAAAFAHQAHAHAAALIAAAPIATAAIAAAJgAgWABIAAAPIAbAAIAAgPQgBgQgNAAQgOAAABAQg");
	this.shape_55.setTransform(7.55,334.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,15,339.9), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack();
	this.instance.setTransform(0,0,0.5051,0.5051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,150,281.3), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.2864,0.2864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,119.2,36.1), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dog();
	this.instance.setTransform(-20,-18,0.4606,0.4606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-20,-18,190.7,404.4), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fig();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,418,468), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Symbol29();
	this.instance.setTransform(254.2,47.2,1,1,0,0,0,111.7,17.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:111.7,alpha:1},14,cjs.Ease.quadOut).wait(82));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(245.3,17.2,1,1,0,0,0,102.8,17.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:102.8,alpha:1},14,cjs.Ease.quadOut).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,365.9,64.5);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_copy
	this.instance = new lib.Symbol22();
	this.instance.setTransform(210.2,76,1,1,0,0,0,74.2,17.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:74.2,alpha:1},14,cjs.Ease.quadOut).wait(67).to({x:-45.8,alpha:0},15,cjs.Ease.quadIn).wait(1));

	// Layer_1_copy
	this.instance_1 = new lib.Symbol21();
	this.instance_1.setTransform(268.4,47.2,1,1,0,0,0,132.4,17.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:132.4,alpha:1},14,cjs.Ease.quadOut).wait(67).to({x:12.4,alpha:0},15,cjs.Ease.quadIn).wait(5));

	// Layer_1
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(233.7,17.2,1,1,0,0,0,97.7,17.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:97.7,alpha:1},14,cjs.Ease.quadOut).wait(67).to({x:-22.3,alpha:0},15,cjs.Ease.quadIn).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,0,520.9,93.3);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Symbol19();
	this.instance.setTransform(332,61.15,1,1,0,0,0,92.9,17.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:192,alpha:1},14,cjs.Ease.quadOut).wait(66).to({x:48,alpha:0},15,cjs.Ease.quadIn).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(188.1,44.6,1,1,0,0,0,48.1,44.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:48.1,alpha:1},14,cjs.Ease.quadOut).wait(66).to({x:-95.9,alpha:0},15,cjs.Ease.quadIn).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,0,569,89.3);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Symbol15();
	this.instance.setTransform(274.8,47.2,1,1,0,0,0,134.8,17.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:134.8,alpha:1},14,cjs.Ease.quadOut).wait(66).to({x:6.8,alpha:0},15,cjs.Ease.quadIn).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(218.2,17.2,1,1,0,0,0,78.2,17.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:78.2,alpha:1},14,cjs.Ease.quadOut).wait(66).to({x:-49.8,alpha:0},15,cjs.Ease.quadIn).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,0,537.7,64.5);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol26();
	this.instance.setTransform(103.2,103.2,1,1,0,0,0,103.2,103.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1933,scaleY:1.1933,x:103.25,y:103.25},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:103.2,y:103.2},20,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.2,-40,148,295.7);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vs
	this.instance = new lib.Symbol10();
	this.instance.setTransform(361.5,89.35,2.0952,2.0952,0,0,0,103.2,103);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:103.1,scaleX:0.9239,scaleY:0.9239,x:361.65,y:89.4,alpha:1},14,cjs.Ease.quadInOut).wait(66).to({regY:103,scaleX:1.7718,scaleY:1.7718,x:361.6,y:89.35,alpha:0},15,cjs.Ease.quadIn).wait(1));

	// coffe_png
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(251.55,326.55,0.4669,0.4669,0,0,0,116.5,89.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:251.5,y:326.5,alpha:1},14,cjs.Ease.quadInOut).wait(66).to({scaleX:0.3438,scaleY:0.3438,alpha:0},15,cjs.Ease.quadIn).wait(4));

	// coffe_png
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(116.5,89.55,0.452,0.452,0,0,0,116.5,89.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,y:89.5,alpha:1},14,cjs.Ease.quadInOut).wait(66).to({scaleX:0.371,scaleY:0.371,alpha:0},15,cjs.Ease.quadIn).wait(7));

	// coffe_png
	this.instance_3 = new lib.Symbol24();
	this.instance_3.setTransform(251.55,-142.5,0.4665,0.4665,0,0,0,116.5,89.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:251.5,alpha:1},14,cjs.Ease.quadInOut).wait(66).to({regY:89.3,scaleX:0.3437,scaleY:0.3437,alpha:0},15,cjs.Ease.quadIn).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-232,491.3,648);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// от_клещей_и_блох
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26323").s().p("AASA1IgTgkIgjAkIgdAAIA2g1Igdg1IAaAAIASAjIAigjIAcAAIg0A1IAfA1g");
	this.shape.setTransform(78.775,39.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F26323").s().p("AgrAqQgOgNAAgVQAAgaASgSQASgSAbAAQAXAAAPANQAOANAAAVQAAAagSASQgSASgbAAQgXAAgPgNgAgVgVQgKALAAAQQAAANAHAHQAHAHAOAAQAPAAAKgLQALgLAAgRQAAgMgIgHQgHgIgOAAQgPAAgKAMg");
	this.shape_1.setTransform(66.675,39.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F26323").s().p("AhCA0IAGgUIAEAAQAKAAAHgNQAEgKAGgVIALgqIBVAAIgVBqIgZAAIARhUIgoAAIgEAVQgJAigJAOQgLASgQgBQgHAAgIgCg");
	this.shape_2.setTransform(52.85,39.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F26323").s().p("AgwBAQgNgOAAgaQAAghAUgZQAUgZAfgHIA0gKIAAAWIguAIQgkAHgMAiQASgRAYAAQAUAAAMALQALALAAASQAAAagSAQQgSARgbAAQgZAAgNgNgAgZAIQgLAKAAAMQAAANAHAIQAHAHANAAQAOAAALgKQAKgLAAgOQAAgMgHgHQgGgFgNAAQgOAAgLAJg");
	this.shape_3.setTransform(41.025,37.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F26323").s().p("AASA1IAPhHIhIBHIgYAAIAVhqIAaAAIgPBIIBIhIIAXAAIgVBqg");
	this.shape_4.setTransform(21.175,39.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F26323").s().p("AASBLIAPhJIhIBJIgYAAIAVhqIAaAAIgPBHIBIhHIAXAAIgVBqgAgPhDIAAgHIAQAAIgBAEQAAAMAPAAQAQABADgRIARAAQgGAdggABQgcAAAAgXg");
	this.shape_5.setTransform(119.825,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F26323").s().p("AgoAqQgOgNAAgVQAAgbARgRQARgSAaAAQAXAAANANQANAMAAAWQAAAHgBAHIhUAAQABAaAdAAQATAAAMgLIAKASQgRAPgaAAQgYAAgOgNgAAggIQAAgMgHgHQgHgHgNAAQgMAAgJAHQgIAHgEAMIA8AAIAAAAg");
	this.shape_6.setTransform(106.625,18.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F26323").s().p("AA4BAIAEgVIiVAAIAWhqIAZAAIgQBVIAoAAIARhVIAZAAIgSBVIAqAAIARhVIAYAAIgRBVIAQAAIgJAqg");
	this.shape_7.setTransform(90.35,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F26323").s().p("AgoAqQgOgNAAgVQAAgbARgRQARgSAaAAQAXAAANANQANAMAAAWIgBAOIhUAAQABAaAdAAQATAAAMgLIAKASQgRAPgaAAQgYAAgOgNgAAggIQAAgMgHgHQgHgHgNAAQgMAAgJAHQgIAHgEAMIA8AAIAAAAg");
	this.shape_8.setTransform(74.625,18.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F26323").s().p("AhCA1IAFgVIAGAAQAJAAAHgNQAFgKAGgVIAJgpIBWAAIgWBqIgYAAIAQhVIgnAAIgFAVQgIAigKAOQgKARgRAAQgGAAgIgBg");
	this.shape_9.setTransform(61,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F26323").s().p("AAOA2IgVgsIgUAAIgJAsIgZAAIAVhqIAZAAIgJArIATAAIApgrIAbAAIgzA0IAgA2g");
	this.shape_10.setTransform(49.8,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F26323").s().p("AgfA2IARhVIglAAIAEgVIBjAAIgEAVIgmAAIgQBVg");
	this.shape_11.setTransform(33.2,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F26323").s().p("AgrAqQgOgNAAgVQAAgaASgSQASgSAbAAQAXAAAPANQAOANAAAVQAAAagSASQgSASgbAAQgXAAgPgNgAgVgVQgKALAAAQQAAANAHAHQAHAHAOAAQAPAAAKgLQALgLAAgRQAAgMgIgHQgHgIgOAAQgPAAgKAMg");
	this.shape_12.setTransform(20.675,18.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// Layer_3
	this.instance = new lib.Symbol16();
	this.instance.setTransform(-90,29,1,1,0,0,0,70,29);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70,alpha:1},14,cjs.Ease.quadOut).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.8,-1,301.6,60);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(314.6,-118.25,0.4186,0.4186,29.9107,0,0,208.9,233.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],-0.1,0,0,-0.1,0,320.6).s().p("Egi+Ai+QueufAA0fQAA0eOeugQOgueUeAAQUfAAOfOeQOfOgAAUeQAAUfufOfQufOf0fAAQ0eAAugufg");
	this.shape.setTransform(316.5,316.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-246.7,633,879.7), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAARIg4AAIAAAbIAyAAIAAAPIgyAAIAAAdIA6AAIAAARg");
	this.shape.setTransform(190.4,18.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBMAAIAAARIg5AAIAAAbIAyAAIAAAPIgyAAIAAAdIA7AAIAAARg");
	this.shape_1.setTransform(180.35,18.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA1IAAgtIg1AAIAAAtIgUAAIAAhpIAUAAIAAAsIA1AAIAAgsIAUAAIAABpg");
	this.shape_2.setTransform(168.825,18.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrA1IAAhpIBQAAIAAARIg9AAIAAAaIAeAAQAmAAAAAdQAAAQgKAIQgLAJgUAAgAgYAlIAaAAQAXABAAgSQAAgPgXAAIgaAAg");
	this.shape_3.setTransform(157.625,18.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAmQgRgPAAgXQAAgWARgPQAQgQAXAAQAYAAARAQQAQAPAAAWQAAAXgQAPQgRAQgYAAQgXAAgQgQgAgZgaQgLALAAAPQAAAQALALQAKAKAPAAQAQAAAKgKQALgLAAgQQAAgPgLgLQgKgKgQAAQgPAAgKAKg");
	this.shape_4.setTransform(145.375,18.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA1IAAhpIArAAQAUABAMAJQAMALAAARQAAAQgMAKQgMAKgUAAIgYAAIAAAfgAgYAGIAYAAQAZgBAAgTQAAgVgZAAIgYAAg");
	this.shape_5.setTransform(134.15,18.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBAIAAgXIhQAAIAAAXIgSAAIABgnIAEAAQAKgBAEgQQAEgLABgaIABgiIBMAAIAABYIAPAAIAAAngAgRgcQgCArgKAKIA1AAIAAhHIgoAAg");
	this.shape_6.setTransform(122.15,20.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAmQgRgPAAgXQAAgWARgPQAQgQAXAAQAYAAARAQQAQAPAAAWQAAAXgQAPQgRAQgYAAQgXAAgQgQgAgZgaQgLALAAAPQAAAQALALQAKAKAPAAQAQAAAKgKQALgLAAgQQAAgPgLgLQgKgKgQAAQgPAAgKAKg");
	this.shape_7.setTransform(109.775,18.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbA1IAAhYIg1AAIAABYIgTAAIAAhpIBbAAIAABpg");
	this.shape_8.setTransform(97.325,18.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(61));

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzQDHQhSAAg7g6Qg6g6AAhTIAAAAQAAhSA6g6QA7g6BSAAMAmgAAAQBTAAA6A6QA6A6AABSIAAAAQAABTg6A6Qg6A6hTAAg");
	mask.setTransform(143.15,19.925);

	// Layer_3
	this.instance = new lib.Symbol17();
	this.instance.setTransform(400,21.35,1,1,0,0,0,110.1,110.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-120.7},19).wait(42));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004A8F").s().p("AzPDHQhTAAg7g6Qg5g6AAhTIAAAAQAAhSA5g6QA7g6BTAAMAmgAAAQBSAAA6A6QA6A6ABBSIAAAAQgBBTg6A6Qg6A6hSAAg");
	this.shape_9.setTransform(143.15,19.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.3,39.9);


// stage content:
(lib._320x480_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// brd
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B3B3B3").ss(1,2,0,3).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	// rekl
	this.instance = new lib.Symbol9();
	this.instance.setTransform(309.85,306.75,1,1,0,0,0,7.5,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// coffe_png
	this.instance_1 = new lib.Symbol5("synched",0,false);
	this.instance_1.setTransform(52.8,275.55,0.3072,0.3072,0,0,0,116.5,89.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).wait(251));

	// cta
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(160.05,513.1,1,1,0,0,0,143.2,19.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:443.1,alpha:1},14,cjs.Ease.quadOut).wait(422));

	// pack_png
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(396,274.7,1,1,0,0,0,75,140.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({x:236,alpha:1},19,cjs.Ease.quadOut).wait(420));

	// dog_2
	this.instance_4 = new lib.Symbol30();
	this.instance_4.setTransform(-173.9,297.7,1,1,0,0,0,167.1,166.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(294).to({_off:false},0).to({x:64.1,alpha:1},15,cjs.Ease.quadOut).wait(141));

	// dog_png
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(-82.9,342.6,1,1,0,0,0,80.1,141.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({x:87.1,alpha:1},19,cjs.Ease.quadOut).wait(164).to({x:-82.5,alpha:0},15,cjs.Ease.quadIn).wait(241));

	// txtBg_svg
	this.instance_6 = new lib.Symbol4("synched",0,false);
	this.instance_6.setTransform(87.3,162.65,1,1,0,0,0,70,29);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(181).to({startPosition:20},0).to({x:-72.7,alpha:0},15,cjs.Ease.quadIn).wait(246));

	// txt4
	this.instance_7 = new lib.Symbol27("synched",0,false);
	this.instance_7.setTransform(126.4,87.85,1,1,0,0,0,111.7,32);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289).to({_off:false},0).wait(161));

	// txt3
	this.instance_8 = new lib.Symbol13("synched",0,false);
	this.instance_8.setTransform(150.5,102.65,1,1,0,0,0,135.8,46.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(194).to({_off:false},0).wait(256));

	// txt2
	this.instance_9 = new lib.Symbol12("synched",0,false);
	this.instance_9.setTransform(157.2,86.45,1,1,0,0,0,142.5,44.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(351));

	// txt1
	this.instance_10 = new lib.Symbol11("synched",0,false);
	this.instance_10.setTransform(149.5,87.85,1,1,0,0,0,134.8,32);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(446));

	// logo_png
	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(74.3,-42.95,1,1,0,0,0,59.6,18.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:76.6,y:33.1,alpha:1},14,cjs.Ease.quadOut).wait(436));

	// bgfig
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(322.5,479.75,1,1,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(450));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-173,156.6,812,639.6999999999999);
// library properties:
lib.properties = {
	id: 'A6337239ECDD4952BE5D7F630E6CAA04',
	width: 320,
	height: 480,
	fps: 30,
	color: "#F26323",
	opacity: 1.00,
	manifest: [
		{src:"images/coffe.png", id:"coffe"},
		{src:"images/dog2.png", id:"dog2"},
		{src:"images/dog.png", id:"dog"},
		{src:"images/fig.png", id:"fig"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pack.png", id:"pack"}
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
an.compositions['A6337239ECDD4952BE5D7F630E6CAA04'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;