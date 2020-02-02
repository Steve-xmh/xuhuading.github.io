(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"主档_atlas_", frames: [[0,0,340,340],[342,0,247,370]]}
];


// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["主档_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["主档_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.位图1 = function() {
	this.initialize(img.位图1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1600);


(lib.AlphaStudio大西瓜工作室Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.text = new cjs.Text("AlphaStudio", "39px 'FZSJ-DQYBKSJW'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(194.6,96.45);

	this.text_1 = new cjs.Text("A", "81px 'FZSJ-DQYBKSJW'", "#CCCCCC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 92;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(184.35,29.55);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(105,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389.3,170);


// stage content:
(lib.主档 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		window.location.assign("https://www.xuhuading.cn/bigxigua/index")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// 图层_3
	this.text = new cjs.Text("AlphaStudio祝大家新年快乐！鼠年大吉！\nAlphaStudio官网正在加载中...", "41px 'FZSJ-DQYBKSJW'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 720;
	this.text.parent = this;
	this.text.setTransform(618,163.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(100));

	// 图层_2
	this.instance = new lib.AlphaStudio大西瓜工作室Logo("synched",0);
	this.instance.setTransform(97.9,719.8,1,1,0,0,0,194.6,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:117.05,y:693.4},0).wait(1).to({x:136.25,y:666.95},0).wait(1).to({x:155.45,y:640.45},0).wait(1).to({x:174.65,y:614.05},0).wait(1).to({x:193.85,y:587.55},0).wait(1).to({x:213.05,y:561.1},0).wait(1).to({x:232.25,y:534.65},0).wait(1).to({x:251.45,y:508.25},0).wait(1).to({x:270.65,y:481.75},0).wait(1).to({x:289.85,y:455.3},0).wait(1).to({x:309.05,y:428.85},0).wait(1).to({x:328.25,y:402.4},0).wait(1).to({x:347.45,y:376},0).wait(1).to({x:366.65,y:349.5},0).wait(1).to({x:385.85,y:323.05},0).wait(1).to({x:405.05,y:296.65},0).wait(1).to({x:424.25,y:270.15},0).wait(1).to({x:443.45,y:243.7},0).wait(1).to({x:462.65,y:217.25},0).wait(1).to({x:481.85,y:190.8},0).wait(1).to({x:501.05,y:164.4},0).wait(1).to({x:520.25,y:137.9},0).wait(1).to({x:539.45,y:111.45},0).wait(1).to({x:558.65,y:85},0).wait(1).to({x:569.3,y:110.4},0).wait(1).to({x:580,y:135.75},0).wait(1).to({x:590.7,y:161.1},0).wait(1).to({x:601.4,y:186.45},0).wait(1).to({x:612.1,y:211.85},0).wait(1).to({x:622.8,y:237.2},0).wait(1).to({x:633.5,y:262.55},0).wait(1).to({x:644.2,y:287.9},0).wait(1).to({x:654.9,y:313.3},0).wait(1).to({x:665.6,y:338.65},0).wait(1).to({x:676.3,y:364},0).wait(1).to({x:687,y:389.35},0).wait(1).to({x:697.7,y:414.75},0).wait(1).to({x:708.4,y:440.1},0).wait(1).to({x:719.1,y:465.45},0).wait(1).to({x:729.8,y:490.8},0).wait(1).to({x:740.5,y:516.2},0).wait(1).to({x:751.2,y:541.55},0).wait(1).to({x:761.9,y:566.9},0).wait(1).to({x:772.6,y:592.25},0).wait(1).to({x:783.3,y:617.65},0).wait(1).to({x:794,y:643},0).wait(1).to({x:804.7,y:668.35},0).wait(1).to({x:815.4,y:693.7},0).wait(1).to({x:826.1,y:719.05},0).wait(1).to({x:831,y:693.7},0).wait(1).to({x:835.9,y:668.35},0).wait(1).to({x:840.85,y:643},0).wait(1).to({x:845.75,y:617.65},0).wait(1).to({x:850.7,y:592.25},0).wait(1).to({x:855.6,y:566.9},0).wait(1).to({x:860.55,y:541.55},0).wait(1).to({x:865.45,y:516.2},0).wait(1).to({x:870.35,y:490.8},0).wait(1).to({x:875.3,y:465.45},0).wait(1).to({x:880.2,y:440.1},0).wait(1).to({x:885.15,y:414.75},0).wait(1).to({x:890.05,y:389.35},0).wait(1).to({x:895,y:364},0).wait(1).to({x:899.9,y:338.65},0).wait(1).to({x:904.85,y:313.3},0).wait(1).to({x:909.75,y:287.9},0).wait(1).to({x:914.65,y:262.55},0).wait(1).to({x:919.6,y:237.2},0).wait(1).to({x:924.5,y:211.85},0).wait(1).to({x:929.45,y:186.45},0).wait(1).to({x:934.35,y:161.1},0).wait(1).to({x:939.3,y:135.75},0).wait(1).to({x:944.2,y:110.4},0).wait(1).to({x:949.15,y:85},0).wait(1).to({x:956.15,y:110.3},0).wait(1).to({x:963.2,y:135.55},0).wait(1).to({x:970.2,y:160.8},0).wait(1).to({x:977.25,y:186.05},0).wait(1).to({x:984.3,y:211.35},0).wait(1).to({x:991.3,y:236.6},0).wait(1).to({x:998.35,y:261.85},0).wait(1).to({x:1005.35,y:287.1},0).wait(1).to({x:1012.4,y:312.35},0).wait(1).to({x:1019.45,y:337.65},0).wait(1).to({x:1026.45,y:362.9},0).wait(1).to({x:1033.5,y:388.15},0).wait(1).to({x:1040.5,y:413.4},0).wait(1).to({x:1047.55,y:438.65},0).wait(1).to({x:1054.6,y:463.95},0).wait(1).to({x:1061.6,y:489.2},0).wait(1).to({x:1068.65,y:514.45},0).wait(1).to({x:1075.65,y:539.7},0).wait(1).to({x:1082.7,y:564.95},0).wait(1).to({x:1089.75,y:590.25},0).wait(1).to({x:1096.75,y:615.5},0).wait(1).to({x:1103.8,y:640.75},0).wait(1).to({x:1110.8,y:666},0).wait(1).to({x:1117.85,y:691.25},0).wait(1).to({x:1124.9,y:716.5},0).wait(1));

	// 图层_1
	this.instance_1 = new lib.位图1();
	this.instance_1.setTransform(0,0,0.4824,0.5575);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(110.5,534.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(521.3,446,798.3,446);
// library properties:
lib.properties = {
	id: 'D47886C08FEF5B4A81AC48EAA6DCB8BE',
	width: 1236,
	height: 892,
	fps: 24,
	color: "#FF0000",
	opacity: 1.00,
	manifest: [
		{src:"images/位图1.png", id:"位图1"},
		{src:"images/主档_atlas_.png", id:"主档_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['D47886C08FEF5B4A81AC48EAA6DCB8BE'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;