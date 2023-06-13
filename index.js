(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1000,1800]]},
		{name:"index_atlas_2", frames: [[0,0,1058,1276],[1060,0,817,1275]]},
		{name:"index_atlas_3", frames: [[0,1065,438,972],[440,1961,340,39],[919,785,181,371],[1561,785,50,47],[1461,1357,76,57],[1561,962,452,481],[440,1065,477,567],[440,1634,717,325],[0,0,894,1063],[896,390,717,393],[896,0,775,388],[1461,1445,300,275],[1673,0,300,363],[1615,390,400,570],[1159,1357,300,355],[1159,785,400,570],[1159,1714,300,300]]}
];


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



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4588,2047);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4184,2047);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4223,2047);


(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.npc = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.volt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(3).p("AhBAHIBwBGQAHAEAGgDQAHgEAAgHIAFiEQAAgIgHgEQgGgEgHAEIh0A+QgHAEAAAIQAAAGAGAEg");
	this.shape.setTransform(-1.3268,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AAvBNIhwhGQgGgEAAgGQAAgIAHgDIB0g/QAHgDAGAEQAHADAAAIIgFCEQAAAHgHAEQgDACgDAAQgDAAgEgDg");
	this.shape_1.setTransform(-1.3268,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(3).p("ADeAAQAABWhBA9QhBA9hcAAQhbAAhBg9QhBg9AAhWQAAhVBBg9QBBg9BbAAQBcAABBA9QBBA9AABVg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AicCTQhBg9AAhWQAAhVBBg9QBBg9BbAAQBcAABBA9QBBA9AABVQAABWhBA9QhBA9hcAAQhbAAhBg9g");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.volt, new cjs.Rectangle(-27.6,-22.3,51.400000000000006,44.6), null);


(lib.roda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-112.75,-254.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roda, new cjs.Rectangle(-112.7,-254.8,219,486), null);


(lib.npc_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.npc();
	this.instance.setTransform(-313.45,-313.45,2.0896,2.0896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.npc_1, new cjs.Rectangle(-313.4,-313.4,626.9,626.9), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("AhWA4QB2h+AIgFQAGgFg7gvQgfgYgfgWIBjA4IC1g/Ih8BXIkdESIB2h9g");
	this.shape.setTransform(20.5,18.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,41,36.3), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("Ah1CxQAGgKgHgdQgKgigXggQg3gTgogfQglgcgLgcQgPgVgCg1QgDg4APgTQANgRgBAFIgCAJQAQAcAUAeQAqA7AXAKQAlAPBLAKIAzgjQA8giAtAEQBIAGCeArIADA5QgBA/gOAXQgMAkgEAIQgGAMgbgTQgsgkgYgQQgsgcgwAHQgzAIgWASQgIAHggAuQgdAogaAPQgLAGgHAAQgPAAgFgUg");
	this.shape.setTransform(31.275,19.7194);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,62.6,39.4), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("Aj8CzQgxgOhFhhQg9hWgJgsQgGgeADgtQABgWACgRQAaAnAwArQBgBWBuAOQBXANBgAYQBGAIBbgzQBZgyBfhKQAvgkAegbQgFAYgMAhQgXBCghAuQgtA9grAxQgyA3gcANQggAPi4AJQhJAEg1AAQhUAAgggJg");
	this.shape.setTransform(44.5132,18.8092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.1,0,88.9,37.6), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("AgaC9QAogWABgfQABgNgPgsQgjglgcgkQgVgagUgeQgggvADgKQgMgpAQguQAIgXAKgOQA6A1A7A6QB3B1AIAWQALAggVAwQgXA2guAeQgpAbg6AOQgeAHgVABQADgDBCgog");
	this.shape.setTransform(13.7632,23.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,27.6,46.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqTWtQhXhOgGh1MgCKgl3QgGh0BOhYQBOhWB0gHIQ3g+QB1gGBXBOQBYBOAGB1MACJAl2QAHB1hOBYQhOBWh1AHIw2A+IgSAAQhqAAhRhIg");
	mask.setTransform(100.5038,157.15);

	// Camada_3
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,10.4,0.4604,0.5294,-3.2399);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(11.4,4.7,178.2,305), null);


(lib.edipo_rei = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Image();
	this.instance.setTransform(-147.3,-89.25,0.9465,0.7085,-3.2407);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#43291A").ss(15).p("A2xOqIhg6pQgEhKAxg4QAyg4BLgEMApagCWQBLgFA4AyQA4AyAEBLIBhapQAEBLgyA4QgyA3hLAFMgpaACWQhLAEg4gyQg4gygEhLg");
	this.shape.setTransform(-0.0001,-0.0036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#634E43").s().p("A11QnQg4gygEhLIhg6pQgEhKAxg4QAyg4BLgEMApagCWQBLgFA4AyQA3AyAFBLIBgapQAFBLgzA4QgxA3hLAFMgpaACWIgMAAQhDAAg0gug");
	this.shape_1.setTransform(-0.0001,-0.0036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.edipo_rei, new cjs.Rectangle(-213.7,-118.4,376.7,287.5), null);


(lib.botao5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F4B17").ss(8).p("AFuDWIrbAAQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AltDWQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgdAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.botao5, new cjs.Rectangle(-47.7,-25.4,95.5,50.8), null);


(lib.botao4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F4B17").ss(8).p("AFuDWIrbAAQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAeAAAUAVQAVAVAAAdIAAEdQAAAdgVAVQgUAVgeAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AlsDWQgeAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAeAAILaAAQAeAAAUAVQAVAVAAAdIAAEdQAAAdgVAVQgUAVgeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.botao4, new cjs.Rectangle(-47.7,-25.4,95.4,50.8), null);


(lib.botao3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F4B17").ss(8).p("AFuDWIrbAAQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AltDWQgdAAgVgVQgVgVAAgeIAAkbQAAgeAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAeIAAEbQAAAegVAVQgVAVgdAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.botao3, new cjs.Rectangle(-47.7,-25.4,95.5,50.8), null);


(lib.botao2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F4B17").ss(8).p("AFuDWIrbAAQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AltDWQgdAAgVgVQgVgVAAgeIAAkbQAAgeAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAeIAAEbQAAAegVAVQgVAVgdAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.botao2, new cjs.Rectangle(-47.7,-25.4,95.5,50.8), null);


(lib.botao1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F4B17").ss(8).p("AFuDWIrbAAQgdAAgVgVQgVgVAAgdIAAkdQAAgdAVgVQAVgVAdAAILbAAQAdAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AltDWQgeAAgVgVQgUgVAAgdIAAkdQAAgdAUgVQAVgVAeAAILaAAQAeAAAVAVQAVAVAAAdIAAEdQAAAdgVAVQgVAVgeAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.botao1, new cjs.Rectangle(-47.7,-25.3,95.4,50.7), null);


(lib.avanc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(3).p("ABBAHIhvBHQgHAEgGgEQgHgEAAgHIgFiEQAAgHAGgFQAHgEAGAEIB1A/QAHADAAAIQAAAGgHAEg");
	this.shape.setTransform(2.1732,-0.5817);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("Ag7BOQgHgEAAgHIgFiEQAAgHAGgFQAHgEAGAEIB1A/QAHADAAAIQAAAGgHAEIhvBHQgDACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(2.1732,-0.5817);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(3).p("ADfAAQAABWhBA9QhBA9hdAAQhbAAhCg9QhBg9AAhWQAAhVBBg9QBCg9BbAAQBdAABBA9QBBA9AABVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AidCTQhBg9ABhWQgBhVBBg9QBCg9BbAAQBcAABBA9QBBA9AABVQAABWhBA9QhBA9hcAAQhbAAhCg9g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.avanc, new cjs.Rectangle(-27.7,-22.3,51.5,44.6), null);


(lib.afonte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-51.75,-36.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-77.55,-60.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(-116.75,-242.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_12();
	this.instance_3.setTransform(-119.25,-41,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afonte, new cjs.Rectangle(-119.2,-242.5,238.5,485), null);


(lib.demeter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(5.7,69.2,1,1,0,0,0,44.6,18.8);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-84.85,78.15,0.5,0.5);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(-3.65,-68.65,1,1,0,0,0,13.8,23.2);
	this.instance_2.alpha = 0.6289;

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(9.25,-19.85,1,1,0,0,0,31.3,19.7);
	this.instance_3.alpha = 0.5781;

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(12,20.1,1,1,0,0,0,20.5,18.1);
	this.instance_4.alpha = 0.4219;

	this.instance_5 = new lib.CachedBmp_16();
	this.instance_5.setTransform(-38.95,-97.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.demeter, new cjs.Rectangle(-84.8,-97.7,170,195.4), null);


(lib.abc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,-1.3,1,1,0,0,0,100.5,155.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#43291A").ss(15).p("AtIW9MgCggsQQgEhLAxg4QAyg4BLgEIXIhUQBKgEA4AyQA4AyAFBKMACgAsRQAEBKgyA4QgyA4hKAFI3IBTQhLAFg4gyQg4gygEhLg");
	this.shape.setTransform(0.0036,0.0288);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#634E43").s().p("AsMY6Qg4gygEhLMgCggsQQgEhLAxg4QAyg4BLgEIXIhUQBKgEA4AyQA4AyAFBKMACgAsRQAEBKgyA4QgyA4hKAFI3IBTIgMABQhDAAg0gug");
	this.shape_1.setTransform(0.0036,0.0288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.abc, new cjs.Rectangle(-158.3,-176.1,298.6,398.4), null);


// stage content:
(lib.museu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// obrafonte
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(76.15,93.15,0.5,0.5);

	this.instance_1 = new lib.Image_3();
	this.instance_1.setTransform(99,113,1.3435,1.3435);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(113.55,679.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(102.65,666,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).wait(16));

	// obrabcd
	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(92.15,24.5,0.5,0.5);

	this.instance_5 = new lib.Image_2();
	this.instance_5.setTransform(116,47,0.9056,1.0415);

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(122,713.65,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(102.65,670.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},120).to({state:[]},19).wait(16));

	// obradem
	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(39.95,24.2,0.5,0.5);

	this.instance_9 = new lib.Image_1();
	this.instance_9.setTransform(54,39,1.6653,1.6653);

	this.instance_10 = new lib.CachedBmp_7();
	this.instance_10.setTransform(54.45,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},101).to({state:[]},19).wait(35));

	// volt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(3).p("AhBAHIBwBGQAHAEAGgDQAHgEAAgHIAFiEQAAgIgHgEQgGgEgHAEIh0A+QgHAEAAAIQAAAGAGAEg");
	this.shape.setTransform(-93.7768,829.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B243").s().p("AAvBNIhwhGQgGgEAAgGQAAgIAHgDIB0g/QAHgDAGAEQAHADAAAIIgFCEQAAAHgHAEQgDACgDAAQgDAAgEgDg");
	this.shape_1.setTransform(-93.7768,829.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(3).p("ADeAAQAABWhBA9QhBA9hcAAQhbAAhBg9QhBg9AAhWQAAhVBBg9QBBg9BbAAQBcAABBA9QBBA9AABVg");
	this.shape_2.setTransform(-92.425,829.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AicCTQhBg9AAhWQAAhVBBg9QBBg9BbAAQBcAABBA9QBBA9AABVQAABWhBA9QhBA9hcAAQhbAAhBg9g");
	this.shape_3.setTransform(-92.425,829.85);

	this.instance_11 = new lib.volt();
	this.instance_11.setTransform(49.75,864.65,1,1,0,0,0,-1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_11}]},19).to({state:[{t:this.instance_11}]},35).to({state:[]},46).wait(55));

	// avanc
	this.instance_12 = new lib.avanc();
	this.instance_12.setTransform(556.65,851.75,1,1,0,0,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:true},46).wait(55));

	// npc
	this.instance_13 = new lib.npc_1();
	this.instance_13.setTransform(1609.9,567.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({x:967.05,y:599.7},0).wait(35).to({x:482.5,y:593.4},0).to({_off:true},46).wait(55));

	// botoes
	this.instance_14 = new lib.botao5();
	this.instance_14.setTransform(1401.3,732.9);

	this.instance_15 = new lib.botao4();
	this.instance_15.setTransform(945.35,502.7);

	this.instance_16 = new lib.botao3();
	this.instance_16.setTransform(862.75,324.9);

	this.instance_17 = new lib.botao2();
	this.instance_17.setTransform(316.15,664.55);

	this.instance_18 = new lib.botao1();
	this.instance_18.setTransform(136.3,440.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{x:136.3}},{t:this.instance_17,p:{x:316.15}},{t:this.instance_16,p:{x:862.75}},{t:this.instance_15,p:{x:945.35}},{t:this.instance_14,p:{x:1401.3}}]}).to({state:[{t:this.instance_18,p:{x:-377.15}},{t:this.instance_17,p:{x:-197.3}},{t:this.instance_16,p:{x:349.3}},{t:this.instance_15,p:{x:431.9}},{t:this.instance_14,p:{x:887.85}}]},19).to({state:[{t:this.instance_18,p:{x:-871.2}},{t:this.instance_17,p:{x:-691.35}},{t:this.instance_16,p:{x:-144.75}},{t:this.instance_15,p:{x:-62.15}},{t:this.instance_14,p:{x:393.8}}]},35).to({state:[]},46).wait(55));

	// obras
	this.instance_19 = new lib.afonte();
	this.instance_19.setTransform(789.05,649.5);

	this.instance_20 = new lib.roda();
	this.instance_20.setTransform(1247.3,679.35,1,1,0,0,0,-4.4,-3.2);

	this.instance_21 = new lib.abc();
	this.instance_21.setTransform(145.95,244.25,1,1,0,0,0,-9.1,23.1);

	this.instance_22 = new lib.edipo_rei();
	this.instance_22.setTransform(821.9,207.4,1,1,0,0,0,-25.4,25.4);

	this.instance_23 = new lib.demeter();
	this.instance_23.setTransform(316.15,531.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{x:316.15,y:531.1}},{t:this.instance_22,p:{x:821.9,y:207.4}},{t:this.instance_21,p:{x:145.95,y:244.25}},{t:this.instance_20,p:{x:1247.3,y:679.35}},{t:this.instance_19,p:{x:789.05,y:649.5}}]}).to({state:[{t:this.instance_23,p:{x:-214.95,y:524.45}},{t:this.instance_22,p:{x:290.8,y:200.75}},{t:this.instance_21,p:{x:-385.15,y:237.6}},{t:this.instance_20,p:{x:716.2,y:672.7}},{t:this.instance_19,p:{x:257.95,y:642.85}}]},19).to({state:[{t:this.instance_23,p:{x:-705.85,y:503.05}},{t:this.instance_22,p:{x:-200.1,y:179.35}},{t:this.instance_21,p:{x:-876.05,y:216.2}},{t:this.instance_20,p:{x:225.3,y:651.3}},{t:this.instance_19,p:{x:-232.95,y:621.45}}]},35).to({state:[{t:this.instance_23,p:{x:-705.85,y:503.05}},{t:this.instance_22,p:{x:-200.1,y:179.35}},{t:this.instance_21,p:{x:-876.05,y:216.2}},{t:this.instance_20,p:{x:225.3,y:651.3}},{t:this.instance_19,p:{x:-232.95,y:621.45}}]},46).to({state:[]},1).wait(54));

	// fundo
	this.instance_24 = new lib.CachedBmp_9();
	this.instance_24.setTransform(-84.35,-11.65,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_10();
	this.instance_25.setTransform(-603.35,-15.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_11();
	this.instance_26.setTransform(-1204.3,-15.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25}]},19).to({state:[{t:this.instance_26}]},35).to({state:[]},46).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-904.8,434.3,2932,577.5999999999999);
// library properties:
lib.properties = {
	id: 'D66A870CE18AF94B956130B2B260D2A9',
	width: 599,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_11.png", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png", id:"CachedBmp_10"},
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"}
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
an.compositions['D66A870CE18AF94B956130B2B260D2A9'] = {
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