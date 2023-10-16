// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: ??????B_C.ggsk
// Generated 2023-10-16T21:55:35

function pano2vrSkin(player,base) {
	player.addVariable('vis_catagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type', 1, 135.00, { ignoreInState: 0  });
	player.addVariable('vis_mobilecatagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletype', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hambegur', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__90=document.createElement('div');
		el.ggId="\uc544\ub798 \uba54\ub274\ubc14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 0px;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='padding:15px; box-sizing:border-box; over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__90.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__90.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__90.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__90.style.transition='';
				if (me.__90.ggCurrentLogicStateVisible == 0) {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
				else if (me.__90.ggCurrentLogicStateVisible == 1) {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
				else if (me.__90.ggCurrentLogicStateVisible == 2) {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
				else {
					me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
					me.__90.ggVisible=true;
				}
			}
		}
		me.__90.logicBlock_visible();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__91=document.createElement('div');
		el.ggId="\uc804\uccb4\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle menu-bar";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px 8px 0px 0px;';
		hs+='bottom : 0%;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((97% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); min-width:750px; box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		el=me.__220=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 216px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__220.onclick=function (e) {
			me.__69.ggVisible = !me.__69.ggVisible;
			var flag=me.__69.ggVisible;
			me.__69.style.transition='none';
			me.__69.style.visibility=((flag)&&(Number(me.__69.style.opacity)>0||!me.__69.style.opacity))?'inherit':'hidden';
		}
		me.__220.onmouseover=function (e) {
			me.elementMouseOver['_220']=true;
			me.__221.logicBlock_backgroundcolor();
		}
		me.__220.onmouseout=function (e) {
			me.elementMouseOver['_220']=false;
			me.__221.logicBlock_backgroundcolor();
		}
		me.__220.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_220']) {
				me.elementMouseOver['_220']=true;
				me.__221.logicBlock_backgroundcolor();
			}
		}
		me.__220.ggUpdatePosition=function (useTransition) {
		}
		el=me.__221=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__221.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_220'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__221.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__221.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__221.style.transition='background-color 500ms ease 0ms';
				if (me.__221.ggCurrentLogicStateBackgroundColor == 0) {
					me.__221.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__221.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__221.logicBlock_backgroundcolor();
		me.__221.onmouseover=function (e) {
			me.elementMouseOver['_221']=true;
			me._image_2.logicBlock_alpha();
		}
		me.__221.onmouseout=function (e) {
			me.elementMouseOver['_221']=false;
			me._image_2.logicBlock_alpha();
		}
		me.__221.ggCurrentLogicStateBackgroundColor = -1;
		me.__221.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_221']) {
				me.elementMouseOver['_221']=true;
				me._image_2.logicBlock_alpha();
			}
		}
		me.__221.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA1xJREFUeF7tnW1W4zAMAOOTLZyM5WQLJ/M+Q3jQNCSSbMlqO/xFkZWZ2PlynbLwl4pASVUNxSwISXYQIAQhyQgkK4cegpBkBJKVQw9BSDICycqhh9yykFrrv2VZnpLtw62U81pK+XtWrLiH1FpbspezhPz/kMBbKeX5KEIjpAK7n0Ap5ZA5QvoZqzJ4C3lTVRMXvHeem1HrVR2eQk7Hwzj+ly3VWrfD65Ra9y6CEPLpCiGzekdrlx4yk/5O2whByC4BziErFnoIPYQecnQM0EPoIfQQekiSu19JZ2TIklAKjEFIIGxJUwiRUAqMQUggbElTCJFQCoxBSCBsSVMIkVAKjEFIIGxJUwiRUAqMQUggbElTCJFQCoxBSCBsSVMIkV'+
			'AKjNkRIppXO7pEXuGuRHdAIGT00abNt04O/7MsS5MxY9Zim4509WuBh5wop5XnFY8QL7LGvAgxgvPaDCFeZI15EWIE57UZQrzIGvMixAjOazOEeJE15kWIEZzXZgjZkK21Ps26S2+lIOSHkM0DxucZYhDy/XBxu8gBvzH0GpcleS1HpiSvNsZSR8/CAVOOOgkUCwhJXm2MpQ6EaCkr4hHyfQ5Rv4dQcBaHIgQhx0sNiQ+lwYG/rOt1uCzS4BK+0rXlrC7WO3nIN4aZF1pDiNOhb02LECs5p+0eVUgbt9uVVra/0+lId3kf8mVhnQo0UkqbVrRdlKxNMXoXNNJupE+nI921EAEkVcgvC4EOfXCJEIUShChgRYSmF9KmaXqCkIy5nu1vc2cXEsXi9MokqpD2BnJ79XZ2Gautreccom2rJ37oibOnkM2byOEHC0IMdtah'+
			'S3QZq01/E0JGDwtaSJHxvUJOb3Q6d2babzs66zZv3iMk7StcM40EGyIkgYSfJSAEIckIJCuHHoKQZASSlUMPQUgyAspy1udZbTbJu+Sra8r08s93Z1k/RLuDI+N3nvYOvxdjyFIYs8xEVKT/CEWIghhCFLAiQhESQVnRBkIUsCJCswtpDLwfv0dw1rSh/lCkJnnvSV3b1l3Gj3551nOVdZeAtTs1UwjfUr+2NW+SQ6uFb6pfGBl+l646h2i7MvE2AuJziC09W2kJIERLzDkeIc6AtekRoiXmHI8QZ8Da9AjREnOOR4gzYG36/3AERZKrMvjRAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_221'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2.style.transition='opacity 500ms ease 0ms';
				if (me._image_2.ggCurrentLogicStateAlpha == 0) {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
				else {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=0.7;
				}
			}
		}
		me._image_2.logicBlock_alpha();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._text_2);
		me.__221.appendChild(me._image_2);
		me.__220.appendChild(me.__221);
		me.__91.appendChild(me.__220);
		el=me.__316=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 123px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__316.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__316.onmouseover=function (e) {
			me.elementMouseOver['_316']=true;
			me.__317.logicBlock_backgroundcolor();
		}
		me.__316.onmouseout=function (e) {
			me.elementMouseOver['_316']=false;
			me.__317.logicBlock_backgroundcolor();
		}
		me.__316.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_316']) {
				me.elementMouseOver['_316']=true;
				me.__317.logicBlock_backgroundcolor();
			}
		}
		me.__316.ggUpdatePosition=function (useTransition) {
		}
		el=me.__317=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__317.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__317.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_316'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__317.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__317.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__317.style.transition='background-color 500ms ease 0ms';
				if (me.__317.ggCurrentLogicStateBackgroundColor == 0) {
					me.__317.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__317.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__317.logicBlock_backgroundcolor();
		me.__317.onclick=function (e) {
			player.toggleMuted("_main");
		}
		me.__317.onmouseover=function (e) {
			me.elementMouseOver['_317']=true;
			me._image_3.logicBlock_alpha();
			me._image_31.logicBlock_alpha();
		}
		me.__317.onmouseout=function (e) {
			me.elementMouseOver['_317']=false;
			me._image_3.logicBlock_alpha();
			me._image_31.logicBlock_alpha();
		}
		me.__317.ggCurrentLogicStateBackgroundColor = -1;
		me.__317.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_317']) {
				me.elementMouseOver['_317']=true;
				me._image_3.logicBlock_alpha();
				me._image_31.logicBlock_alpha();
			}
		}
		me.__317.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNlJREFUeF7tnGF2ozAMhOFk255styfb7sm8zy3pI2AJSR4HkUx/u8KZzyNZNsk88S+VAnOq2XAyE4EkWwQEQiDJFEg2HTqEQJIpkGw6dAiBJFMg2XToEAJJpkCy6dAhBJJMgWTToUMIJJkCyaZDhxBIMgWSTYcOIZBkCiSbDh1CIMkUSDYdOoRAkimQbDp0iAFIKeXPNE2f8zx/GoZ3DSGQA/lKKWU1pEJ571L84J8vD2Tk6l1i/95oOBTKZYGUUt6mafp7E2ueZ/hnEYDUR37M81zTGPwP/iHgM2wEbAk1CMgd9M1UhkC5FJDFFTWFVKHu/kYAqQ9QXDLEKZcBciDMNArIAqWmxt0iWFbEO3L3lR6I5oq1RUYCWaCsd1vrR0'+
			'NTV2ogR65AAVmeU10mFurtJmJUPUkLxAOjihN1yKbPUOuCNqfo83e18BG7Is8zvCB6tr3KqhfrwuitcCqHRGFEHaI8T2z+tNSFcEkKID0gehwSLdYjXXI6EASMqEN6+oxG7flaG70uOQ0ICkSvQ46gSAIr8+/qS04BgoaBWJmRNCS4pKsv6QKyfIhfyi7q33ZvX0rRul7Phsx0dLIU4dpl1yOXep9RBWvea3jTkPBZuk6Dw0CkyW8U3U3uBCCtBdBMK16XSON76kgIyEHXumZyKhBlntq2tnVE0hyvxA+nrSiQesSwvbhppZtTgRwcDDZF8656dB15BSDi4mmlFu+q9wI8KpJPD+RgWyu5xJO2msCjdeQlgGgdueASs8iSowjk4E7d08h50lDkgFJLW6/kEOl+fJe2PCJ7xh7Vj68G1zJoO8bRaZ++y1rP3boj8ops'+
			'jWvR+tWAtJpEqcdoFXapoWyNDfUiBPL9iujubURh1ROIxebWw0VragGlrNCp78s4xNPweYB4xloW1ysBkTr23Ur29BYEIiwzrRHz3oNLJ9KeoxY2hkpjqBz5SwXdsxszd/VMWd/v5movTJvT1TRN0g6reeFGhwgOUdwhHSxKN5qeLW/41vDpi7qw1R19QRXa8oaPTg7eZ0pzY6gcvaOucF1uGlZDlg96e3FAek2/Djv9LGvz9vyH9OVN705MuY0Mp6suh1hot8ZYv17gjR8torfnBGqN+fTY81lCNcTzAGms48TY9LgeIJG32hWA4fpxikM2x+GWtDcUSOQra5G3WUwfInofYg1uHYdwS9Qhyvtl2k5MKuahI/e1TqelrMalV5dbIkAiKz3yP9aFeXrKEoq+9Z2vu38PAjEfOBqKf1ftuMVP45De2hIBIvRTkW9PdW'+
			'11U6asXrdEgax6qreOL31C3JEyZUVrSw8QS46PFH9L3O2YlCkr4paRQA7e2Ie54xIOadSWnx+cucu9A358Zkln2iaje5t7WYdswOz6gBEOedSPBVymqGs5+EE/zyQ1gLBd1VM4pOGW3VfnIgW1saFopathMC5XQxAie2M0Cjq0iD+dQ7wCR8bfvjg66lfknqKGRIS9wv9cpg+5gpiIORIIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMb4D+eAW5J5Vh+GAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_317'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style.transition='opacity 500ms ease 0ms';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=0.7;
				}
			}
		}
		me._image_3.logicBlock_alpha();
		me._image_3.onclick=function (e) {
			me._image_31.style.transition='none';
			me._image_31.style.visibility=(Number(me._image_31.style.opacity)>0||!me._image_31.style.opacity)?'inherit':'hidden';
			me._image_31.ggVisible=true;
			me._image_3.style.transition='none';
			me._image_3.style.visibility='hidden';
			me._image_3.ggVisible=false;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545 \ucf1c\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_3.appendChild(me._text_3);
		me.__317.appendChild(me._image_3);
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAwtJREFUeF7tnG1yhCAQROFm2ZMlOVn2ZqSowi3zwTKDQ6qjzz/5M2CnHw2KujlxSDmQpdQgJgFEbBAABCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCACLmgJgcEgIQMQfE5JAQgIg5ICaHhABEzAExOSQEIGIOiMkhIQARc0BMDgkBiJgDYnJOl5BSyltK6Z5zvot5bZJzGiCllJeU0mtKqf6tx+0/QjkFkJaKCmN/AMSUycCiX1IBkEB/XV11UgEQl4tBxaWUj91a0euVKSvI7243hlSQkNUQtv6dMLjKWgVmAsQmhSkrGsoBGCQkEsZBECREEAYJOQolKBVcZR0FUdsvgEFCrMbmnL/sny2CARDj3XNSAvJtMLznnO'+
			'vW/fCYbTfsOKWYz6LbJl/dzhgeKkA6yRxCmW03NKYVhGy/e6YdISClY1IXyuD/DLkRvSQQQ6J/QDEMOoAMpoGnBhkMfkDx1Fqnpl7dJRPi2LB8b7Xfn0bu/RyuOx5IlwZivVR/YmgojHqeywM5ACUcBkB2Q9+wTiybpvYdkxA/lCXJ2GQABCCae1lMWW1kOo3wXEGab9QmNSyZui4/ZU3C2AZGOJRLAzHA4MbQMyexddJxwDDSHi3/wW5v1crmYmAytq66i/pgt3d2+z1kPYlaQ+o3GTygChhVIUDafpDlBWge4Q6ghQHZQXl6ypzzbV/gWX+cA9B0HzL7CVyb9uoAC/10LhSI07BH+SIoJiCzmle1kwDS0mVeh4xmAMRo1NMy6+tEhnMBxGCSqcTwEoKlH4BYXPLUHEwLQDxmW2sPLPgAsZrsrRt8/tzrDiBeo731'+
			'zrQAxGvwTL0jLQCZMXi2jSEtAJk1d7YdP60x69zidvz4zGKDZ7rn55lmXPuDNg3Mi/VrqD+Q5DqFzOaiS/WJiwEiBhcgABFzQEwOCQGImANickgIQMQcEJNDQgAi5oCYHBICEDEHxOSQEICIOSAmh4QARMwBMTkkBCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCxIB8AvU38nQiVY9jAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_31.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_317'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_31.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_31.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_31.style.transition='opacity 500ms ease 0ms';
				if (me._image_31.ggCurrentLogicStateAlpha == 0) {
					me._image_31.style.visibility=me._image_31.ggVisible?'inherit':'hidden';
					me._image_31.style.opacity=1;
				}
				else {
					me._image_31.style.visibility=me._image_31.ggVisible?'inherit':'hidden';
					me._image_31.style.opacity=0.7;
				}
			}
		}
		me._image_31.logicBlock_alpha();
		me._image_31.onclick=function (e) {
			me._image_3.style.transition='none';
			me._image_3.style.visibility=(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity)?'inherit':'hidden';
			me._image_3.ggVisible=true;
			me._image_31.style.transition='none';
			me._image_31.style.visibility='hidden';
			me._image_31.ggVisible=false;
		}
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545 \ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_31.ggUpdateText();
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
		}
		me._image_31.appendChild(me._text_31);
		me.__317.appendChild(me._image_31);
		me.__316.appendChild(me.__317);
		me.__91.appendChild(me.__316);
		el=me.__411=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__411.onclick=function (e) {
			me.__92.ggVisible = !me.__92.ggVisible;
			var flag=me.__92.ggVisible;
			me.__92.style.transition='none';
			me.__92.style.visibility=((flag)&&(Number(me.__92.style.opacity)>0||!me.__92.style.opacity))?'inherit':'hidden';
		}
		me.__411.onmouseover=function (e) {
			me.elementMouseOver['_411']=true;
			me.__412.logicBlock_backgroundcolor();
		}
		me.__411.onmouseout=function (e) {
			me.elementMouseOver['_411']=false;
			me.__412.logicBlock_backgroundcolor();
		}
		me.__411.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_411']) {
				me.elementMouseOver['_411']=true;
				me.__412.logicBlock_backgroundcolor();
			}
		}
		me.__411.ggUpdatePosition=function (useTransition) {
		}
		el=me.__412=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__412.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__412.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_411'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__412.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__412.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__412.style.transition='background-color 500ms ease 0ms';
				if (me.__412.ggCurrentLogicStateBackgroundColor == 0) {
					me.__412.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__412.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__412.logicBlock_backgroundcolor();
		me.__412.onmouseover=function (e) {
			me.elementMouseOver['_412']=true;
			me._image_4.logicBlock_alpha();
		}
		me.__412.onmouseout=function (e) {
			me.elementMouseOver['_412']=false;
			me._image_4.logicBlock_alpha();
		}
		me.__412.ggCurrentLogicStateBackgroundColor = -1;
		me.__412.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_412']) {
				me.elementMouseOver['_412']=true;
				me._image_4.logicBlock_alpha();
			}
		}
		me.__412.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACahJREFUeF7tnX1MFGcawGcih/iFCuXL9gIVWWGLmKscynHnR235WDSFVIi4J641mBg1buSM0iy5ilGW1aDGYBMMcXctSyLZoiayUI222zvZVspZaUHYUgE5BMr2UKxipdlm9na2w7KzM+98rvDuP37s87zPM+9vnud5552ZZ1HExz92uz3A6WI4giCxbu6u8uC+hfB/95x/H8D+RFF0zMcPF0F9zUEnAHzyPU04W5cxYBioAV8E5BNAnBDWIgjCBwAqgFpn9HRTCQrxvWhARIZANreiwxEciI+CcAfkSGsoigoeNYIBeUlAeIocrZBgeAfyEoNwhyMIGN6ATCEQRDC8Q+EFiN1uj0IQRCHEqkQkG7yB4RTIFI0K0hUZH7WFMy'+
			'BOGIdEOmPFNMtptHACZBqkKCrgnEFhDQTCcLHiBAorIHa7PV2k7Q6qM1as71lDYQwEwiBlbkFRtIHpGcEICIRBOd2MoQADgTWDEgYuwAgKEBAIgzYMXBC4ptAGAmEAw2AEhRYQCIMxDFxRTffuJF0gH7J2CQ5ACwolEBgdnJ1JtIq8VyAQBmcwaNcTKiAwVXHOBPGaukiBwOjgnoRzRK+pyyMQCIM3GJSrLjIgMFXxy4Q0SiYBgdHBLwnC6B5riScgMDqEYeIxSiYAgdEhDAlvUeIOBN5wEpbJpChxAYHRISwJsiiBQETj4DI8IUqIQGAxFwkOiqKuuXcAgelKJBK/m3UtgSEQ0Vk4HHClLRwITFcig8HTFjqNHwEVGcEk8460hQGZ6k+q+9rEk/njeCACAwIvBn0DmaOOYEBg/fANINh79B9CID4Cw+mGmhMgFy5c'+
			'eO3y5csxd+7ciRweHl44NjY2c86cOU8lEsmDVatWdcvl8q7ExMTHXB57Q0NDiNFoXNzS0hLZ1dX12rNnzwLmzp37JDw83LZixYruzZs3d8pksh+5tNnR0TH77NmzsU1NTa8/ePAgdHh4OMjPz288KiqqXyqV9qWnp/9QUFDQw8ImOyDj4+OoQqFIqaurS3769OlsMkeWLVvWWVBQ8OXevXt/YOGsS1WlUsUbDIak+/fv/5FsvNDQUFtubm7TmTNnvubCZnl5eUxVVdXKtra2aLLxFixY8GjDhg3NJ06c+CosLOwXBna1jCPEarXO3rdv319NJlMyHcNhYWE/7ty58/OSkpLv6MiTyezatevPer1+rbcTANedNWvW2KZNm/6l1+v/zcbmkSNH4iorK1f39fVhLT8oP5mZmU06ne5mcHDwC0rhiQIWxkAUCsVfdDrdOy'+
			'AGIyMj/1tRUXElMzNzCEQPlz116tSSw4cPbxwZGQkE0T906FBdaWnpXRAdXLa2tjZCqVS+29/fHwair1Aorp0/f/4WiI7jip3JKstoNEbs2bMna2BgIBTQIJKenm4xmUyNoHr9/f0zN27c+G5LS0scqK5UKu0yGo11sbGxP4PqymSyNJPJBNyDJTg4+KeTJ0/Wbd26tQ/AJjMgW7Zs+VtNTc1bAIZcogEBAWOXLl2qSktLGwbRLy8vX1JYWCgH0SHKFhcXG0tKSr4F0b9169YCmUz2/qNHj+aB6OGyeXl5NwwGwxcAusyASKXSv7e3t5MWNyoHDhw4cEmj0XxDJUf8Pjc3d21tbe0aEB2i7Pr1629fv369HkS/qKgoQa1WZ4PoEGXj4+Otra2tBhB9RinL39//gxcvXvwBxBBRNicn5/OLFy9+BqKflJT03u3bt+NB'+
			'dIiykZGRfd3d3VUg+mxPgnnz5v38+PHjEyA2GQFBUfSfIEbcZTMyMprq6+s/BRmDbVSGh4cPPXz48CMQmzKZLJXuKpJsXLvdfhjEJiMggYGB/xgdHZ0DYohthCQnJ2dbLJYEpjZjYmK6Ozs7dSD6bCMkKChoxGaznQaxyQiIRCLZZrVasV1iRh8my1C2k7Nu3brmGzduXAVxGLsAPXr06HsgOkTZuLi4rra2to9B9BkBYbPKCgwMHNVqtYbs7GxHY0q6H41GIzl48GAeXXl3uaKiok+OHTvWCqLf2Nj4ilwu32Kz2RaC6OGyeXl5Nw0GgxlAl9kqq76+PiQ/P3+zzWYLAjDmEE1NTf2ysbER+D3uJ0+ezEhJScm5e/fuUlCbEomk22w21zDZzsjIyEhraGgAvg6ZP3/+6Llz52pycnIeAvjLDAhmYNu2bSl6vf5tAG'+
			'PI4sWLe9VqdQOgky4Tx48fl2g0mjRsU4+uXX9//1+USmV9WVkZ0DIbHx/bOFWpVOm9vb2v0rXpnJ9rWq1WmCt1zODg4KD/9u3b19G9ig0KCvqfUqm8Vlxc3A5yYO6yu3fvTqysrEwbHx/3oxpnxowZv8rl8ps6nY7VXlZpaenS06dPrx8cHAyhsol9j60ir1y5cs3Pz89OR54gw3xzEYdSWFiYdPXq1cSRkZH5ZMaXL19+Lz8//+v9+/d/D+igR3Hsgs1oNP7J28Ji0aJFg1lZWc0VFRXNXNgsKytbWl1d/WZra6uEbLyQkBBbamrqHZVK9R8m2zQIgrADgjuG7W3V1NTENjc3Rw8NDQVj9yawi6K4uLj7q1ev7tqxY4eVoYOkc2k2mxdWV1dLLBbL6x0dHVHPnz+fidmMiIgYWrlyJWazfc2aNT9xAQMfA8sKarX6'+
			'DbPZvKSnpycCK/Yoitqjo6N7ExISerKysqyAe1fu7rG7H8LlwcKxHDMAgfjSiYDfU4dPnfgGFddTJ/C5LN8A4nouC/s5iOnYvNI3MPzuxf+fXMT+zeSuoa8dzcvuj+vZXicQWEfEJerqq4VHCExbvgQEpi1xaUx6gwqmLVGBTGgDSHzHEKYtcbh4BgKjRBQa5O+pO4HAKBGWy6SupZ56ncAlsEBQiMUcN+kJCIwSYYB47OlL1i8LRgnPUDxFB2aSDAiMEn6BkHa89tZzEUYJP1C8th/3BgRGCQ9AyFIVaVEn+gDfYeecCGVzfjqdrWHq4oYLJQzSou4WJTB1cQCEKlXRSlm4EOyHwpoIreigFSEEKPDeOzMutGEAAXHudUEoYFCAYAADgTvCQDSAYTACAqHQgkLrt0I8jUS57CUzD9s6kYJhDINxhMBCzw8M1kBgoZ'+
			'8AhlHNcEfLOGXBLRbuYXASITB9ef8JI1pLAIIQJxEyTaPFgiDIZ3R/n5AuGM6BTJO6wkm94HTZS4f4FNy+5yUqiHPJS4RMwRTGOwh8zngH8pIXfcFACA7EDUwsgiDA3RHopEmOZAQHIRoQNzDYPxUcTSIXw4gGQnQgHuqMWHBEhyBoUQc9bZ13J7F2rHylNQzAPQRBBri+hgA9Vk/yvwFsqSBg/DWodAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_412'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_4.style.transition='opacity 500ms ease 0ms';
				if (me._image_4.ggCurrentLogicStateAlpha == 0) {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=1;
				}
				else {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=0.7;
				}
			}
		}
		me._image_4.logicBlock_alpha();
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._image_4.appendChild(me._text_4);
		me.__412.appendChild(me._image_4);
		me.__411.appendChild(me.__412);
		el=me.__92=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((89px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -120%;';
		hs+='visibility : hidden;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me._text_6);
		me._rectangle_1.appendChild(me._image_8);
		me.__92.appendChild(me._rectangle_1);
		me.__411.appendChild(me.__92);
		me.__91.appendChild(me.__411);
		el=me.__114=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 309px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.onclick=function (e) {
			player.setVariableValue('vis_catagory', !player.getVariableValue('vis_catagory'));
			player.setVariableValue('vis_button2', true);
		}
		me.__114.onmouseover=function (e) {
			me.elementMouseOver['_114']=true;
			me.__115.logicBlock_backgroundcolor();
		}
		me.__114.onmouseout=function (e) {
			me.elementMouseOver['_114']=false;
			me.__115.logicBlock_backgroundcolor();
		}
		me.__114.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_114']) {
				me.elementMouseOver['_114']=true;
				me.__115.logicBlock_backgroundcolor();
			}
		}
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__115.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_114'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__115.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__115.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__115.style.transition='background-color 500ms ease 0ms';
				if (me.__115.ggCurrentLogicStateBackgroundColor == 0) {
					me.__115.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__115.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__115.logicBlock_backgroundcolor();
		me.__115.onclick=function (e) {
			me.__pc.ggVisible = !me.__pc.ggVisible;
			var flag=me.__pc.ggVisible;
			me.__pc.style.transition='none';
			me.__pc.style.visibility=((flag)&&(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity))?'inherit':'hidden';
		}
		me.__115.onmouseover=function (e) {
			me.elementMouseOver['_115']=true;
			me._image_1.logicBlock_alpha();
		}
		me.__115.onmouseout=function (e) {
			me.elementMouseOver['_115']=false;
			me._image_1.logicBlock_alpha();
		}
		me.__115.ggCurrentLogicStateBackgroundColor = -1;
		me.__115.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_115']) {
				me.elementMouseOver['_115']=true;
				me._image_1.logicBlock_alpha();
			}
		}
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'Mws4U+df5sLYklDQHLQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_115'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style.transition='opacity 500ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=1;
				}
				else {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=0.7;
				}
			}
		}
		me._image_1.logicBlock_alpha();
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04 \uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._text_1);
		me.__115.appendChild(me._image_1);
		me.__114.appendChild(me.__115);
		me.__91.appendChild(me.__114);
		me.__90.appendChild(me.__91);
		me.divSkin.appendChild(me.__90);
		el=me.__86=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -200px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__86.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_catagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__86.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__86.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__86.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me.__86.ggCurrentLogicStatePosition == 0) {
					me.__86.style.left = 'calc(50% - (100% / 2))';
					me.__86.style.bottom='120px';
				}
				else {
					me.__86.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__86.style.bottom='-200px';
				}
			}
		}
		me.__86.logicBlock_position();
		me.__86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__86.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me.__86.ggCurrentLogicStateVisible == 0) {
					me.__86.style.visibility="hidden";
					me.__86.ggVisible=false;
				}
				else if (me.__86.ggCurrentLogicStateVisible == 1) {
					me.__86.style.visibility="hidden";
					me.__86.ggVisible=false;
				}
				else {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
			}
		}
		me.__86.logicBlock_visible();
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(25,29,33,.5); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		el=me.__88=document.createElement('div');
		el.ggId="\uacf5\uac04";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 130px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 130;
		el.ggHeight = 102;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumRows = 0;
			curNumRows = me._cloner_1.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "타운하우스";
		el.ggId="Cloner 1";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me._cloner_1.ggUpdate();
		}
		me._container_1.appendChild(me._cloner_1);
		me._scrollarea_1__content.appendChild(me._container_1);
		me.__88.appendChild(me._scrollarea_1);
		me.__87.appendChild(me.__88);
		me.__86.appendChild(me.__87);
		me.divSkin.appendChild(me.__86);
		el=me.__69=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 310px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__69.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__69.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__69.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__69.style.transition='';
				if (me.__69.ggCurrentLogicStateVisible == 0) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else if (me.__69.ggCurrentLogicStateVisible == 1) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else if (me.__69.ggCurrentLogicStateVisible == 2) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
			}
		}
		me.__69.logicBlock_visible();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #5a5a5a;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__84=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc6b0\uce21 \ud68c\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 10px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		els=me.__1_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35 \uc124\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,254,254,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_0.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me.__84.appendChild(me.__1_0);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__85=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(153,153,153,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_=document.createElement('div');
		els=me.__1___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 1\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 79.646%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_.ggUpdateText();
		el.appendChild(els);
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.onclick=function (e) {
			player.openNext("{node26}","");
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__1_);
		el=me.__2_1=document.createElement('div');
		els=me.__2_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 2\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_1.ggUpdateText();
		el.appendChild(els);
		me.__2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_1.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__2_1);
		me._container_2.appendChild(me.__85);
		me.__84.appendChild(me._container_2);
		me.__70.appendChild(me.__84);
		el=me.__82=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc88c\uce21 \uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
		els=me.__83__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(252,252,252,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 33.3333%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__83.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__83.ggUpdateText();
		player.addListener('changenode', function() {
			me.__83.ggUpdateText();
		});
		el.appendChild(els);
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIdJREFUeF7tnWFu2zAMhe2TbT3Z1pOtO5kGphIgBHYjl++RT5rzp0DiOrY+fSRNOcm+3Q+pEdiljuY+mG0qIKWUn5WZ/f3R8WvP21Mf9fm/3esf+76356WxywOpEH51IDwD+m7AlOFIAukg9DPfA+Lofw3Otu/7b/SOPfuTAhIE4nm83pWgyAAppfzZto1pxKuJKwEmHUgpxUJGyxGvBi3i9VQwqUAErDgDnAYlBUhSrrhql1Vjb1f/ybt9OJAKw/LFLI+3yDI5FIhgvhidFGEhLAzIhGY8wwoxJRJIGZ2OwtvRoYQAEa6mrrKnJ3o6kInzxhksKhQqkAVhNEi0JM8GwswbR232NmDWmqe2YfZ9p4wdZac2KiQ7GgSboS/XN2'+
			'plZ2AYrRmKJUwgaDtcA0CaIPCqiwIEfPIuEM+ZGXxs8AQPBwK+AITCaHDAUKCWMICg2ukUGAQoUEsYQBC5gwoDDQVZcUGBgMJVCAwwFFjYQgNxhyvkbBvti5RSvFbDwhYaiPfEQu0AWrImkAw7OijemywgYQtmCKCUTLGjA2JX9J6VzLWAZNpRWz1eIJAJJWNINpAKxRO25ICkn8xoVXW2nXMhDZLYkYasAMRTtssB8ZS8EN0BhnjyyFJAIBVKMhC7k94dcdw76MpGjyEqQDwhSw7InUMAt54iDbmBLAQEkhABOSR9UiENSY+/ACCePAipFGWAbNuWmthVenFIIJ4a3iZ3atgCAIFMKBiQ2gvyKG+7gJzU1dAFgAEpee240UA8STHNEgAQSP5gAPGGLTsm2MmNmAKAAT1mqCGgsBUWukA3ZcDCFdwQwJpCm9QhCR5w'+
			'cwPUDhYQRNh65JMavl7eVD0SmvptwJ8ChoZYeMgChq02htATRoWpdnCIDm8/WVhAXFftBzPeDQVsBWWyUEIWqB1/FoUug2F+RgRtBxuI95rkq9RgecW+oOyRX/oP7xx8yRnrk1SXJ8dIrqOErJpHUMl95DzCt2HYQTUEWAKHD/bAG1LsiACypCUsO+hAFrWEZkcUkNUsmRvIYpZQYYQYsljFtQaQRSyhwwgzZBFL1gIyuyXMUpfeXDy7sEJ3Wgcu4FCbhNgRGrLITUfUwB/uJ8qOLCDo1jwVRvQaP625+NUogZZO2SAe+4+0I8WQmtxnsSQsd7TZlWJIheK9qY5uSLQdaYZMUgKH25ENRLrpmGFHKhBxS1LsUAAiaUmWHelARC1Js0MFiJol/zcQMUtSYUgYItaav4F0TUfmjXUjF5HpMGQMEbHkBvI8bZ1fjzRiwe'+
			'k2maVuf1BpvayjkUlcwJKwQypkdbkkvOmoYocqkOjWvIwdkkCiW/NKdigDibJEyg5ZIFGWqNmhDoR9oShnhzoQatNR0Q5pIOSmo6QdMwChWKJqhzwQkiWydswCBG3JDcTV9fv8kUpUxSUNYwpDwK35G4jXjq7p6L16l4cxjSGAVcWQ799CTD6p9ZCRE/pGPpkGxnSGfCN8TRGmZFcMRwzpt6lfYGm/nW4PK48v/bz31feL2H66kBUxKJnvcQPJHP2D9/4H6i15g3WNZLcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__83.appendChild(me._image_7);
		me.__82.appendChild(me.__83);
		me.__70.appendChild(me.__82);
		el=me.__71=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=-5;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 23px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me._cpc=document.createElement('div');
		els=me._cpc__img=document.createElement('img');
		els.className='ggskin ggskin_cpc';
		hs=basePath + 'images/cpc.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615C-pc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.95,sy:0.95,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._cpc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cpc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cpc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cpc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cpc.style.transition='';
				if (me._cpc.ggCurrentLogicStateVisible == 0) {
					me._cpc.style.visibility=(Number(me._cpc.style.opacity)>0||!me._cpc.style.opacity)?'inherit':'hidden';
					me._cpc.ggVisible=true;
				}
				else {
					me._cpc.style.visibility="hidden";
					me._cpc.ggVisible=false;
				}
			}
		}
		me._cpc.logicBlock_visible();
		me._cpc.ggUpdatePosition=function (useTransition) {
		}
		el=me._c41=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uce68\uc2e44";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c41.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c41.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._c41.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c41);
		el=me._c31=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c31.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._c31.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c31);
		el=me._c22=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 191px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c22.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._c22.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c22);
		el=me._c2_=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uce68\uc2e42 \uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 197px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c2_.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c2_.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._c2_.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c2_);
		el=me._c17=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 241px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c17.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._c17.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c17);
		el=me._c16=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 145px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c16.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c16.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._c16.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c16);
		el=me._c111=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uac70\uc2e41-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c111.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c111.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._c111.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c111);
		el=me._c15=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uacf5\uc6a9\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 119px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c15.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._c15.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c15);
		el=me._c14=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 73px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c14.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._c14.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c14);
		el=me._c13=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c13.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._c13.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c13);
		el=me._c12=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uc0e4\uc6cc\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c12.onclick=function (e) {
			player.openNext('{node8}');
		}
		me._c12.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c12);
		el=me._c10=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 114px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c10.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._c10.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c10);
		el=me._c9=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 273px;';
		hs+='position : absolute;';
		hs+='top : 123px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c9.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._c9.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c9);
		el=me._c21=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\ubcf5\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 108px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c21.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._c21.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c21);
		el=me._c8=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c8.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._c8.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c8);
		el=me._c110=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c\uc8fc\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 139px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c110.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c110.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._c110.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c110);
		el=me._c7=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c-\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 168px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c7.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._c7.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c7);
		el=me._c_11=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="c-\uc548\ubc29 1-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c_11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c_11.onclick=function (e) {
			player.openNext('{node10}');
		}
		me._c_11.ggUpdatePosition=function (useTransition) {
		}
		me._cpc.appendChild(me._c_11);
		me.__71.appendChild(me._cpc);
		el=me._bpc=document.createElement('div');
		els=me._bpc__img=document.createElement('img');
		els.className='ggskin ggskin_bpc';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615B-pc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.95,sy:0.95,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._bpc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bpc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bpc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bpc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bpc.style.transition='';
				if (me._bpc.ggCurrentLogicStateVisible == 0) {
					me._bpc.style.visibility=(Number(me._bpc.style.opacity)>0||!me._bpc.style.opacity)?'inherit':'hidden';
					me._bpc.ggVisible=true;
				}
				else {
					me._bpc.style.visibility="hidden";
					me._bpc.ggVisible=false;
				}
			}
		}
		me._bpc.logicBlock_visible();
		me._bpc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__81=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__81.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__81.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__81);
		el=me.__219=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uac70\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__219.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__219.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__219.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__219);
		el=me.__80=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__80.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__80);
		el=me.__218=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc8fc\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__218.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__218.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__218);
		el=me.__410=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e44";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__410.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__410.onclick=function (e) {
			player.openNext('{node17}');
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__410);
		el=me.__79=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29\ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 79px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__79.onclick=function (e) {
			player.openNext('{node18}');
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__79);
		el=me.__78=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__78.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__78.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__78);
		el=me.__77=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__77.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 134px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__76.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__76);
		el=me.__217=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__217.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__217.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__217);
		el=me.__315=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e4 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__315.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__315.onclick=function (e) {
			player.openNext('{node16}');
		}
		me.__315.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__315);
		el=me.__75=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uacf5\uc6a9\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : 133px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__75.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__74);
		el=me.__216=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__216.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__216.onclick=function (e) {
			player.openNext('{node12}');
		}
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__216);
		el=me.__215=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e4 2-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__215.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__215.onclick=function (e) {
			player.openNext('{node13}');
		}
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__215);
		el=me.__73=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 216px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__73.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__73);
		el=me.__2_0=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e42 \uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_0.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__2_0);
		el=me.__2_=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e42 \ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 273px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_.onclick=function (e) {
			player.openNext('{node15}');
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__2_);
		el=me.__72=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__72.onclick=function (e) {
			player.openNext('{node19}');
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me._bpc.appendChild(me.__72);
		me.__71.appendChild(me._bpc);
		me.__70.appendChild(me.__71);
		me.__69.appendChild(me.__70);
		me.divSkin.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__68.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__68.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__68.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__68.style.transition='';
				if (me.__68.ggCurrentLogicStateVisible == 0) {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
				else if (me.__68.ggCurrentLogicStateVisible == 1) {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
				else if (me.__68.ggCurrentLogicStateVisible == 2) {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
				else {
					me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
					me.__68.ggVisible=true;
				}
			}
		}
		me.__68.logicBlock_visible();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(96,96,98,.3); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA+NJREFUeF7tneF2pCAMheHJtn2y3T5Z2ydjT2bEOipOuJIM2Dv/2hMSvJ8BBMQY+OtKgdhVbViZ4AYkpfQvhPAnhPD2y3X/CiF8xxhFj83PHEhKSQB8/nIIpcv/WIMxBTJlxV/COFTgAYo1kEQYKgXeY4zSlNn1IcwOFYhs9BVjfCeQKs1MjV2ASEdeGlF9mF5ev86Lo8wY4637MOtDUkolIPPd0K9uNjU7asYJxEbzQ68E8gLRj0ISCIH8KHDFPmSadTia+rk/S0zPFOv7gRnSMEMqn6s2UyJSFQJpBASZj8ujpmUVCKQdkKNnKvXEIYG0AyJT5bWTpJtmi0AI5LqjrMpOXYRghjRKiF03QMdOIFZAABjMkM5gEIgFEDAzcl'+
			'XmVcD8D46yTlA6CUMiE8gJ/R+KVsCQZVeZ21o/o+yu+TBDAEI1MPIk4lQmQynuuSKQSiAIjJoQBFKj1n02VjNntekbtGEIRKvUHYZmhyUMg9PvFTAmsZ4BOQWDQCqBTIKVdlqehkEgGJC9afYmMAgEALJ4opbm6630ygDqmp06qpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxRORjIauNXTweOHR7+ZaRjM7cQEODFlGYVrnS0+6ZrpQ9X82ogA8HIQg4FBQEy4oFjzXaFWKdLFZABsyPrN8zpQrVANPtarW8ixP9lgZSaq9v5HcDv6ZkglT6L/vZOTaj07WJemyElIFDH2frwmaOd6QSiuJ8I'+
			'ZCsSM0Rx43iaEIin2opYBKIQydOEQDzVVsQiEIVIniYE4qm2IhaBKETyNCEQT7UVsQhEIZKnCYF4qq2IRSAKkTxNegUiGiAzyK1njz1ZLGPtXsfm6wgpJa/Z3lcJ0XPc7QddDIA8O6qiZ4G86zYvccwfdGkNRK5IebqO98V3F2+5nmMNhFnyHP/+Z/MsMmTKknwEXk8b7p7LZG8hAxuB8TDAMc2Q5TVNQz75l3wYC/ldZZQl174BkQVxA4IQWAEt7ooZZU1dowGBaFRytCEQR7E1oQhEo5KjDYE4iq0JRSAalRxtCMRRbE0oAtGo5GhDII5ia0IRiEYlRxsCcRRbE4pANCo52hCIo9iaUBogt3fDNc6MbYpf2rzq5CLfMTS+ozTulxkyKhDolTuNOK+wWQIZcrn1Ss2V3AAzEPljwHfVL5UdGyCDQbkcjF0gud2csk'+
			'XWv3vanJA3BBTXpF/R7reM+dBktXRMX5gCBILpZlbqP1cAF6HWbcH8AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._image_9);
		me.__68.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__68);
		el=me.__61=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uacf5\uc720\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
				else if (me.__61.ggCurrentLogicStateVisible == 1) {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
				else if (me.__61.ggCurrentLogicStateVisible == 2) {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
				else {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		el.ggId="\uacf5\uc720\ud654\uba74\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(96,96,98,.3); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.onclick=function (e) {
			me.__62.ggVisible = !me.__62.ggVisible;
			var flag=me.__62.ggVisible;
			me.__62.style.transition='none';
			me.__62.style.visibility=((flag)&&(Number(me.__62.style.opacity)>0||!me.__62.style.opacity))?'inherit':'hidden';
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		els=me.__67__img=document.createElement('img');
		els.className='ggskin ggskin__67';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABJlJREFUeF7tnQly3SAMQPHJ2pyszcnanIyOiHExq8DCCJBnMpOfj4mthxaEsA8lBysJHKyuhvnFaK1/KqXgB44fzu/w+e/59y/4/TgO+7nqrgQIQlxa699KqV+Ipm4TAPJZC0aAZKTcCCLW4wcWjABJANFa//FMUqWCBM3BjH2UOhEgnoROPwEwehxFKAIkBEKtGT7YLBQB4oirg5lKaRk4ewgUgkOAnCIhdOBYUxeFIkD+A+ltqkJtOI5A/gJEKdXZkec0JtASAfIN5HXtOCkJkNhw1VprrOGnbnd4Zmt7DRlorgxbAfLuRBCjULe0imjIdwa318xcgGAk4LYZbbKUUqIhPjRx6rXDuHP7gWFvkNfa3ocA6wFpEzvEgnWS7Y'+
			'EMhBGEvCYM7mwN2HY/EkRqlr4lkBME3HvtGjnl4EquiWylIQy0Iuk77BdbAGEEAuSeLXhYGggzEEUYy/oQIhCfkWK4Vj+SXLL1O1xKQwhBQEhq1rzP1AoEALZisQYKQL36wpy4BBAiECCv5Eh2wEC7HByoWPxKFTGUoEwN5ATh19iW7jn2Pdqk2JNPQFdf2MrE0sVNCYRwLlENoiTQp99PB4TIPLEDMd08ZHUQ0wDZBQR7IFQgnmyeeeoPWs5n50MIQVTF/y3C63FOMxA/7LtUrnErFxGI7FyihwCp+0QDcfbXYdLW6O1cI+cS1MKk6K8IhCDmj+b+Cfq19882hG0BlAVCaEbg2q60M1G/S4HIRlkPE2q5gQGmrCVJ5/a5JIgkEAaFYymgS4PIARlVmp8EMdtcosV3RIEMLBiLZmDhj61p7CdCGXnu5dSZmaotzFMM'+
			'vAuEg6naFsTNZDHQju1B+EBaHq5CZWrRzwGh+oec+zEma7AzF+1wRogFMmzTY66wgPNI7nVtAqSXZBv7FSCNgut1GgcfIk494kMkyuo15Cv7tRoyEgh6Mavy3qZs7s7UR0ZaIDwB425pI1o0ohiVW4O5rRiO3K8dIbklGB/ISF+S0q6twARr6oxMlw9oCzDRIgfGUJZ3/smqkw5QTBKRsIBiSY3B1GVRLFwFGV1CMEtli4tAzvS8Ld2p2WuH2tolYO6uEgXEPcWp6QVIsJ3MPZpf1SBgvsVYDYRi5pfrg3A5eUpTxg6IhUUYVEwFhi0QYjDTRGTsgewGZhogu4CZDogThteE4NPkyaYE4mgLhN5DwCA2HNm3tFW9GGxqIG+DeRD5oeEsAeQNMA9g+OYyG4YvBaQTGMg+YDa61syZ93zmImE6pkbY2LZRKEtqiC8Rxm'+
			'D2frI1UzA3n7KFhkygMReULYF0cP5Yv5FqJ0AiazwUE8xmMPbVR1trSMSUjSyDMloiQBwqhItjLZpiIi4BwgeIeX2FALkDGWmyBAgzHyJABEiLq3vxHHHqLwob+68Gbskwey3FqXukCNc9sGPAthMgMYkNAnJlfUVDIlQGQLm2hguQhGF50ZdI+h1j3F+KuIL1ddGQDJ3OUKLFDgKkoC6dVhmTlScCBGO/6F5gXNzEJECQQKDZA20pgrCXIUAqgERWGe0uMv9p3QYAtK99zK0AaQTS67R/CENFg5QtN4wAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uc720 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__67);
		me.__61.appendChild(me.__66);
		el=me.__62=document.createElement('div');
		el.ggId="\uacf5\uc720 \uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 80px;';
		hs+='left : -300px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
		el.ggId="\uacf5\uc720\uc804\uccb4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\uc8fc\uc18c\uc785\ub825\ub780";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		el.ggId="\ubcf5\uc0ac \ubc84\ud2bc";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 5px 5px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -70px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me._button=document.createElement('div');
		els=me._button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._button.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._button.ggUpdateText();
		el.appendChild(els);
		me._button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me._button);
		me.__64.appendChild(me.__65);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 1px solid rgba(255,255,255,0.588235);';
		hs+='border-radius : 5px 0px 0px 5px;';
		hs+='color : rgba(252,252,252,0.588235);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me._text_8);
		me.__63.appendChild(me.__64);
		me.__62.appendChild(me.__63);
		me.__61.appendChild(me.__62);
		me.divSkin.appendChild(me.__61);
		el=me.__52=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : -30%;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:360px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__52.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilecatagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__52.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__52.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__52.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__52.ggCurrentLogicStatePosition == 0) {
					me.__52.style.left = 'calc(50% - (100% / 2))';
					me.__52.style.bottom='0%';
				}
				else {
					me.__52.style.left='calc(50% - ((100% + 0px) / 2) + 0%)';
					me.__52.style.bottom='-30%';
				}
			}
		}
		me.__52.logicBlock_position();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uce74\ud14c\uace0\ub9ac \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #212121;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px 15px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4\ud30c\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_8=document.createElement('div');
		el.ggId="Container 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._c6=document.createElement('div');
		els=me._c6__img=document.createElement('img');
		els.className='ggskin ggskin_c6';
		hs=basePath + 'images/c6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615C-\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._c6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._c6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._c6.style.transition='';
				if (me._c6.ggCurrentLogicStateVisible == 0) {
					me._c6.style.visibility=(Number(me._c6.style.opacity)>0||!me._c6.style.opacity)?'inherit':'hidden';
					me._c6.ggVisible=true;
				}
				else {
					me._c6.style.visibility="hidden";
					me._c6.ggVisible=false;
				}
			}
		}
		me._c6.logicBlock_visible();
		me._c6.ggUpdatePosition=function (useTransition) {
		}
		me._container_8.appendChild(me._c6);
		el=me._b0=document.createElement('div');
		els=me._b0__img=document.createElement('img');
		els.className='ggskin ggskin_b0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615B-\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._b0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._b0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._b0.style.transition='';
				if (me._b0.ggCurrentLogicStateVisible == 0) {
					me._b0.style.visibility=(Number(me._b0.style.opacity)>0||!me._b0.style.opacity)?'inherit':'hidden';
					me._b0.ggVisible=true;
				}
				else {
					me._b0.style.visibility="hidden";
					me._b0.ggVisible=false;
				}
			}
		}
		me._b0.logicBlock_visible();
		me._b0.ggUpdatePosition=function (useTransition) {
		}
		me._container_8.appendChild(me._b0);
		me.__58.appendChild(me._container_8);
		me.__53.appendChild(me.__58);
		el=me.__54=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ud30c\ud2b8";
		el.ggDx=0;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 5%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
		els=me.__113__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 107px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 99px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__113.ggScrollByX = function(diffX) {
			if(!me.__113.ggHorScrollVisible || diffX == 0 || me.__113.ggHPercentVisible >= 1.0) return;
			me.__113.ggScrollPosX = (me.__113__horScrollFg.offsetLeft + diffX);
			me.__113.ggScrollPosX = Math.max(me.__113.ggScrollPosX, 0);
			me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
			let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + me.__113.ggContentLeftOffset + 'px';
			me.__113.ggScrollPosXPercent = (me.__113__horScrollFg.offsetLeft / me.__113__horScrollBg.offsetWidth);
		}
		me.__113.ggScrollByXSmooth = function(diffX) {
			if(!me.__113.ggHorScrollVisible || diffX == 0 || me.__113.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__113.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__113.ggScrollPosX >= me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth)) {
					me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__113.ggScrollPosX <= 0)) {
					me.__113.ggScrollPosX = Math.max(me.__113.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
			let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + me.__113.ggContentLeftOffset + 'px';
			me.__113.ggScrollPosXPercent = (me.__113__horScrollFg.offsetLeft / me.__113__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__113.ggScrollByY = function(diffY) {
			if(!me.__113.ggVertScrollVisible || diffY == 0 || me.__113.ggVPercentVisible >= 1.0) return;
			me.__113.ggScrollPosY = (me.__113__vertScrollFg.offsetTop + diffY);
			me.__113.ggScrollPosY = Math.max(me.__113.ggScrollPosY, 0);
			me.__113.ggScrollPosY = Math.min(me.__113.ggScrollPosY, me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__vertScrollFg.style.top = me.__113.ggScrollPosY + 'px';
			let percentScrolled = me.__113.ggScrollPosY / (me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__content.style.top = -(Math.round((me.__113.ggContentHeight * (1.0 - me.__113.ggVPercentVisible)) * percentScrolled)) + me.__113.ggContentTopOffset + 'px';
			me.__113.ggScrollPosYPercent = (me.__113__vertScrollFg.offsetTop / me.__113__vertScrollBg.offsetHeight);
		}
		me.__113.ggScrollByYSmooth = function(diffY) {
			if(!me.__113.ggVertScrollVisible || diffY == 0 || me.__113.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__113.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__113.ggScrollPosY >= me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight)) {
					me.__113.ggScrollPosY = Math.min(me.__113.ggScrollPosY, me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__113.ggScrollPosY <= 0)) {
					me.__113.ggScrollPosY = Math.max(me.__113.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__113__vertScrollFg.style.top = me.__113.ggScrollPosY + 'px';
			let percentScrolled = me.__113.ggScrollPosY / (me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__content.style.top = -(Math.round((me.__113.ggContentHeight * (1.0 - me.__113.ggVPercentVisible)) * percentScrolled)) + me.__113.ggContentTopOffset + 'px';
			me.__113.ggScrollPosYPercent = (me.__113__vertScrollFg.offsetTop / me.__113__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__113.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__113.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__113.ggHPercentVisible);
					me.__113.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__113.clientWidth - (me.__113.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__113.clientWidth - (me.__113.ggVertScrollVisible ? 0 : 0))) * me.__113.ggHPercentVisible);
					me.__113.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__113.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__113.ggVPercentVisible);
					me.__113.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__113.clientHeight - (me.__113.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__113.clientHeight - (me.__113.ggHorScrollVisible ? 0 : 0))) * me.__113.ggVPercentVisible);
					me.__113.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__113__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__113.ggDragInertiaX *= 0.65;
				me.__113.ggDragInertiaY *= 0.65;
				me.__113.ggScrollByX(me.__113.ggDragInertiaX);
				me.__113.ggScrollByY(me.__113.ggDragInertiaY);
				if (Math.abs(me.__113.ggDragInertiaX) < 1.0 && Math.abs(me.__113.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__113__content.onmouseup = null;
			me.__113__content.onmousemove = null;
			me.__113__content.ontouchend = null;
			me.__113__content.ontouchmove = null;
			me.__113__content.onpointerup = null;
			me.__113__content.onpointermove = null;
			setTimeout(function() { me.__113.ggIsDragging = false; }, 100);
		}
		me.__113__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__113.ggDragStartX) > 10 || Math.abs(eventY - me.__113.ggDragStartY) > 10) me.__113.ggIsDragging = true;
			var diffX = (eventX - me.__113.ggDragLastX) * me.__113.ggHPercentVisible;
			var diffY = (eventY - me.__113.ggDragLastY) * me.__113.ggVPercentVisible;
			me.__113.ggDragInertiaX = -diffX;
			me.__113.ggDragInertiaY = -diffY;
			me.__113.ggDragLastX = eventX;
			me.__113.ggDragLastY = eventY;
			me.__113.ggScrollByX(-diffX);
			me.__113.ggScrollByY(-diffY);
		}
		me.__113__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__113.ggDragLastX = me.__113.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__113.ggDragLastY = me.__113.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__113__content.onmouseup = me.__113__content.mousetouchend;
			me.__113__content.ontouchend = me.__113__content.mousetouchend;
			me.__113__content.onmousemove = me.__113__content.mousetouchmove;
			me.__113__content.ontouchmove = me.__113__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__113__content.onpointerup = me.__113__content.ontouchend;
				me.__113__content.onpointermove = me.__113__content.ontouchmove;
			}
		}
		els.onmousedown = me.__113__content.mousetouchstart;
		els.ontouchstart = me.__113__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__113__content.mousetouchstart;
		}
		elHorScrollBg = me.__113__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__113__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__113.ggScrollPosX = 0;
		me.__113.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__113.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__113.ggDragInertiaX *= 0.65;
					me.__113.ggScrollByX(me.__113.ggDragInertiaX);
					if (Math.abs(me.__113.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__113.ggDragLastX;
				me.__113.ggDragInertiaX = diffX;
				me.__113.ggDragLastX = e.clientX;
				me.__113.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__113.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__113.ggDragInertiaX *= 0.65;
					me.__113.ggScrollByX(me.__113.ggDragInertiaX);
					if (Math.abs(me.__113.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me.__113.ggDragLastX;
				me.__113.ggDragInertiaX = diffX;
				me.__113.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__113.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me.__113.ggScrollWidth;
			if (e.offsetX < me.__113.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__113.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__113__horScrollBg.getBoundingClientRect();
			var diffX = me.__113.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__113.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__113.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__113.ggScrollByXSmooth(30 * me.__113.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__113__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c \uc2a4\ud06c\ub864 1\uce35";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 60px;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__113.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__113.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__113.style.transition='left 0s, bottom 0s';
				if (me.__113.ggCurrentLogicStatePosition == 0) {
					me.__113.style.left = 'calc(50% - (100% / 2))';
					me.__113.style.bottom='30px';
				}
				else {
					me.__113.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__113.style.bottom='60px';
				}
			}
		}
		me.__113.logicBlock_position();
		me.__113.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me.__113.ggScrollPosX / me.__113.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__113__horScrollBg.style.visibility = 'inherit';
				me.__113__horScrollFg.style.visibility = 'inherit';
				me.__113.ggHorScrollVisible = true;
				if(me.__113.ggHorScrollVisible) {
					me.__113.ggAvailableHeight = me.__113.clientHeight - 0;
					if (me.__113.ggVertScrollVisible) {
						me.__113.ggAvailableWidth = me.__113.clientWidth - 0;
						me.__113.ggAvailableWidthWithScale = me.__113.getBoundingClientRect().width - me.__113__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__113.ggAvailableWidth = me.__113.clientWidth;
						me.__113.ggAvailableWidthWithScale = me.__113.getBoundingClientRect().width;
					}
					me.__113__horScrollBg.style.width = me.__113.ggAvailableWidth + 'px';
					me.__113.ggHPercentVisible = contentWidth != 0 ? me.__113.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__113.ggHPercentVisible > 1.0) me.__113.ggHPercentVisible = 1.0;
					me.__113.ggScrollWidth = Math.round(me.__113__horScrollBg.offsetWidth * me.__113.ggHPercentVisible);
					me.__113__horScrollFg.style.width = me.__113.ggScrollWidth + 'px';
					me.__113.ggScrollPosX = me.__113.ggScrollPosXPercent * me.__113.ggAvailableWidth;
					me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
					me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
					if (me.__113.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
						me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__113.ggAvailableHeight = me.__113.clientHeight;
					me.__113.ggScrollPosX = 0;
					me.__113.ggScrollPosXPercent = 0.0;
					me.__113__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__113.ggHorScrollVisible || vertScrollWasVisible != me.__113.ggVertScrollVisible) {
					skin.updateSize(me.__113);
					me.__113.ggUpdatePosition();
				}
			}
		}
		el=me.__55=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__55;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__56;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 100;
		el.ggHeight = 102;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__56.ggUpdating == true) return;
			me.__56.ggUpdating = true;
			var el=me.__56;
			var curNumRows = 0;
			curNumRows = me.__56.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__56.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__56.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__56.getFilteredNodes(tourNodes, filter);
			me.__56.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__56.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__56.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__56.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__56_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__56.ggNodeCount = me.__56.ggNumFilterPassed;
			me.__56.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__56.parentNode && me.__56.parentNode.classList.contains('ggskin_subelement') && me.__56.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__56.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "타운하우스";
		el.ggId="\ubaa8\ubc14\uc77c \ud074\ub85c\ub098";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__56.childNodes.length; i++) {
				var child=me.__56.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__56.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__56.ggUpdate();
		}
		me.__55.appendChild(me.__56);
		me.__113__content.appendChild(me.__55);
		me.__54.appendChild(me.__113);
		me.__53.appendChild(me.__54);
		me.__52.appendChild(me.__53);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAopJREFUeF7t3dtxwjAQhWHRWShHVSSpgnYoLeNMnAR80W1XOoN+noW0nI9FHkYeXwIvqQQuUtVQTABE7EsACCBiCYiVQ4cAIpaAWDl0CCBiCYiVQ4cAIpaAWDl0CCBiCYiVI9sht9vtI8b4IZaXezmSIAtGCOE9hHCPMV7dUxBaQA7kH8Ya01QoUiA7GNOhyICcYKwo1xjjXejXxaUUCZAMjM9ZNvjhIGA8NtpQEDC2v3rDQMDY34KGgIBxfD3QHQSM84uzriBgpK+Uu4GAkcZYRnQBASMPowsIGPkY7iBglGG4goBRjuEGAkYdhgsIGPUY5iBgtGGYgoDRjmEGAoYNhgkIGHYYzSBg2GI0gYBhj1ENAoYPRhUIGH4YxSBg+G'+
			'IUgYDhj5ENAkYfjCwQMPphJEHA6ItxCgJGf4xDEDDGYOyCZGAs73v5U+i9SdYbkx5OnWRi9K51ivVijN8WvyBgjHUHZGz+m9U3IMsIumSc0i5IAQqburHd7qa+rpHRKdPcYmace3K6w7O9oCSzcxlwetgaFJfMTydNnn4HpS9KEiRzo2dPMXLLAgHFKO2MabJBQMlI02BIEQgoBoknpigGAcUXpQoEFD+UahBQfFCaQECxR2kGAcUWxQQEFDsUMxBQbFBMQUBpRzEHAaUNxQUElHoUNxBQ6lBcQUApR3EHAaUMpQsIKPko3UBAyUPpCgJKGqU7CCjnKENAQDlGGQYCyj7KUBBQtijDQUB5RJEAAeUPRQYkgTLNc6ikQA5QpsFYPr8cyBPKVBiyID8obzM8BOz5OkuyQ9J/MLzuCEDEbAEBRCwBsXLoEEDEEhArhw4B'+
			'RCwBsXLoEEDEEhArhw4BRCwBsXLoEDGQL5r9bHRpS9uWAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 99;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 200%;';
		hs+='left : calc(50% - ((300% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_mobilecatagory', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_13.appendChild(me._rectangle_3);
		me.__52.appendChild(me._image_13);
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me._image_14);
		me.divSkin.appendChild(me.__52);
		el=me.__50=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0bc\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50.style.transition='';
				if (me.__50.ggCurrentLogicStateVisible == 0) {
					me.__50.style.visibility=(Number(me.__50.style.opacity)>0||!me.__50.style.opacity)?'inherit':'hidden';
					me.__50.ggVisible=true;
				}
				else if (me.__50.ggCurrentLogicStateVisible == 1) {
					me.__50.style.visibility=(Number(me.__50.style.opacity)>0||!me.__50.style.opacity)?'inherit':'hidden';
					me.__50.ggVisible=true;
				}
				else if (me.__50.ggCurrentLogicStateVisible == 2) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
			}
		}
		me.__50.logicBlock_visible();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
				else {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
			me.__6.ggVisible = !me.__6.ggVisible;
			var flag=me.__6.ggVisible;
			me.__6.style.transition='none';
			me.__6.style.visibility=((flag)&&(Number(me.__6.style.opacity)>0||!me.__6.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_mobilecatagory', false);
			player.setVariableValue('vis_hambegur', !player.getVariableValue('vis_hambegur'));
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAlxJREFUeF7tnFFOhEAQRGdOpp5MPZnrycYMShajMXSFgkp8/O2G7qm8R38As9sbRxSBHpWGMA0hYRcBQhASRiAsDhOCkDACYXGYEISEEQiLw4QgJIxAWBwmBCFhBMLiMCEICSMQFocJQUgYgbA4TAhCwgiExWFCkoWMMR5ba8+bjPMzx/EEbq2199m29/6ybb9MyBhjfrkVcXwEOv5F4HUV05ERc6Xceu9PU8iIifTPg/R5ICTnKkBIjoslCUIQEkYgLA4TgpAwAmFx1gl5a61xR369nOXmkDv160XMBPc79W2er7v2+dUDU2MzNZ9jrccUsf3MzxFs2MXGPH4XwbnKEOIiK/ZFiAjOVYYQF1mxL0JEcK4yhLjIin0RIoJzlS'+
			'HERVbsixARnKvsmxC2Abkw/+jLNqDTUGsLsQ1I42at+nz8zq4TK+RSc17hlnD5T0aIn3FpBYSUcPlPRoifcWkFhJRw+U9GiJ9xaQWElHD5T16F8GMdP+s9K7Avaw+lk85hX9ZJoH9bhn1ZF8IvL837kDIybwFCvHzL3RFSRuYtQIiXb7k7QsrIvAUI8fItd0dIGZm3ACFevuXubAMqIzukgG1Ah2D0NWEbkI+t3Jl/A5LRmQp5QWUCq7ZFiErOVIcQE1i1LUJUcqY6hJjAqm0RopIz1fFvQCawYlt2nYjgHGXsOnFQ3dmTXSc7QUWcxuP3CA33EAhBSBiBsDhMCELCCITFYUIQEkYgLA4TgpAwAmFxmBCEhBEIi8OEICSMQFgcJgQhYQTC4jAhCAkjEBaHCUFIGIGwOExImJAPQxO4ZXQMnVIAAAAASUVORK5CYII='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me._image_15);
		me.__50.appendChild(me.__51);
		me.divSkin.appendChild(me.__50);
		el=me.__38=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0bc\uc120 \uba54\ub274";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:360px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #212121;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px 10px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hambegur') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_4.style.transition='';
				if (me._rectangle_4.ggCurrentLogicStateVisible == 0) {
					me._rectangle_4.style.visibility="hidden";
					me._rectangle_4.ggVisible=false;
				}
				else {
					me._rectangle_4.style.visibility=(Number(me._rectangle_4.style.opacity)>0||!me._rectangle_4.style.opacity)?'inherit':'hidden';
					me._rectangle_4.ggVisible=true;
				}
			}
		}
		me._rectangle_4.logicBlock_visible();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		el.ggId="\uc124\uc815";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_90=document.createElement('div');
		els=me._text_90__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #1a6dff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_90.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc124\uc815", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_90.ggUpdateText();
		el.appendChild(els);
		me._text_90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_90.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._text_90);
		me._rectangle_4.appendChild(me.__49);
		el=me.__39=document.createElement('div');
		el.ggId="\uc0bc\uc120 \uba54\ub274 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='padding:0 10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 10";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc774\ub85c\uc2a4\ucf54\ud504", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._text_10.appendChild(me._image_16);
		me.__112.appendChild(me._text_10);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_5.style.transition='background-color 500ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_5.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me._rectangle_5.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._rectangle_5.logicBlock_backgroundcolor();
		me._rectangle_5.onclick=function (e) {
			player.setVariableValue('vis_circle', !player.getVariableValue('vis_circle'));
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_17.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._image_17.ggCurrentLogicStatePosition == 0) {
					me._image_17.style.left='20px';
					me._image_17.style.top='0px';
				}
				else {
					me._image_17.style.left='0px';
					me._image_17.style.top='0px';
				}
			}
		}
		me._image_17.logicBlock_position();
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._image_17);
		me.__112.appendChild(me._rectangle_5);
		me.__39.appendChild(me.__112);
		el=me.__213=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px; margin-left:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		els=me.__47__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120\uba54\ub274 \uae00";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__47.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__47.ggUpdateText();
		el.appendChild(els);
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		els=me.__48__img=document.createElement('img');
		els.className='ggskin ggskin__48';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc774\ubbf8\uc9c0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__48);
		me.__213.appendChild(me.__47);
		el=me.__214=document.createElement('div');
		el.ggId="\uc635\uc158 \ubc30\uacbd 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 9px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__214.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__214.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__214.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__214.style.transition='background-color 500ms ease 0ms';
				if (me.__214.ggCurrentLogicStateBackgroundColor == 0) {
					me.__214.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__214.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__214.logicBlock_backgroundcolor();
		me.__214.onclick=function (e) {
			player.setVariableValue('vis_circle2', !player.getVariableValue('vis_circle2'));
			player.toggleAutorotate();
		}
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		els=me.__111__img=document.createElement('img');
		els.className='ggskin ggskin__111';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158 \uc6d0 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__111.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__111.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__111.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__111.ggCurrentLogicStatePosition == 0) {
					me.__111.style.left='20px';
					me.__111.style.top='0px';
				}
				else {
					me.__111.style.left='0px';
					me.__111.style.top='0px';
				}
			}
		}
		me.__111.logicBlock_position();
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me.__111);
		me.__213.appendChild(me.__214);
		me.__39.appendChild(me.__213);
		el=me.__310=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : 10%;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		el=me.__313=document.createElement('div');
		els=me.__313__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120 \uba54\ub274\uae00 3";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__313.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__313.ggUpdateText();
		el.appendChild(els);
		me.__313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__313.ggUpdatePosition=function (useTransition) {
		}
		el=me.__314=document.createElement('div');
		els=me.__314__img=document.createElement('img');
		els.className='ggskin ggskin__314';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAupJREFUeF7tnP9N3EAQRmdJFaB0kQIS+oG0ANdCSD85ekFQRdjIkU5yiDH741vdd+d3f++Mx+951rf2yin4WRFIVtVQTCDE7CJACELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0yLkLufqe73OOrynim9W5ptg9/0j3VjUtFCPvkKvbnF1P+vkhyc9Xfa7yAp2FXOS4fvqZ9mqIynwIUdIU5EKIAKIyBUKUNAW5ECKAqEyBECVNQa5NCYkUuzmz0nXJ55v835pq1L+1bQlZuILX1ibTIjdy3L174Q9YbG5eyNra5EMhEaFebG5byAdX+DRVvab4tXZrQEjHjbN1pT'+
			'6/h/xOcTd/ToeQIwiZH/LtNIYQhNQROPeHi3RI3fWwOrr1HsKUJZQwT4WQQWBb0yKkldygOIQMAtuaFiGt5AbFIWQQ2Na0CGklNygOIYPAtqZFSCu5QXEIGQS2NS1CWsktx71M74NWUn5ZPZzo7d5JP8vKEfuU4rHXy8Vr7EveYS+9+z4cuyS+pM6TFjJtKijdSFACw2EMQhwszGpACEL6CPzzgoopqxrm2F0nCEFINYHKAO4hlcBGD0fIaMKV+RFSCaxm+OVt/rsr8VOOXenCESE1hCvGzsFOTxReHtJ1SThCSig1jJm647AlFCENANUhCFET7cyHkE6A6nCEqIl25kNIJ0B1OELURDvzIaQToDocIWqinfkQ0glQHY4QNdHOfAjpBKgOR4iaaGc+hHQCVIcjRE20Mx9COgGqwxGiJtqZb5NCVHt7O9kvh88+u1RT'+
			'59tvEvNpjSF22pPaC5lPBe2neTqR9kJKPvp1Orjfr/Qwzal398u3kp4D7GOeA0KOSX/h2AhBiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3L+AI6JuIP9nH5dAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc774\ubbf8\uc9c0 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__314.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__314.ggUpdatePosition=function (useTransition) {
		}
		me.__313.appendChild(me.__314);
		me.__310.appendChild(me.__313);
		el=me.__311=document.createElement('div');
		el.ggId="\uc635\uc158\ubc30\uacbd 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__311.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__311.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__311.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__311.style.transition='background-color 500ms ease 0ms';
				if (me.__311.ggCurrentLogicStateBackgroundColor == 0) {
					me.__311.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__311.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__311.logicBlock_backgroundcolor();
		me.__311.onclick=function (e) {
			player.setVariableValue('vis_circle3', !player.getVariableValue('vis_circle3'));
			me.__13.ggVisible = !me.__13.ggVisible;
			var flag=me.__13.ggVisible;
			me.__13.style.transition='none';
			me.__13.style.visibility=((flag)&&(Number(me.__13.style.opacity)>0||!me.__13.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilemenu', !player.getVariableValue('vis_mobilemenu'));
		}
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		el=me.__312=document.createElement('div');
		els=me.__312__img=document.createElement('img');
		els.className='ggskin ggskin__312';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158 \uc6d0 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__312.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle3') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__312.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__312.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__312.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__312.ggCurrentLogicStatePosition == 0) {
					me.__312.style.left='20px';
					me.__312.style.top='0px';
				}
				else {
					me.__312.style.left='0px';
					me.__312.style.top='0px';
				}
			}
		}
		me.__312.logicBlock_position();
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		me.__311.appendChild(me.__312);
		me.__310.appendChild(me.__311);
		me.__39.appendChild(me.__310);
		el=me.__41=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : 10%;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px; margin-left:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.onclick=function (e) {
			me.__43.style.transition='none';
			me.__43.style.visibility='hidden';
			me.__43.ggVisible=false;
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uc635\uc158 \ubc30\uacbd 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__45.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__45.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__45.style.transition='background-color 500ms ease 0ms';
				if (me.__45.ggCurrentLogicStateBackgroundColor == 0) {
					me.__45.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__45.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__45.logicBlock_backgroundcolor();
		me.__45.onclick=function (e) {
			player.setVariableValue('vis_circle4', !player.getVariableValue('vis_circle4'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__43.style.transition='none';
			me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
			me.__43.ggVisible=true;
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		els=me.__46__img=document.createElement('img');
		els.className='ggskin ggskin__46';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158 \uc6d0 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle4') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__46.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__46.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__46.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__46.ggCurrentLogicStatePosition == 0) {
					me.__46.style.left='20px';
					me.__46.style.top='0px';
				}
				else {
					me.__46.style.left='0px';
					me.__46.style.top='0px';
				}
			}
		}
		me.__46.logicBlock_position();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		me.__41.appendChild(me.__45);
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120\uba54\ub274 \uae00 4";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		els=me.__44__img=document.createElement('img');
		els.className='ggskin ggskin__44';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABPlJREFUeF7tnWtS3DAMgG16ijK9S+E+pVeAvULpfYC7dOgpSjoOhMluLOvlJIqt/cdgK7I+S/IrTgz+M2WBaEobVyY4EGOdwIG0BOTbj+Hm7SrcDEP4bqxdm6sTY3hJD716C89/fsdnqQJsD0kQ/sVwH0O4kT60i3oxnF5/xQduW1lArn8OD2EI99yHdF2eCYYExL1C16WGEJ6/DOFECWUokDFPxPCkU8lrj/llCLcYlCIQh1G/I2FQikC+3g1PnrzrQknh6+9jvIWkgkA8gdcFcSatkOhhIHfDsKJKtkTHcJrmD1hHnCfoVDbNwSRRBApdWSCYUrasqdQm01vB3An0bEloh0JXHkhH3vH6GLM2yBkZ6tXSwU/u2QtlpMKV/X'+
			'SX6qUEm4sSEDypzXKAF0C6ClchBMjIOTtAHiK2WSYEdg8kAHnhOhO2IY+S5JAUEnLyFkCkwneJObUe+jHKmsQVVyZmIzLtkpIDqQWwkhwHUsmQtcQ4kFqWrCTHgVQyZC0xDqSWJSvJUQNJAirp0o2Y0jqXGgg0Zu/GuoKGliaNDkRgUG0VB6K1YOX6DqSyQbXiHIjWgpXrOxChQdO6FHYiRCLagTCslhZSU/H50DSNfNKxUMmpw9yjHQgBCHlDiXnq0IEQjH9ZhLuZhJ2jwlRwDylYiAsjicLOUTkQzALA/yUwPkUpQpd7SAZIySjzkASV03iJA7kAQoUxVYPKQ4chMId1IDMLcWF8QskccJAmdwfyYVUpjFQ9d+LEPQSLBcLRFNbTcyA9h+wEg3uml6Jm1yFLE6ZKs3dpuBrDX+G9zKY3qNaCod0l7RKIZm2qWFcx'+
			'IcSG0dAqAO8oaQUFKXGXWyY3KoJkzMPE2jC6DFlk75gRSjlhCxhdApGsUaWhL3igunIU6C6HSICAIbEyjC49pNrrEyvA6BKIJIcsPGQlGF0CUYesFWF0B0TtHSvDaBLI/JK0s4PLMZxUV0VtAKM5IGoPgIZTG8FoCog6N2RgcO6t4q4WQOWbmIdoYYwTv6vzKwi1dyFKAR0eSA0YaxwJ7RKIFoZmZ09qcKzeYT1ECwNazsYMtvb/DwmkBozJsJrdvTXgHA4IpjD3cjAHouhW2LbrOFJi3BPsOWRFGGmkxJ4YbjjhozYdiwCXF2LusoWLecZ82MpZXrcWrg4xU+fAmHrhWCe9GlC6cNKgd5gHUgpB2InCrfbAqaGIWs50yILCT6swTHsI1FNahnE8IEjcP2qYmoczsyErG64KQFqAYdpDckCgiVwrMEwDoeaQlmCYBo'+
			'IZ+qjzDGz4azaHJMU5s+6zhhqd9GEwTHtIUo69NpUqHRiGeSCYgosed3AYWHvNvEGFXdG9x+kQSviRlDGdQy4bNF80HKNTDC97nQ6RGJtS51BAKA06ehkHYoygA+kJiMU9a2P2X6hTnHvV+MKOxW1Sy1CKbwhTgGCTN2z/wrJxttYNO29G+ijYOJlBPpvnXkJDK7Ej+Rt+Lc6iaWbll8KizCgRWIXIAiEJ/NBzuueWr3Z7NTifYYWijH+ceI9+Ifk4cdJTvFy+RyMP8kxs6uAfuN8YJDZKLQJJunLyycZtO9zjMBjvuZ7ww5bLCSK6LsLZTiABmayJTXS6tjrUeOYmGwuIg6F3OY5XzKWKgEwCplsW0t9pDE5Xt82SNTbYVEDaNOu+rXIg+9p/8XQH4kCMWcCYOv8B35vUsKKwQNoAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc774\ubbf8\uc9c0 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__44);
		el=me.__43=document.createElement('div');
		els=me.__43__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac \uc548\ub0b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px 3px 6px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__43.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__43.ggUpdateText();
		el.appendChild(els);
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__43.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__43);
		me.__41.appendChild(me.__42);
		me.__39.appendChild(me.__41);
		me._rectangle_4.appendChild(me.__39);
		me.__38.appendChild(me._rectangle_4);
		me.divSkin.appendChild(me.__38);
		el=me.__34=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.left='10px';
					me.__34.style.top='30px';
				}
				else {
					me.__34.style.left='10px';
					me.__34.style.top='177px';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else if (me.__34.ggCurrentLogicStateVisible == 1) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else if (me.__34.ggCurrentLogicStateVisible == 2) {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
				else {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uba54\ub274 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.onclick=function (e) {
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_hambegur', false);
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._location=document.createElement('div');
		els=me._location__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Location";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._location.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Location<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location.ggUpdateText();
		el.appendChild(els);
		me._location.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._location);
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 96.9388%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__37.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		player.addListener('changenode', function() {
			me.__37.ggUpdateText();
		});
		el.appendChild(els);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me.__37);
		me.__35.appendChild(me._container_4);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		player.addListener('changenode', function() {
			me.__36.ggUpdateText();
		});
		el.appendChild(els);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me.__36);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABUlJREFUeF7tnTvoHUUYxc9J1ESITwQjvkFIFwI2iqgEksoinWAp+AAVCxFCsBREtAghwRdobSnBUkVTqIUgdmKlAUUUX/GBMZgjY/av93//9+58s3fu7uzOt+2e/Wbm/ObbuTO7O5fwoygHWFRtvDJwIIV1AgfiQApzoLDqeIY4kMIcKKw6niE9AZEkklG/o4Ke6jvZYiT9AuDy0EAHMiBmSZcC+GO2Cg5kICDh9rSoaAfSMxBJdwM4taxYB9IjkGVZ4besHiGEoiSdAPC4pVjPEItLK2gsWeEZsoLB1kslnQZwo1W/ofMMSXUsope0A8CfHcOGieG22LU+MYw51JyX9BeAi43yRbJzJC+JXe9A4lmxB8DnMSMN58+QvCKmcy'+
			'AtDqUO2hGzPyZ5pwOJObDgvKQnARzrcGnbJS+QPByL6Rky51DmrJiN/gDJNx1IzIH/B+0PANxjlHeR7SH5RexCz5ALs+2Fi4Ex8xLP7yAZfqm1HlUDkfQjgKtiJuU4b5kUhnKqBCLpSgA/5TDaGsOBLHFK0vkhOqID2frr6T4Ab1t7dG6dA5lxtKdBu32wNrzgMPkxRNJbAA7l7u1d4lWdIeGNGwBhrCjmqBaIpB8AXF0MiaYi1QFZ8VnF2vlVBaSEQTtGtAogku4F8H7MjBLOTx7IGLJitiNMFoik1wA8XEKvT6jDdySvtehHtZY1tqyYAfAOyYOTASLpWwCmHmZp9ACaoySfspRbdIZIugjAOUtDCtccInnSUsdigQy1KmsxrYPmOpIhy6NHcUAk7QPwabTm4xJsJ2layikKyIgH7Vj32EbS9Ji4CCCSXgTwdKxV'+
			'Yz1vnYOE9g0OZMJZ8V//GQUQSd8DuGasvT6l3kUDKX1VNsVoq7ZYIJL+BhB9Jd/a0LHoigMiKdcb5GNhsKmeRQGpYdCO9ZIigEh6AsDxWGVrOD84EM+Kzd1sMCCS3gOwv4Zen9LG3oGU+NpNimFr1p4ludNaxsoz9VJfu7Ea0IPuS5K3WsvpDETSZQDOWAuqWGd+Wth5LavWCV7HTvU8ySPWa5MyRNIdAD6yBnfdvw4cIPmu1QszEP8pa7V0i+56kt9Yr44CkfQGgAetAV23xYFdJH+3+tIKxLPCamOrzvy0cOmg3nW3myzVn1iQlEnhFiATeu2mGKwrAZlvhaTtAO4H8DKA6MYpxbhQUEWyArG2qwEX9gZ5rITn9NZ696EbBIi1YZJuA/ASgPAZQXTvKGvcknVFA7EaJ+kuAM9OYeV4EkAs4JofIHsBhC9tk/c/tJ'+
			'SRQ1MNkGVmDbFtRhu46oFsmFPKpNaBzHTXAqCYdiKdzbDoWlaO++iQMSSFDSzDa0hDHL+RDM+NzMfkgQQnJO0C8KvZlXzC0yRvTglXBZABx5Wkp4WhnlUBabLF9J1GSq9u0T5D8rmUWNUBaaB8CCC6h26KkUu0+0kmbWxQJZAGSh8flN5C8qsUsNUC6Wlc2UnyrANJcWCN28SmTgqrHNSXsZL0KoBHElm2yh1IBjdzzu4dSAYgOX8aO5BMQHJBcSAZgTRQHgXwStewDqSrc5Hruo4rDmRNQLrewhzIGoE0UJI+63YgawbSQLkdwCeWohyIxaVMGsO4cp5keNEw6ah+LSvJrTlxBErSt4UboR3IKkQurIOFP4YJfxAzf3xN8obU8A4k1bEFekk3AZhfZj9JMvmfGRxIBiAbIeZuYQ+RfD01vANJdcw+idxH8rPU8A4k'+
			'1TGDvvngaS/Jnw3yTRIHkuqYUS9pt3Vr2NmQDsRocF8yB9KX08ZyHIjRqL5kDqQvp43l/APOeYp0rt1mtgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._image_11);
		me.__35.appendChild(me._container_5);
		me.__34.appendChild(me.__35);
		me.divSkin.appendChild(me.__34);
		el=me.__13=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='';
				if (me.__13.ggCurrentLogicStateVisible == 0) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else if (me.__13.ggCurrentLogicStateVisible == 1) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else if (me.__13.ggCurrentLogicStateVisible == 2) {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
				else {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
			}
		}
		me.__13.logicBlock_visible();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style.transition='';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
				else {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
			}
		}
		me.__14.logicBlock_visible();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._c=document.createElement('div');
		els=me._c__img=document.createElement('img');
		els.className='ggskin ggskin_c';
		hs=basePath + 'images/c.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615C";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._c.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._c.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._c.style.transition='';
				if (me._c.ggCurrentLogicStateVisible == 0) {
					me._c.style.visibility=(Number(me._c.style.opacity)>0||!me._c.style.opacity)?'inherit':'hidden';
					me._c.ggVisible=true;
				}
				else {
					me._c.style.visibility="hidden";
					me._c.ggVisible=false;
				}
			}
		}
		me._c.logicBlock_visible();
		me._c.ggUpdatePosition=function (useTransition) {
		}
		el=me._c5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._c5.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c5);
		el=me._c40=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uce68\uc2e44";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c40.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c40.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._c40.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c40);
		el=me._c30=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c30.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c30.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._c30.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c30);
		el=me._c20=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c20.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._c20.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c20);
		el=me._c4=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c4.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._c4.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c4);
		el=me.__110=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc8fc\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__110.onclick=function (e) {
			player.openNext('{node13}');
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me.__110);
		el=me._c3=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 53px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c3.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._c3.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c3);
		el=me._c11=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uac70\uc2e41-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c11.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._c11.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c11);
		el=me._c2=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c2.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._c2.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c2);
		el=me._c1=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c1.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._c1.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c1);
		el=me._c0=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="C-\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._c0.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._c0.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._c0);
		el=me.__33=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc0e4\uc6cc\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__33.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 69px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__32.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me.__32);
		el=me.__212=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\ubcf5\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__212.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__212.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me.__212);
		me.__14.appendChild(me._c);
		el=me._b=document.createElement('div');
		els=me._b__img=document.createElement('img');
		els.className='ggskin ggskin_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5f0\ub9bd\ud615B";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72% + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._b.style.transition='';
				if (me._b.ggCurrentLogicStateVisible == 0) {
					me._b.style.visibility=(Number(me._b.style.opacity)>0||!me._b.style.opacity)?'inherit':'hidden';
					me._b.ggVisible=true;
				}
				else {
					me._b.style.visibility="hidden";
					me._b.ggVisible=false;
				}
			}
		}
		me._b.logicBlock_visible();
		me._b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__211.onclick=function (e) {
			player.openNext('{node12}');
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__211);
		el=me.__210=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uce68\uc2e42\ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__210.onclick=function (e) {
			player.openNext('{node15}');
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__210);
		el=me.__29=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uce68\uc2e42\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__29.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__28.onclick=function (e) {
			player.openNext('{node19}');
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__28);
		el=me.__40=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uce68\uc2e44";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__40.onclick=function (e) {
			player.openNext('{node17}');
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__40);
		el=me.__27=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__27.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 68px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__26.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc8fc\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__25.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__24.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc548\ubc29\ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__23.onclick=function (e) {
			player.openNext('{node18}');
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__23);
		el=me.__19=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__19.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__18.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__18);
		el=me.__17=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uc548\ubc291";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__17.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__16.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__16);
		el=me.__22=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uac70\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__22.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__22);
		el=me.__31=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__31.onclick=function (e) {
			player.openNext('{node16}');
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__31);
		el=me.__15=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubaa8-\uacf5\uc6a9\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__15.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me.__15);
		me.__14.appendChild(me._b);
		me.__13.appendChild(me.__14);
		me.divSkin.appendChild(me.__13);
		el=me.__10=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else if (me.__10.ggCurrentLogicStateVisible == 1) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else if (me.__10.ggCurrentLogicStateVisible == 2) {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
				else {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA+NJREFUeF7tneF2pCAMheHJtn2y3T5Z2ydjT2bEOipOuJIM2Dv/2hMSvJ8BBMQY+OtKgdhVbViZ4AYkpfQvhPAnhPD2y3X/CiF8xxhFj83PHEhKSQB8/nIIpcv/WIMxBTJlxV/COFTgAYo1kEQYKgXeY4zSlNn1IcwOFYhs9BVjfCeQKs1MjV2ASEdeGlF9mF5ev86Lo8wY4637MOtDUkolIPPd0K9uNjU7asYJxEbzQ68E8gLRj0ISCIH8KHDFPmSadTia+rk/S0zPFOv7gRnSMEMqn6s2UyJSFQJpBASZj8ujpmUVCKQdkKNnKvXEIYG0AyJT5bWTpJtmi0AI5LqjrMpOXYRghjRKiF03QMdOIFZAABjMkM5gEIgFEDAzcl'+
			'XmVcD8D46yTlA6CUMiE8gJ/R+KVsCQZVeZ21o/o+yu+TBDAEI1MPIk4lQmQynuuSKQSiAIjJoQBFKj1n02VjNntekbtGEIRKvUHYZmhyUMg9PvFTAmsZ4BOQWDQCqBTIKVdlqehkEgGJC9afYmMAgEALJ4opbm6630ygDqmp06qpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxRORjIauNXTweOHR7+ZaRjM7cQEODFlGYVrnS0+6ZrpQ9X82ogA8HIQg4FBQEy4oFjzXaFWKdLFZABsyPrN8zpQrVANPtarW8ixP9lgZSaq9v5HcDv6ZkglT6L/vZOTaj07WJemyElIFDH2frwmaOd6QSiuJ8I'+
			'ZCsSM0Rx43iaEIin2opYBKIQydOEQDzVVsQiEIVIniYE4qm2IhaBKETyNCEQT7UVsQhEIZKnCYF4qq2IRSAKkTxNegUiGiAzyK1njz1ZLGPtXsfm6wgpJa/Z3lcJ0XPc7QddDIA8O6qiZ4G86zYvccwfdGkNRK5IebqO98V3F2+5nmMNhFnyHP/+Z/MsMmTKknwEXk8b7p7LZG8hAxuB8TDAMc2Q5TVNQz75l3wYC/ldZZQl174BkQVxA4IQWAEt7ooZZU1dowGBaFRytCEQR7E1oQhEo5KjDYE4iq0JRSAalRxtCMRRbE0oAtGo5GhDII5ia0IRiEYlRxsCcRRbE4pANCo52hCIo9iaUBogt3fDNc6MbYpf2rzq5CLfMTS+ozTulxkyKhDolTuNOK+wWQIZcrn1Ss2V3AAzEPljwHfVL5UdGyCDQbkcjF0gud2csk'+
			'XWv3vanJA3BBTXpF/R7reM+dBktXRMX5gCBILpZlbqP1cAF6HWbcH8AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \uc804\uccb4\ud654\uba74 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__12);
		me.__10.appendChild(me.__11);
		me.divSkin.appendChild(me.__10);
		el=me.__8=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 160px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__8.style.transition='';
				if (me.__8.ggCurrentLogicStateVisible == 0) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 1) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 2) {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
				else {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
			}
		}
		me.__8.logicBlock_visible();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20.style.transition='';
				if (me.__20.ggCurrentLogicStateVisible == 0) {
					me.__20.style.visibility="hidden";
					me.__20.ggVisible=false;
				}
				else {
					me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
					me.__20.ggVisible=true;
				}
			}
		}
		me.__20.logicBlock_visible();
		me.__20.onclick=function (e) {
			me.__9.ggVisible = !me.__9.ggVisible;
			var flag=me.__9.ggVisible;
			me.__9.style.transition='none';
			me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
			me.__21.ggVisible = !me.__21.ggVisible;
			var flag=me.__21.ggVisible;
			me.__21.style.transition='none';
			me.__21.style.visibility=((flag)&&(Number(me.__21.style.opacity)>0||!me.__21.style.opacity))?'inherit':'hidden';
			player.toggleMuted("_main");
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNlJREFUeF7tnGF2ozAMhOFk255styfb7sm8zy3pI2AJSR4HkUx/u8KZzyNZNsk88S+VAnOq2XAyE4EkWwQEQiDJFEg2HTqEQJIpkGw6dAiBJFMg2XToEAJJpkCy6dAhBJJMgWTToUMIJJkCyaZDhxBIMgWSTYcOIZBkCiSbDh1CIMkUSDYdOoRAkimQbDp0iAFIKeXPNE2f8zx/GoZ3DSGQA/lKKWU1pEJ571L84J8vD2Tk6l1i/95oOBTKZYGUUt6mafp7E2ueZ/hnEYDUR37M81zTGPwP/iHgM2wEbAk1CMgd9M1UhkC5FJDFFTWFVKHu/kYAqQ9QXDLEKZcBciDMNArIAqWmxt0iWFbEO3L3lR6I5oq1RUYCWaCsd1vrR0'+
			'NTV2ogR65AAVmeU10mFurtJmJUPUkLxAOjihN1yKbPUOuCNqfo83e18BG7Is8zvCB6tr3KqhfrwuitcCqHRGFEHaI8T2z+tNSFcEkKID0gehwSLdYjXXI6EASMqEN6+oxG7flaG70uOQ0ICkSvQ46gSAIr8+/qS04BgoaBWJmRNCS4pKsv6QKyfIhfyi7q33ZvX0rRul7Phsx0dLIU4dpl1yOXep9RBWvea3jTkPBZuk6Dw0CkyW8U3U3uBCCtBdBMK16XSON76kgIyEHXumZyKhBlntq2tnVE0hyvxA+nrSiQesSwvbhppZtTgRwcDDZF8656dB15BSDi4mmlFu+q9wI8KpJPD+RgWyu5xJO2msCjdeQlgGgdueASs8iSowjk4E7d08h50lDkgFJLW6/kEOl+fJe2PCJ7xh7Vj68G1zJoO8bRaZ++y1rP3boj8ops'+
			'jWvR+tWAtJpEqcdoFXapoWyNDfUiBPL9iujubURh1ROIxebWw0VragGlrNCp78s4xNPweYB4xloW1ysBkTr23Ur29BYEIiwzrRHz3oNLJ9KeoxY2hkpjqBz5SwXdsxszd/VMWd/v5movTJvT1TRN0g6reeFGhwgOUdwhHSxKN5qeLW/41vDpi7qw1R19QRXa8oaPTg7eZ0pzY6gcvaOucF1uGlZDlg96e3FAek2/Djv9LGvz9vyH9OVN705MuY0Mp6suh1hot8ZYv17gjR8torfnBGqN+fTY81lCNcTzAGms48TY9LgeIJG32hWA4fpxikM2x+GWtDcUSOQra5G3WUwfInofYg1uHYdwS9Qhyvtl2k5MKuahI/e1TqelrMalV5dbIkAiKz3yP9aFeXrKEoq+9Z2vu38PAjEfOBqKf1ftuMVP45De2hIBIvRTkW9PdW'+
			'11U6asXrdEgax6qreOL31C3JEyZUVrSw8QS46PFH9L3O2YlCkr4paRQA7e2Ie54xIOadSWnx+cucu9A358Zkln2iaje5t7WYdswOz6gBEOedSPBVymqGs5+EE/zyQ1gLBd1VM4pOGW3VfnIgW1saFopathMC5XQxAie2M0Cjq0iD+dQ7wCR8bfvjg66lfknqKGRIS9wv9cpg+5gpiIORIIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMb4D+eAW5J5Vh+GAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__9);
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAwtJREFUeF7tnG1yhCAQROFm2ZMlOVn2ZqSowi3zwTKDQ6qjzz/5M2CnHw2KujlxSDmQpdQgJgFEbBAABCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCACLmgJgcEgIQMQfE5JAQgIg5ICaHhABEzAExOSQEIGIOiMkhIQARc0BMDgkBiJgDYnJOl5BSyltK6Z5zvot5bZJzGiCllJeU0mtKqf6tx+0/QjkFkJaKCmN/AMSUycCiX1IBkEB/XV11UgEQl4tBxaWUj91a0euVKSvI7243hlSQkNUQtv6dMLjKWgVmAsQmhSkrGsoBGCQkEsZBECREEAYJOQolKBVcZR0FUdsvgEFCrMbmnL/sny2CARDj3XNSAvJtMLznnO'+
			'vW/fCYbTfsOKWYz6LbJl/dzhgeKkA6yRxCmW03NKYVhGy/e6YdISClY1IXyuD/DLkRvSQQQ6J/QDEMOoAMpoGnBhkMfkDx1Fqnpl7dJRPi2LB8b7Xfn0bu/RyuOx5IlwZivVR/YmgojHqeywM5ACUcBkB2Q9+wTiybpvYdkxA/lCXJ2GQABCCae1lMWW1kOo3wXEGab9QmNSyZui4/ZU3C2AZGOJRLAzHA4MbQMyexddJxwDDSHi3/wW5v1crmYmAytq66i/pgt3d2+z1kPYlaQ+o3GTygChhVIUDafpDlBWge4Q6ghQHZQXl6ypzzbV/gWX+cA9B0HzL7CVyb9uoAC/10LhSI07BH+SIoJiCzmle1kwDS0mVeh4xmAMRo1NMy6+tEhnMBxGCSqcTwEoKlH4BYXPLUHEwLQDxmW2sPLPgAsZrsrRt8/tzrDiBeo731'+
			'zrQAxGvwTL0jLQCZMXi2jSEtAJk1d7YdP60x69zidvz4zGKDZ7rn55lmXPuDNg3Mi/VrqD+Q5DqFzOaiS/WJiwEiBhcgABFzQEwOCQGImANickgIQMQcEJNDQgAi5oCYHBICEDEHxOSQEICIOSAmh4QARMwBMTkkBCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCxIB8AvU38nQiVY9jAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545 \uc544\uc774\ucf58 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__8.appendChild(me.__20);
		me.divSkin.appendChild(me.__8);
		el=me.__5=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uacf5\uc720";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else if (me.__5.ggCurrentLogicStateVisible == 1) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else if (me.__5.ggCurrentLogicStateVisible == 2) {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
				else {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin__7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABJlJREFUeF7tnQly3SAMQPHJ2pyszcnanIyOiHExq8DCCJBnMpOfj4mthxaEsA8lBysJHKyuhvnFaK1/KqXgB44fzu/w+e/59y/4/TgO+7nqrgQIQlxa699KqV+Ipm4TAPJZC0aAZKTcCCLW4wcWjABJANFa//FMUqWCBM3BjH2UOhEgnoROPwEwehxFKAIkBEKtGT7YLBQB4oirg5lKaRk4ewgUgkOAnCIhdOBYUxeFIkD+A+ltqkJtOI5A/gJEKdXZkec0JtASAfIN5HXtOCkJkNhw1VprrOGnbnd4Zmt7DRlorgxbAfLuRBCjULe0imjIdwa318xcgGAk4LYZbbKUUqIhPjRx6rXDuHP7gWFvkNfa3ocA6wFpEzvEgnWS7Y'+
			'EMhBGEvCYM7mwN2HY/EkRqlr4lkBME3HvtGjnl4EquiWylIQy0Iuk77BdbAGEEAuSeLXhYGggzEEUYy/oQIhCfkWK4Vj+SXLL1O1xKQwhBQEhq1rzP1AoEALZisQYKQL36wpy4BBAiECCv5Eh2wEC7HByoWPxKFTGUoEwN5ATh19iW7jn2Pdqk2JNPQFdf2MrE0sVNCYRwLlENoiTQp99PB4TIPLEDMd08ZHUQ0wDZBQR7IFQgnmyeeeoPWs5n50MIQVTF/y3C63FOMxA/7LtUrnErFxGI7FyihwCp+0QDcfbXYdLW6O1cI+cS1MKk6K8IhCDmj+b+Cfq19882hG0BlAVCaEbg2q60M1G/S4HIRlkPE2q5gQGmrCVJ5/a5JIgkEAaFYymgS4PIARlVmp8EMdtcosV3RIEMLBiLZmDhj61p7CdCGXnu5dSZmaotzFMM'+
			'vAuEg6naFsTNZDHQju1B+EBaHq5CZWrRzwGh+oec+zEma7AzF+1wRogFMmzTY66wgPNI7nVtAqSXZBv7FSCNgut1GgcfIk494kMkyuo15Cv7tRoyEgh6Mavy3qZs7s7UR0ZaIDwB425pI1o0ohiVW4O5rRiO3K8dIbklGB/ISF+S0q6twARr6oxMlw9oCzDRIgfGUJZ3/smqkw5QTBKRsIBiSY3B1GVRLFwFGV1CMEtli4tAzvS8Ld2p2WuH2tolYO6uEgXEPcWp6QVIsJ3MPZpf1SBgvsVYDYRi5pfrg3A5eUpTxg6IhUUYVEwFhi0QYjDTRGTsgewGZhogu4CZDogThteE4NPkyaYE4mgLhN5DwCA2HNm3tFW9GGxqIG+DeRD5oeEsAeQNMA9g+OYyG4YvBaQTGMg+YDa61syZ93zmImE6pkbY2LZRKEtqiC8Rxm'+
			'D2frI1UzA3n7KFhkygMReULYF0cP5Yv5FqJ0AiazwUE8xmMPbVR1trSMSUjSyDMloiQBwqhItjLZpiIi4BwgeIeX2FALkDGWmyBAgzHyJABEiLq3vxHHHqLwob+68Gbskwey3FqXukCNc9sGPAthMgMYkNAnJlfUVDIlQGQLm2hguQhGF50ZdI+h1j3F+KuIL1ddGQDJ3OUKLFDgKkoC6dVhmTlScCBGO/6F5gXNzEJECQQKDZA20pgrCXIUAqgERWGe0uMv9p3QYAtK99zK0AaQTS67R/CENFg5QtN4wAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \uacf5\uc720 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__7);
		me.__5.appendChild(me.__30);
		me.divSkin.appendChild(me.__5);
		el=me.__0=document.createElement('div');
		el.ggId="\uc624\ud504\ub2dd \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\ucee4\ubc84";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 500%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc624\ud504\ub2dd \uba58\ud2b8";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) - 10%);';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 58px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc644\ub3d9 \ub514\ud504\ub9ac\ub9c8 \ud0c0\uc6b4\ud558\uc6b0\uc2a4 \n\uc0ac\uc774\ubc84 \ubaa8\ub378\ud558\uc6b0\uc2a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
				else {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a6dff;';
		hs+='border : 0px solid #fafafa;';
		hs+='border-radius : 10px;';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_8.onclick=function (e) {
			player.openNext("{node42}","");
		}
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_88=document.createElement('div');
		els=me._text_88__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 88";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_88.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc785\uc7a5\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_88.ggUpdateText();
		el.appendChild(els);
		me._text_88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_88.onclick=function (e) {
			me.__0.style.transition='none';
			me.__0.style.visibility='hidden';
			me.__0.ggVisible=false;
		}
		me._text_88.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_8.appendChild(me._text_88);
		me.__3.appendChild(me._rectangle_8);
		el=me._pc_=document.createElement('div');
		els=me._pc___img=document.createElement('img');
		els.className='ggskin ggskin_pc_';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PC \ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 76px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._pc_);
		me.__0.appendChild(me.__3);
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \uc624\ud504\ub2dd \uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc218\uc644\ub3d9 \ub514\ud504\ub9ac\ub9c8 \ud0c0\uc6b4\ud558\uc6b0\uc2a4 \n\uc0ac\uc774\ubc84 \ubaa8\ub378\ud558\uc6b0\uc2a4 \n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		el.appendChild(els);
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc624\ud504\ub2dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a6dff;';
		hs+='border : 0px solid #fafafa;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.onclick=function (e) {
			player.openNext("{node42}","");
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="text 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-size:1em; font-weight:600; letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc785\uc7a5\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.onclick=function (e) {
			me.__0.style.transition='none';
			me.__0.style.visibility='hidden';
			me.__0.ggVisible=false;
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._text_9);
		me.__1.appendChild(me.__2);
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_19.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._image_19);
		me.__0.appendChild(me.__1);
		me.divSkin.appendChild(me.__0);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20%;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 4.69%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shawdow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.right='3%';
					me.__.style.bottom='25%';
				}
				else {
					me.__.style.right='4.69%';
					me.__.style.bottom='20%';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='95%';
					me.__.style.height='100%';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 1) {
					me.__.style.width='95%';
					me.__.style.height='100%';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='100%';
					me.__.style.height='50%';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.onmousedown=function (e) {
			me.elementMouseDown['_']=true;
		}
		me.__.onmouseup=function (e) {
			me.elementMouseDown['_']=false;
		}
		me.__.onmouseout=function (e) {
			me.elementMouseDown['_']=false;
		}
		me.__.ggCurrentLogicStatePosition = -1;
		me.__.ggCurrentLogicStateSize = -1;
		me.__.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['_']) {
				me.__.ggVisible = !me.__.ggVisible;
				var flag=me.__.ggVisible;
				me.__.style.transition='none';
				me.__.style.visibility=((flag)&&(Number(me.__.style.opacity)>0||!me.__.style.opacity))?'inherit':'hidden';
			}
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		els=me.__6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b86";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -19%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__6.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucee8\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ub41c \uc138\ub300 VR\uc774\uba70, \n\ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6.ggUpdateText();
		el.appendChild(els);
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.right='0%';
					me.__6.style.bottom='-23%';
				}
				else if (me.__6.ggCurrentLogicStatePosition == 1) {
					me.__6.style.right='0%';
					me.__6.style.bottom='-23%';
				}
				else {
					me.__6.style.right='0%';
					me.__6.style.bottom='-19%';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6__text.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6__text.style.width='100%';
					me.__6__text.style.height='25%';
					skin.updateSize(me.__6);
				}
				else {
					me.__6__text.style.width='calc(100% + 2px)';
					me.__6__text.style.height='auto';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else if (me.__6.ggCurrentLogicStateVisible == 1) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__6__text.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__6.ggCurrentLogicStateTextColor == 0) {
					me.__6.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__6.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__6.logicBlock_textcolor();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__6);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -18%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucee8\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ub41c \uc138\ub300 VR\uc774\uba70, \n\ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__pc.ggUpdateText();
		el.appendChild(els);
		me.__pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__pc.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__pc.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__pc.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStatePosition == 0) {
					me.__pc.style.right='0%';
					me.__pc.style.bottom='-30%';
				}
				else {
					me.__pc.style.right='0%';
					me.__pc.style.bottom='-18%';
				}
			}
		}
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__pc.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__pc.ggCurrentLogicStateSize = newLogicStateSize;
				me.__pc__text.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateSize == 0) {
					me.__pc__text.style.width='100%';
					me.__pc__text.style.height='25%';
					skin.updateSize(me.__pc);
				}
				else {
					me.__pc__text.style.width='calc(100% + 2px)';
					me.__pc__text.style.height='auto';
					skin.updateSize(me.__pc);
				}
			}
		}
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else if (me.__pc.ggCurrentLogicStateVisible == 1) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__pc.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__pc.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__pc__text.style.transition='right 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateTextColor == 0) {
					me.__pc.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__pc.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__pc.logicBlock_textcolor();
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__pc);
		me.divSkin.appendChild(me.__);
		me.__90.logicBlock_visible();
		me.__221.logicBlock_backgroundcolor();
		me._image_2.logicBlock_alpha();
		me.__317.logicBlock_backgroundcolor();
		me._image_3.logicBlock_alpha();
		me._image_31.logicBlock_alpha();
		me.__412.logicBlock_backgroundcolor();
		me._image_4.logicBlock_alpha();
		me.__115.logicBlock_backgroundcolor();
		me._image_1.logicBlock_alpha();
		me.__86.logicBlock_position();
		me.__86.logicBlock_visible();
		me.__69.logicBlock_visible();
		me._cpc.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c41);
		me._c41__normal = clonedNormalElement._map_pin;
		me._c41__normalInst = clonedNormalElement;
		me._c41__normal.style.visibility='inherit';
		me._c41__normal.style.left='-12px';
		me._c41__normal.style.top='-41px';
		me._c41.ggMarkerNormal=me._c41__normal;
		me._c41.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c41);
		me._c41__active = clonedActiveElement._map_pin;
		me._c41__activeInst = clonedActiveElement;
		me._c41__active.style.visibility='hidden';
		me._c41__active.style.left='-12px';
		me._c41__active.style.top='-41px';
		me._c41.ggMarkerActive=me._c41__active;
		me._c41.ggMarkerInstances.push(clonedActiveElement);
		if (me._c41.firstChild) {
			me._c41.insertBefore(me._c41__active,me._c41.firstChild);
		} else {
			me._c41.appendChild(me._c41__active);
		}
		if (me._c41.firstChild) {
			me._c41.insertBefore(me._c41__normal,me._c41.firstChild);
		} else {
			me._c41.appendChild(me._c41__normal);
		}
		for (var i = 0; i < me._c41.childNodes.length; i++) {
			me._c41.ggMarkerInstances.push(me._c41.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c31);
		me._c31__normal = clonedNormalElement._map_pin;
		me._c31__normalInst = clonedNormalElement;
		me._c31__normal.style.visibility='inherit';
		me._c31__normal.style.left='-12px';
		me._c31__normal.style.top='-41px';
		me._c31.ggMarkerNormal=me._c31__normal;
		me._c31.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c31);
		me._c31__active = clonedActiveElement._map_pin;
		me._c31__activeInst = clonedActiveElement;
		me._c31__active.style.visibility='hidden';
		me._c31__active.style.left='-12px';
		me._c31__active.style.top='-41px';
		me._c31.ggMarkerActive=me._c31__active;
		me._c31.ggMarkerInstances.push(clonedActiveElement);
		if (me._c31.firstChild) {
			me._c31.insertBefore(me._c31__active,me._c31.firstChild);
		} else {
			me._c31.appendChild(me._c31__active);
		}
		if (me._c31.firstChild) {
			me._c31.insertBefore(me._c31__normal,me._c31.firstChild);
		} else {
			me._c31.appendChild(me._c31__normal);
		}
		for (var i = 0; i < me._c31.childNodes.length; i++) {
			me._c31.ggMarkerInstances.push(me._c31.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c22);
		me._c22__normal = clonedNormalElement._map_pin;
		me._c22__normalInst = clonedNormalElement;
		me._c22__normal.style.visibility='inherit';
		me._c22__normal.style.left='-12px';
		me._c22__normal.style.top='-41px';
		me._c22.ggMarkerNormal=me._c22__normal;
		me._c22.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c22);
		me._c22__active = clonedActiveElement._map_pin;
		me._c22__activeInst = clonedActiveElement;
		me._c22__active.style.visibility='hidden';
		me._c22__active.style.left='-12px';
		me._c22__active.style.top='-41px';
		me._c22.ggMarkerActive=me._c22__active;
		me._c22.ggMarkerInstances.push(clonedActiveElement);
		if (me._c22.firstChild) {
			me._c22.insertBefore(me._c22__active,me._c22.firstChild);
		} else {
			me._c22.appendChild(me._c22__active);
		}
		if (me._c22.firstChild) {
			me._c22.insertBefore(me._c22__normal,me._c22.firstChild);
		} else {
			me._c22.appendChild(me._c22__normal);
		}
		for (var i = 0; i < me._c22.childNodes.length; i++) {
			me._c22.ggMarkerInstances.push(me._c22.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c2_);
		me._c2___normal = clonedNormalElement._map_pin;
		me._c2___normalInst = clonedNormalElement;
		me._c2___normal.style.visibility='inherit';
		me._c2___normal.style.left='-12px';
		me._c2___normal.style.top='-41px';
		me._c2_.ggMarkerNormal=me._c2___normal;
		me._c2_.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c2_);
		me._c2___active = clonedActiveElement._map_pin;
		me._c2___activeInst = clonedActiveElement;
		me._c2___active.style.visibility='hidden';
		me._c2___active.style.left='-12px';
		me._c2___active.style.top='-41px';
		me._c2_.ggMarkerActive=me._c2___active;
		me._c2_.ggMarkerInstances.push(clonedActiveElement);
		if (me._c2_.firstChild) {
			me._c2_.insertBefore(me._c2___active,me._c2_.firstChild);
		} else {
			me._c2_.appendChild(me._c2___active);
		}
		if (me._c2_.firstChild) {
			me._c2_.insertBefore(me._c2___normal,me._c2_.firstChild);
		} else {
			me._c2_.appendChild(me._c2___normal);
		}
		for (var i = 0; i < me._c2_.childNodes.length; i++) {
			me._c2_.ggMarkerInstances.push(me._c2_.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c17);
		me._c17__normal = clonedNormalElement._map_pin;
		me._c17__normalInst = clonedNormalElement;
		me._c17__normal.style.visibility='inherit';
		me._c17__normal.style.left='-12px';
		me._c17__normal.style.top='-41px';
		me._c17.ggMarkerNormal=me._c17__normal;
		me._c17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c17);
		me._c17__active = clonedActiveElement._map_pin;
		me._c17__activeInst = clonedActiveElement;
		me._c17__active.style.visibility='hidden';
		me._c17__active.style.left='-12px';
		me._c17__active.style.top='-41px';
		me._c17.ggMarkerActive=me._c17__active;
		me._c17.ggMarkerInstances.push(clonedActiveElement);
		if (me._c17.firstChild) {
			me._c17.insertBefore(me._c17__active,me._c17.firstChild);
		} else {
			me._c17.appendChild(me._c17__active);
		}
		if (me._c17.firstChild) {
			me._c17.insertBefore(me._c17__normal,me._c17.firstChild);
		} else {
			me._c17.appendChild(me._c17__normal);
		}
		for (var i = 0; i < me._c17.childNodes.length; i++) {
			me._c17.ggMarkerInstances.push(me._c17.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c16);
		me._c16__normal = clonedNormalElement._map_pin;
		me._c16__normalInst = clonedNormalElement;
		me._c16__normal.style.visibility='inherit';
		me._c16__normal.style.left='-12px';
		me._c16__normal.style.top='-41px';
		me._c16.ggMarkerNormal=me._c16__normal;
		me._c16.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c16);
		me._c16__active = clonedActiveElement._map_pin;
		me._c16__activeInst = clonedActiveElement;
		me._c16__active.style.visibility='hidden';
		me._c16__active.style.left='-12px';
		me._c16__active.style.top='-41px';
		me._c16.ggMarkerActive=me._c16__active;
		me._c16.ggMarkerInstances.push(clonedActiveElement);
		if (me._c16.firstChild) {
			me._c16.insertBefore(me._c16__active,me._c16.firstChild);
		} else {
			me._c16.appendChild(me._c16__active);
		}
		if (me._c16.firstChild) {
			me._c16.insertBefore(me._c16__normal,me._c16.firstChild);
		} else {
			me._c16.appendChild(me._c16__normal);
		}
		for (var i = 0; i < me._c16.childNodes.length; i++) {
			me._c16.ggMarkerInstances.push(me._c16.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c111);
		me._c111__normal = clonedNormalElement._map_pin;
		me._c111__normalInst = clonedNormalElement;
		me._c111__normal.style.visibility='inherit';
		me._c111__normal.style.left='-12px';
		me._c111__normal.style.top='-41px';
		me._c111.ggMarkerNormal=me._c111__normal;
		me._c111.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c111);
		me._c111__active = clonedActiveElement._map_pin;
		me._c111__activeInst = clonedActiveElement;
		me._c111__active.style.visibility='hidden';
		me._c111__active.style.left='-12px';
		me._c111__active.style.top='-41px';
		me._c111.ggMarkerActive=me._c111__active;
		me._c111.ggMarkerInstances.push(clonedActiveElement);
		if (me._c111.firstChild) {
			me._c111.insertBefore(me._c111__active,me._c111.firstChild);
		} else {
			me._c111.appendChild(me._c111__active);
		}
		if (me._c111.firstChild) {
			me._c111.insertBefore(me._c111__normal,me._c111.firstChild);
		} else {
			me._c111.appendChild(me._c111__normal);
		}
		for (var i = 0; i < me._c111.childNodes.length; i++) {
			me._c111.ggMarkerInstances.push(me._c111.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c15);
		me._c15__normal = clonedNormalElement._map_pin;
		me._c15__normalInst = clonedNormalElement;
		me._c15__normal.style.visibility='inherit';
		me._c15__normal.style.left='-12px';
		me._c15__normal.style.top='-41px';
		me._c15.ggMarkerNormal=me._c15__normal;
		me._c15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c15);
		me._c15__active = clonedActiveElement._map_pin;
		me._c15__activeInst = clonedActiveElement;
		me._c15__active.style.visibility='hidden';
		me._c15__active.style.left='-12px';
		me._c15__active.style.top='-41px';
		me._c15.ggMarkerActive=me._c15__active;
		me._c15.ggMarkerInstances.push(clonedActiveElement);
		if (me._c15.firstChild) {
			me._c15.insertBefore(me._c15__active,me._c15.firstChild);
		} else {
			me._c15.appendChild(me._c15__active);
		}
		if (me._c15.firstChild) {
			me._c15.insertBefore(me._c15__normal,me._c15.firstChild);
		} else {
			me._c15.appendChild(me._c15__normal);
		}
		for (var i = 0; i < me._c15.childNodes.length; i++) {
			me._c15.ggMarkerInstances.push(me._c15.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c14);
		me._c14__normal = clonedNormalElement._map_pin;
		me._c14__normalInst = clonedNormalElement;
		me._c14__normal.style.visibility='inherit';
		me._c14__normal.style.left='-12px';
		me._c14__normal.style.top='-41px';
		me._c14.ggMarkerNormal=me._c14__normal;
		me._c14.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c14);
		me._c14__active = clonedActiveElement._map_pin;
		me._c14__activeInst = clonedActiveElement;
		me._c14__active.style.visibility='hidden';
		me._c14__active.style.left='-12px';
		me._c14__active.style.top='-41px';
		me._c14.ggMarkerActive=me._c14__active;
		me._c14.ggMarkerInstances.push(clonedActiveElement);
		if (me._c14.firstChild) {
			me._c14.insertBefore(me._c14__active,me._c14.firstChild);
		} else {
			me._c14.appendChild(me._c14__active);
		}
		if (me._c14.firstChild) {
			me._c14.insertBefore(me._c14__normal,me._c14.firstChild);
		} else {
			me._c14.appendChild(me._c14__normal);
		}
		for (var i = 0; i < me._c14.childNodes.length; i++) {
			me._c14.ggMarkerInstances.push(me._c14.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c13);
		me._c13__normal = clonedNormalElement._map_pin;
		me._c13__normalInst = clonedNormalElement;
		me._c13__normal.style.visibility='inherit';
		me._c13__normal.style.left='-12px';
		me._c13__normal.style.top='-41px';
		me._c13.ggMarkerNormal=me._c13__normal;
		me._c13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c13);
		me._c13__active = clonedActiveElement._map_pin;
		me._c13__activeInst = clonedActiveElement;
		me._c13__active.style.visibility='hidden';
		me._c13__active.style.left='-12px';
		me._c13__active.style.top='-41px';
		me._c13.ggMarkerActive=me._c13__active;
		me._c13.ggMarkerInstances.push(clonedActiveElement);
		if (me._c13.firstChild) {
			me._c13.insertBefore(me._c13__active,me._c13.firstChild);
		} else {
			me._c13.appendChild(me._c13__active);
		}
		if (me._c13.firstChild) {
			me._c13.insertBefore(me._c13__normal,me._c13.firstChild);
		} else {
			me._c13.appendChild(me._c13__normal);
		}
		for (var i = 0; i < me._c13.childNodes.length; i++) {
			me._c13.ggMarkerInstances.push(me._c13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c12);
		me._c12__normal = clonedNormalElement._map_pin;
		me._c12__normalInst = clonedNormalElement;
		me._c12__normal.style.visibility='inherit';
		me._c12__normal.style.left='-12px';
		me._c12__normal.style.top='-41px';
		me._c12.ggMarkerNormal=me._c12__normal;
		me._c12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c12);
		me._c12__active = clonedActiveElement._map_pin;
		me._c12__activeInst = clonedActiveElement;
		me._c12__active.style.visibility='hidden';
		me._c12__active.style.left='-12px';
		me._c12__active.style.top='-41px';
		me._c12.ggMarkerActive=me._c12__active;
		me._c12.ggMarkerInstances.push(clonedActiveElement);
		if (me._c12.firstChild) {
			me._c12.insertBefore(me._c12__active,me._c12.firstChild);
		} else {
			me._c12.appendChild(me._c12__active);
		}
		if (me._c12.firstChild) {
			me._c12.insertBefore(me._c12__normal,me._c12.firstChild);
		} else {
			me._c12.appendChild(me._c12__normal);
		}
		for (var i = 0; i < me._c12.childNodes.length; i++) {
			me._c12.ggMarkerInstances.push(me._c12.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c10);
		me._c10__normal = clonedNormalElement._map_pin;
		me._c10__normalInst = clonedNormalElement;
		me._c10__normal.style.visibility='inherit';
		me._c10__normal.style.left='-12px';
		me._c10__normal.style.top='-41px';
		me._c10.ggMarkerNormal=me._c10__normal;
		me._c10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c10);
		me._c10__active = clonedActiveElement._map_pin;
		me._c10__activeInst = clonedActiveElement;
		me._c10__active.style.visibility='hidden';
		me._c10__active.style.left='-12px';
		me._c10__active.style.top='-41px';
		me._c10.ggMarkerActive=me._c10__active;
		me._c10.ggMarkerInstances.push(clonedActiveElement);
		if (me._c10.firstChild) {
			me._c10.insertBefore(me._c10__active,me._c10.firstChild);
		} else {
			me._c10.appendChild(me._c10__active);
		}
		if (me._c10.firstChild) {
			me._c10.insertBefore(me._c10__normal,me._c10.firstChild);
		} else {
			me._c10.appendChild(me._c10__normal);
		}
		for (var i = 0; i < me._c10.childNodes.length; i++) {
			me._c10.ggMarkerInstances.push(me._c10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c9);
		me._c9__normal = clonedNormalElement._map_pin;
		me._c9__normalInst = clonedNormalElement;
		me._c9__normal.style.visibility='inherit';
		me._c9__normal.style.left='-12px';
		me._c9__normal.style.top='-41px';
		me._c9.ggMarkerNormal=me._c9__normal;
		me._c9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c9);
		me._c9__active = clonedActiveElement._map_pin;
		me._c9__activeInst = clonedActiveElement;
		me._c9__active.style.visibility='hidden';
		me._c9__active.style.left='-12px';
		me._c9__active.style.top='-41px';
		me._c9.ggMarkerActive=me._c9__active;
		me._c9.ggMarkerInstances.push(clonedActiveElement);
		if (me._c9.firstChild) {
			me._c9.insertBefore(me._c9__active,me._c9.firstChild);
		} else {
			me._c9.appendChild(me._c9__active);
		}
		if (me._c9.firstChild) {
			me._c9.insertBefore(me._c9__normal,me._c9.firstChild);
		} else {
			me._c9.appendChild(me._c9__normal);
		}
		for (var i = 0; i < me._c9.childNodes.length; i++) {
			me._c9.ggMarkerInstances.push(me._c9.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c21);
		me._c21__normal = clonedNormalElement._map_pin;
		me._c21__normalInst = clonedNormalElement;
		me._c21__normal.style.visibility='inherit';
		me._c21__normal.style.left='-12px';
		me._c21__normal.style.top='-41px';
		me._c21.ggMarkerNormal=me._c21__normal;
		me._c21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c21);
		me._c21__active = clonedActiveElement._map_pin;
		me._c21__activeInst = clonedActiveElement;
		me._c21__active.style.visibility='hidden';
		me._c21__active.style.left='-12px';
		me._c21__active.style.top='-41px';
		me._c21.ggMarkerActive=me._c21__active;
		me._c21.ggMarkerInstances.push(clonedActiveElement);
		if (me._c21.firstChild) {
			me._c21.insertBefore(me._c21__active,me._c21.firstChild);
		} else {
			me._c21.appendChild(me._c21__active);
		}
		if (me._c21.firstChild) {
			me._c21.insertBefore(me._c21__normal,me._c21.firstChild);
		} else {
			me._c21.appendChild(me._c21__normal);
		}
		for (var i = 0; i < me._c21.childNodes.length; i++) {
			me._c21.ggMarkerInstances.push(me._c21.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c8);
		me._c8__normal = clonedNormalElement._map_pin;
		me._c8__normalInst = clonedNormalElement;
		me._c8__normal.style.visibility='inherit';
		me._c8__normal.style.left='-12px';
		me._c8__normal.style.top='-41px';
		me._c8.ggMarkerNormal=me._c8__normal;
		me._c8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c8);
		me._c8__active = clonedActiveElement._map_pin;
		me._c8__activeInst = clonedActiveElement;
		me._c8__active.style.visibility='hidden';
		me._c8__active.style.left='-12px';
		me._c8__active.style.top='-41px';
		me._c8.ggMarkerActive=me._c8__active;
		me._c8.ggMarkerInstances.push(clonedActiveElement);
		if (me._c8.firstChild) {
			me._c8.insertBefore(me._c8__active,me._c8.firstChild);
		} else {
			me._c8.appendChild(me._c8__active);
		}
		if (me._c8.firstChild) {
			me._c8.insertBefore(me._c8__normal,me._c8.firstChild);
		} else {
			me._c8.appendChild(me._c8__normal);
		}
		for (var i = 0; i < me._c8.childNodes.length; i++) {
			me._c8.ggMarkerInstances.push(me._c8.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c110);
		me._c110__normal = clonedNormalElement._map_pin;
		me._c110__normalInst = clonedNormalElement;
		me._c110__normal.style.visibility='inherit';
		me._c110__normal.style.left='-12px';
		me._c110__normal.style.top='-41px';
		me._c110.ggMarkerNormal=me._c110__normal;
		me._c110.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c110);
		me._c110__active = clonedActiveElement._map_pin;
		me._c110__activeInst = clonedActiveElement;
		me._c110__active.style.visibility='hidden';
		me._c110__active.style.left='-12px';
		me._c110__active.style.top='-41px';
		me._c110.ggMarkerActive=me._c110__active;
		me._c110.ggMarkerInstances.push(clonedActiveElement);
		if (me._c110.firstChild) {
			me._c110.insertBefore(me._c110__active,me._c110.firstChild);
		} else {
			me._c110.appendChild(me._c110__active);
		}
		if (me._c110.firstChild) {
			me._c110.insertBefore(me._c110__normal,me._c110.firstChild);
		} else {
			me._c110.appendChild(me._c110__normal);
		}
		for (var i = 0; i < me._c110.childNodes.length; i++) {
			me._c110.ggMarkerInstances.push(me._c110.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c7);
		me._c7__normal = clonedNormalElement._map_pin;
		me._c7__normalInst = clonedNormalElement;
		me._c7__normal.style.visibility='inherit';
		me._c7__normal.style.left='-12px';
		me._c7__normal.style.top='-41px';
		me._c7.ggMarkerNormal=me._c7__normal;
		me._c7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c7);
		me._c7__active = clonedActiveElement._map_pin;
		me._c7__activeInst = clonedActiveElement;
		me._c7__active.style.visibility='hidden';
		me._c7__active.style.left='-12px';
		me._c7__active.style.top='-41px';
		me._c7.ggMarkerActive=me._c7__active;
		me._c7.ggMarkerInstances.push(clonedActiveElement);
		if (me._c7.firstChild) {
			me._c7.insertBefore(me._c7__active,me._c7.firstChild);
		} else {
			me._c7.appendChild(me._c7__active);
		}
		if (me._c7.firstChild) {
			me._c7.insertBefore(me._c7__normal,me._c7.firstChild);
		} else {
			me._c7.appendChild(me._c7__normal);
		}
		for (var i = 0; i < me._c7.childNodes.length; i++) {
			me._c7.ggMarkerInstances.push(me._c7.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c_11);
		me._c_11__normal = clonedNormalElement._map_pin;
		me._c_11__normalInst = clonedNormalElement;
		me._c_11__normal.style.visibility='inherit';
		me._c_11__normal.style.left='-12px';
		me._c_11__normal.style.top='-41px';
		me._c_11.ggMarkerNormal=me._c_11__normal;
		me._c_11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c_11);
		me._c_11__active = clonedActiveElement._map_pin;
		me._c_11__activeInst = clonedActiveElement;
		me._c_11__active.style.visibility='hidden';
		me._c_11__active.style.left='-12px';
		me._c_11__active.style.top='-41px';
		me._c_11.ggMarkerActive=me._c_11__active;
		me._c_11.ggMarkerInstances.push(clonedActiveElement);
		if (me._c_11.firstChild) {
			me._c_11.insertBefore(me._c_11__active,me._c_11.firstChild);
		} else {
			me._c_11.appendChild(me._c_11__active);
		}
		if (me._c_11.firstChild) {
			me._c_11.insertBefore(me._c_11__normal,me._c_11.firstChild);
		} else {
			me._c_11.appendChild(me._c_11__normal);
		}
		for (var i = 0; i < me._c_11.childNodes.length; i++) {
			me._c_11.ggMarkerInstances.push(me._c_11.childNodes[i]);
		}
		me._bpc.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__81);
		me.__81__normal = clonedNormalElement._map_pin;
		me.__81__normalInst = clonedNormalElement;
		me.__81__normal.style.visibility='inherit';
		me.__81__normal.style.left='-12px';
		me.__81__normal.style.top='-41px';
		me.__81.ggMarkerNormal=me.__81__normal;
		me.__81.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__81);
		me.__81__active = clonedActiveElement._map_pin;
		me.__81__activeInst = clonedActiveElement;
		me.__81__active.style.visibility='hidden';
		me.__81__active.style.left='-12px';
		me.__81__active.style.top='-41px';
		me.__81.ggMarkerActive=me.__81__active;
		me.__81.ggMarkerInstances.push(clonedActiveElement);
		if (me.__81.firstChild) {
			me.__81.insertBefore(me.__81__active,me.__81.firstChild);
		} else {
			me.__81.appendChild(me.__81__active);
		}
		if (me.__81.firstChild) {
			me.__81.insertBefore(me.__81__normal,me.__81.firstChild);
		} else {
			me.__81.appendChild(me.__81__normal);
		}
		for (var i = 0; i < me.__81.childNodes.length; i++) {
			me.__81.ggMarkerInstances.push(me.__81.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__219);
		me.__219__normal = clonedNormalElement._map_pin;
		me.__219__normalInst = clonedNormalElement;
		me.__219__normal.style.visibility='inherit';
		me.__219__normal.style.left='-12px';
		me.__219__normal.style.top='-41px';
		me.__219.ggMarkerNormal=me.__219__normal;
		me.__219.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__219);
		me.__219__active = clonedActiveElement._map_pin;
		me.__219__activeInst = clonedActiveElement;
		me.__219__active.style.visibility='hidden';
		me.__219__active.style.left='-12px';
		me.__219__active.style.top='-41px';
		me.__219.ggMarkerActive=me.__219__active;
		me.__219.ggMarkerInstances.push(clonedActiveElement);
		if (me.__219.firstChild) {
			me.__219.insertBefore(me.__219__active,me.__219.firstChild);
		} else {
			me.__219.appendChild(me.__219__active);
		}
		if (me.__219.firstChild) {
			me.__219.insertBefore(me.__219__normal,me.__219.firstChild);
		} else {
			me.__219.appendChild(me.__219__normal);
		}
		for (var i = 0; i < me.__219.childNodes.length; i++) {
			me.__219.ggMarkerInstances.push(me.__219.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__80);
		me.__80__normal = clonedNormalElement._map_pin;
		me.__80__normalInst = clonedNormalElement;
		me.__80__normal.style.visibility='inherit';
		me.__80__normal.style.left='-12px';
		me.__80__normal.style.top='-41px';
		me.__80.ggMarkerNormal=me.__80__normal;
		me.__80.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__80);
		me.__80__active = clonedActiveElement._map_pin;
		me.__80__activeInst = clonedActiveElement;
		me.__80__active.style.visibility='hidden';
		me.__80__active.style.left='-12px';
		me.__80__active.style.top='-41px';
		me.__80.ggMarkerActive=me.__80__active;
		me.__80.ggMarkerInstances.push(clonedActiveElement);
		if (me.__80.firstChild) {
			me.__80.insertBefore(me.__80__active,me.__80.firstChild);
		} else {
			me.__80.appendChild(me.__80__active);
		}
		if (me.__80.firstChild) {
			me.__80.insertBefore(me.__80__normal,me.__80.firstChild);
		} else {
			me.__80.appendChild(me.__80__normal);
		}
		for (var i = 0; i < me.__80.childNodes.length; i++) {
			me.__80.ggMarkerInstances.push(me.__80.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__218);
		me.__218__normal = clonedNormalElement._map_pin;
		me.__218__normalInst = clonedNormalElement;
		me.__218__normal.style.visibility='inherit';
		me.__218__normal.style.left='-12px';
		me.__218__normal.style.top='-41px';
		me.__218.ggMarkerNormal=me.__218__normal;
		me.__218.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__218);
		me.__218__active = clonedActiveElement._map_pin;
		me.__218__activeInst = clonedActiveElement;
		me.__218__active.style.visibility='hidden';
		me.__218__active.style.left='-12px';
		me.__218__active.style.top='-41px';
		me.__218.ggMarkerActive=me.__218__active;
		me.__218.ggMarkerInstances.push(clonedActiveElement);
		if (me.__218.firstChild) {
			me.__218.insertBefore(me.__218__active,me.__218.firstChild);
		} else {
			me.__218.appendChild(me.__218__active);
		}
		if (me.__218.firstChild) {
			me.__218.insertBefore(me.__218__normal,me.__218.firstChild);
		} else {
			me.__218.appendChild(me.__218__normal);
		}
		for (var i = 0; i < me.__218.childNodes.length; i++) {
			me.__218.ggMarkerInstances.push(me.__218.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__410);
		me.__410__normal = clonedNormalElement._map_pin;
		me.__410__normalInst = clonedNormalElement;
		me.__410__normal.style.visibility='inherit';
		me.__410__normal.style.left='-12px';
		me.__410__normal.style.top='-41px';
		me.__410.ggMarkerNormal=me.__410__normal;
		me.__410.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__410);
		me.__410__active = clonedActiveElement._map_pin;
		me.__410__activeInst = clonedActiveElement;
		me.__410__active.style.visibility='hidden';
		me.__410__active.style.left='-12px';
		me.__410__active.style.top='-41px';
		me.__410.ggMarkerActive=me.__410__active;
		me.__410.ggMarkerInstances.push(clonedActiveElement);
		if (me.__410.firstChild) {
			me.__410.insertBefore(me.__410__active,me.__410.firstChild);
		} else {
			me.__410.appendChild(me.__410__active);
		}
		if (me.__410.firstChild) {
			me.__410.insertBefore(me.__410__normal,me.__410.firstChild);
		} else {
			me.__410.appendChild(me.__410__normal);
		}
		for (var i = 0; i < me.__410.childNodes.length; i++) {
			me.__410.ggMarkerInstances.push(me.__410.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__79);
		me.__79__normal = clonedNormalElement._map_pin;
		me.__79__normalInst = clonedNormalElement;
		me.__79__normal.style.visibility='inherit';
		me.__79__normal.style.left='-12px';
		me.__79__normal.style.top='-41px';
		me.__79.ggMarkerNormal=me.__79__normal;
		me.__79.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__79);
		me.__79__active = clonedActiveElement._map_pin;
		me.__79__activeInst = clonedActiveElement;
		me.__79__active.style.visibility='hidden';
		me.__79__active.style.left='-12px';
		me.__79__active.style.top='-41px';
		me.__79.ggMarkerActive=me.__79__active;
		me.__79.ggMarkerInstances.push(clonedActiveElement);
		if (me.__79.firstChild) {
			me.__79.insertBefore(me.__79__active,me.__79.firstChild);
		} else {
			me.__79.appendChild(me.__79__active);
		}
		if (me.__79.firstChild) {
			me.__79.insertBefore(me.__79__normal,me.__79.firstChild);
		} else {
			me.__79.appendChild(me.__79__normal);
		}
		for (var i = 0; i < me.__79.childNodes.length; i++) {
			me.__79.ggMarkerInstances.push(me.__79.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__78);
		me.__78__normal = clonedNormalElement._map_pin;
		me.__78__normalInst = clonedNormalElement;
		me.__78__normal.style.visibility='inherit';
		me.__78__normal.style.left='-12px';
		me.__78__normal.style.top='-41px';
		me.__78.ggMarkerNormal=me.__78__normal;
		me.__78.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__78);
		me.__78__active = clonedActiveElement._map_pin;
		me.__78__activeInst = clonedActiveElement;
		me.__78__active.style.visibility='hidden';
		me.__78__active.style.left='-12px';
		me.__78__active.style.top='-41px';
		me.__78.ggMarkerActive=me.__78__active;
		me.__78.ggMarkerInstances.push(clonedActiveElement);
		if (me.__78.firstChild) {
			me.__78.insertBefore(me.__78__active,me.__78.firstChild);
		} else {
			me.__78.appendChild(me.__78__active);
		}
		if (me.__78.firstChild) {
			me.__78.insertBefore(me.__78__normal,me.__78.firstChild);
		} else {
			me.__78.appendChild(me.__78__normal);
		}
		for (var i = 0; i < me.__78.childNodes.length; i++) {
			me.__78.ggMarkerInstances.push(me.__78.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__77);
		me.__77__normal = clonedNormalElement._map_pin;
		me.__77__normalInst = clonedNormalElement;
		me.__77__normal.style.visibility='inherit';
		me.__77__normal.style.left='-12px';
		me.__77__normal.style.top='-41px';
		me.__77.ggMarkerNormal=me.__77__normal;
		me.__77.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__77);
		me.__77__active = clonedActiveElement._map_pin;
		me.__77__activeInst = clonedActiveElement;
		me.__77__active.style.visibility='hidden';
		me.__77__active.style.left='-12px';
		me.__77__active.style.top='-41px';
		me.__77.ggMarkerActive=me.__77__active;
		me.__77.ggMarkerInstances.push(clonedActiveElement);
		if (me.__77.firstChild) {
			me.__77.insertBefore(me.__77__active,me.__77.firstChild);
		} else {
			me.__77.appendChild(me.__77__active);
		}
		if (me.__77.firstChild) {
			me.__77.insertBefore(me.__77__normal,me.__77.firstChild);
		} else {
			me.__77.appendChild(me.__77__normal);
		}
		for (var i = 0; i < me.__77.childNodes.length; i++) {
			me.__77.ggMarkerInstances.push(me.__77.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__76);
		me.__76__normal = clonedNormalElement._map_pin;
		me.__76__normalInst = clonedNormalElement;
		me.__76__normal.style.visibility='inherit';
		me.__76__normal.style.left='-12px';
		me.__76__normal.style.top='-41px';
		me.__76.ggMarkerNormal=me.__76__normal;
		me.__76.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__76);
		me.__76__active = clonedActiveElement._map_pin;
		me.__76__activeInst = clonedActiveElement;
		me.__76__active.style.visibility='hidden';
		me.__76__active.style.left='-12px';
		me.__76__active.style.top='-41px';
		me.__76.ggMarkerActive=me.__76__active;
		me.__76.ggMarkerInstances.push(clonedActiveElement);
		if (me.__76.firstChild) {
			me.__76.insertBefore(me.__76__active,me.__76.firstChild);
		} else {
			me.__76.appendChild(me.__76__active);
		}
		if (me.__76.firstChild) {
			me.__76.insertBefore(me.__76__normal,me.__76.firstChild);
		} else {
			me.__76.appendChild(me.__76__normal);
		}
		for (var i = 0; i < me.__76.childNodes.length; i++) {
			me.__76.ggMarkerInstances.push(me.__76.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__217);
		me.__217__normal = clonedNormalElement._map_pin;
		me.__217__normalInst = clonedNormalElement;
		me.__217__normal.style.visibility='inherit';
		me.__217__normal.style.left='-12px';
		me.__217__normal.style.top='-41px';
		me.__217.ggMarkerNormal=me.__217__normal;
		me.__217.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__217);
		me.__217__active = clonedActiveElement._map_pin;
		me.__217__activeInst = clonedActiveElement;
		me.__217__active.style.visibility='hidden';
		me.__217__active.style.left='-12px';
		me.__217__active.style.top='-41px';
		me.__217.ggMarkerActive=me.__217__active;
		me.__217.ggMarkerInstances.push(clonedActiveElement);
		if (me.__217.firstChild) {
			me.__217.insertBefore(me.__217__active,me.__217.firstChild);
		} else {
			me.__217.appendChild(me.__217__active);
		}
		if (me.__217.firstChild) {
			me.__217.insertBefore(me.__217__normal,me.__217.firstChild);
		} else {
			me.__217.appendChild(me.__217__normal);
		}
		for (var i = 0; i < me.__217.childNodes.length; i++) {
			me.__217.ggMarkerInstances.push(me.__217.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__315);
		me.__315__normal = clonedNormalElement._map_pin;
		me.__315__normalInst = clonedNormalElement;
		me.__315__normal.style.visibility='inherit';
		me.__315__normal.style.left='-12px';
		me.__315__normal.style.top='-41px';
		me.__315.ggMarkerNormal=me.__315__normal;
		me.__315.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__315);
		me.__315__active = clonedActiveElement._map_pin;
		me.__315__activeInst = clonedActiveElement;
		me.__315__active.style.visibility='hidden';
		me.__315__active.style.left='-12px';
		me.__315__active.style.top='-41px';
		me.__315.ggMarkerActive=me.__315__active;
		me.__315.ggMarkerInstances.push(clonedActiveElement);
		if (me.__315.firstChild) {
			me.__315.insertBefore(me.__315__active,me.__315.firstChild);
		} else {
			me.__315.appendChild(me.__315__active);
		}
		if (me.__315.firstChild) {
			me.__315.insertBefore(me.__315__normal,me.__315.firstChild);
		} else {
			me.__315.appendChild(me.__315__normal);
		}
		for (var i = 0; i < me.__315.childNodes.length; i++) {
			me.__315.ggMarkerInstances.push(me.__315.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__75);
		me.__75__normal = clonedNormalElement._map_pin;
		me.__75__normalInst = clonedNormalElement;
		me.__75__normal.style.visibility='inherit';
		me.__75__normal.style.left='-12px';
		me.__75__normal.style.top='-41px';
		me.__75.ggMarkerNormal=me.__75__normal;
		me.__75.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__75);
		me.__75__active = clonedActiveElement._map_pin;
		me.__75__activeInst = clonedActiveElement;
		me.__75__active.style.visibility='hidden';
		me.__75__active.style.left='-12px';
		me.__75__active.style.top='-41px';
		me.__75.ggMarkerActive=me.__75__active;
		me.__75.ggMarkerInstances.push(clonedActiveElement);
		if (me.__75.firstChild) {
			me.__75.insertBefore(me.__75__active,me.__75.firstChild);
		} else {
			me.__75.appendChild(me.__75__active);
		}
		if (me.__75.firstChild) {
			me.__75.insertBefore(me.__75__normal,me.__75.firstChild);
		} else {
			me.__75.appendChild(me.__75__normal);
		}
		for (var i = 0; i < me.__75.childNodes.length; i++) {
			me.__75.ggMarkerInstances.push(me.__75.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74);
		me.__74__normal = clonedNormalElement._map_pin;
		me.__74__normalInst = clonedNormalElement;
		me.__74__normal.style.visibility='inherit';
		me.__74__normal.style.left='-12px';
		me.__74__normal.style.top='-41px';
		me.__74.ggMarkerNormal=me.__74__normal;
		me.__74.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74);
		me.__74__active = clonedActiveElement._map_pin;
		me.__74__activeInst = clonedActiveElement;
		me.__74__active.style.visibility='hidden';
		me.__74__active.style.left='-12px';
		me.__74__active.style.top='-41px';
		me.__74.ggMarkerActive=me.__74__active;
		me.__74.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74.firstChild) {
			me.__74.insertBefore(me.__74__active,me.__74.firstChild);
		} else {
			me.__74.appendChild(me.__74__active);
		}
		if (me.__74.firstChild) {
			me.__74.insertBefore(me.__74__normal,me.__74.firstChild);
		} else {
			me.__74.appendChild(me.__74__normal);
		}
		for (var i = 0; i < me.__74.childNodes.length; i++) {
			me.__74.ggMarkerInstances.push(me.__74.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__216);
		me.__216__normal = clonedNormalElement._map_pin;
		me.__216__normalInst = clonedNormalElement;
		me.__216__normal.style.visibility='inherit';
		me.__216__normal.style.left='-12px';
		me.__216__normal.style.top='-41px';
		me.__216.ggMarkerNormal=me.__216__normal;
		me.__216.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__216);
		me.__216__active = clonedActiveElement._map_pin;
		me.__216__activeInst = clonedActiveElement;
		me.__216__active.style.visibility='hidden';
		me.__216__active.style.left='-12px';
		me.__216__active.style.top='-41px';
		me.__216.ggMarkerActive=me.__216__active;
		me.__216.ggMarkerInstances.push(clonedActiveElement);
		if (me.__216.firstChild) {
			me.__216.insertBefore(me.__216__active,me.__216.firstChild);
		} else {
			me.__216.appendChild(me.__216__active);
		}
		if (me.__216.firstChild) {
			me.__216.insertBefore(me.__216__normal,me.__216.firstChild);
		} else {
			me.__216.appendChild(me.__216__normal);
		}
		for (var i = 0; i < me.__216.childNodes.length; i++) {
			me.__216.ggMarkerInstances.push(me.__216.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__215);
		me.__215__normal = clonedNormalElement._map_pin;
		me.__215__normalInst = clonedNormalElement;
		me.__215__normal.style.visibility='inherit';
		me.__215__normal.style.left='-12px';
		me.__215__normal.style.top='-41px';
		me.__215.ggMarkerNormal=me.__215__normal;
		me.__215.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__215);
		me.__215__active = clonedActiveElement._map_pin;
		me.__215__activeInst = clonedActiveElement;
		me.__215__active.style.visibility='hidden';
		me.__215__active.style.left='-12px';
		me.__215__active.style.top='-41px';
		me.__215.ggMarkerActive=me.__215__active;
		me.__215.ggMarkerInstances.push(clonedActiveElement);
		if (me.__215.firstChild) {
			me.__215.insertBefore(me.__215__active,me.__215.firstChild);
		} else {
			me.__215.appendChild(me.__215__active);
		}
		if (me.__215.firstChild) {
			me.__215.insertBefore(me.__215__normal,me.__215.firstChild);
		} else {
			me.__215.appendChild(me.__215__normal);
		}
		for (var i = 0; i < me.__215.childNodes.length; i++) {
			me.__215.ggMarkerInstances.push(me.__215.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__73);
		me.__73__normal = clonedNormalElement._map_pin;
		me.__73__normalInst = clonedNormalElement;
		me.__73__normal.style.visibility='inherit';
		me.__73__normal.style.left='-12px';
		me.__73__normal.style.top='-41px';
		me.__73.ggMarkerNormal=me.__73__normal;
		me.__73.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__73);
		me.__73__active = clonedActiveElement._map_pin;
		me.__73__activeInst = clonedActiveElement;
		me.__73__active.style.visibility='hidden';
		me.__73__active.style.left='-12px';
		me.__73__active.style.top='-41px';
		me.__73.ggMarkerActive=me.__73__active;
		me.__73.ggMarkerInstances.push(clonedActiveElement);
		if (me.__73.firstChild) {
			me.__73.insertBefore(me.__73__active,me.__73.firstChild);
		} else {
			me.__73.appendChild(me.__73__active);
		}
		if (me.__73.firstChild) {
			me.__73.insertBefore(me.__73__normal,me.__73.firstChild);
		} else {
			me.__73.appendChild(me.__73__normal);
		}
		for (var i = 0; i < me.__73.childNodes.length; i++) {
			me.__73.ggMarkerInstances.push(me.__73.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_0);
		me.__2_0__normal = clonedNormalElement._map_pin;
		me.__2_0__normalInst = clonedNormalElement;
		me.__2_0__normal.style.visibility='inherit';
		me.__2_0__normal.style.left='-12px';
		me.__2_0__normal.style.top='-41px';
		me.__2_0.ggMarkerNormal=me.__2_0__normal;
		me.__2_0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_0);
		me.__2_0__active = clonedActiveElement._map_pin;
		me.__2_0__activeInst = clonedActiveElement;
		me.__2_0__active.style.visibility='hidden';
		me.__2_0__active.style.left='-12px';
		me.__2_0__active.style.top='-41px';
		me.__2_0.ggMarkerActive=me.__2_0__active;
		me.__2_0.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_0.firstChild) {
			me.__2_0.insertBefore(me.__2_0__active,me.__2_0.firstChild);
		} else {
			me.__2_0.appendChild(me.__2_0__active);
		}
		if (me.__2_0.firstChild) {
			me.__2_0.insertBefore(me.__2_0__normal,me.__2_0.firstChild);
		} else {
			me.__2_0.appendChild(me.__2_0__normal);
		}
		for (var i = 0; i < me.__2_0.childNodes.length; i++) {
			me.__2_0.ggMarkerInstances.push(me.__2_0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_);
		me.__2___normal = clonedNormalElement._map_pin;
		me.__2___normalInst = clonedNormalElement;
		me.__2___normal.style.visibility='inherit';
		me.__2___normal.style.left='-12px';
		me.__2___normal.style.top='-41px';
		me.__2_.ggMarkerNormal=me.__2___normal;
		me.__2_.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_);
		me.__2___active = clonedActiveElement._map_pin;
		me.__2___activeInst = clonedActiveElement;
		me.__2___active.style.visibility='hidden';
		me.__2___active.style.left='-12px';
		me.__2___active.style.top='-41px';
		me.__2_.ggMarkerActive=me.__2___active;
		me.__2_.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_.firstChild) {
			me.__2_.insertBefore(me.__2___active,me.__2_.firstChild);
		} else {
			me.__2_.appendChild(me.__2___active);
		}
		if (me.__2_.firstChild) {
			me.__2_.insertBefore(me.__2___normal,me.__2_.firstChild);
		} else {
			me.__2_.appendChild(me.__2___normal);
		}
		for (var i = 0; i < me.__2_.childNodes.length; i++) {
			me.__2_.ggMarkerInstances.push(me.__2_.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__72);
		me.__72__normal = clonedNormalElement._map_pin;
		me.__72__normalInst = clonedNormalElement;
		me.__72__normal.style.visibility='inherit';
		me.__72__normal.style.left='-12px';
		me.__72__normal.style.top='-41px';
		me.__72.ggMarkerNormal=me.__72__normal;
		me.__72.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__72);
		me.__72__active = clonedActiveElement._map_pin;
		me.__72__activeInst = clonedActiveElement;
		me.__72__active.style.visibility='hidden';
		me.__72__active.style.left='-12px';
		me.__72__active.style.top='-41px';
		me.__72.ggMarkerActive=me.__72__active;
		me.__72.ggMarkerInstances.push(clonedActiveElement);
		if (me.__72.firstChild) {
			me.__72.insertBefore(me.__72__active,me.__72.firstChild);
		} else {
			me.__72.appendChild(me.__72__active);
		}
		if (me.__72.firstChild) {
			me.__72.insertBefore(me.__72__normal,me.__72.firstChild);
		} else {
			me.__72.appendChild(me.__72__normal);
		}
		for (var i = 0; i < me.__72.childNodes.length; i++) {
			me.__72.ggMarkerInstances.push(me.__72.childNodes[i]);
		}
		me.__68.logicBlock_visible();
		me.__61.logicBlock_visible();
		me.__52.logicBlock_position();
		me._c6.logicBlock_visible();
		me._b0.logicBlock_visible();
		me.__113.logicBlock_position();
		me.__50.logicBlock_visible();
		me.__51.logicBlock_visible();
		me._rectangle_4.logicBlock_visible();
		me._rectangle_5.logicBlock_backgroundcolor();
		me._image_17.logicBlock_position();
		me.__214.logicBlock_backgroundcolor();
		me.__111.logicBlock_position();
		me.__311.logicBlock_backgroundcolor();
		me.__312.logicBlock_position();
		me.__45.logicBlock_backgroundcolor();
		me.__46.logicBlock_position();
		me.__43.logicBlock_visible();
		me.__34.logicBlock_position();
		me.__34.logicBlock_visible();
		me.__35.logicBlock_visible();
		me.__13.logicBlock_visible();
		me.__14.logicBlock_visible();
		me._c.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c5);
		me._c5__normal = clonedNormalElement._map_pin;
		me._c5__normalInst = clonedNormalElement;
		me._c5__normal.style.visibility='inherit';
		me._c5__normal.style.left='-12px';
		me._c5__normal.style.top='-41px';
		me._c5.ggMarkerNormal=me._c5__normal;
		me._c5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c5);
		me._c5__active = clonedActiveElement._map_pin;
		me._c5__activeInst = clonedActiveElement;
		me._c5__active.style.visibility='hidden';
		me._c5__active.style.left='-12px';
		me._c5__active.style.top='-41px';
		me._c5.ggMarkerActive=me._c5__active;
		me._c5.ggMarkerInstances.push(clonedActiveElement);
		if (me._c5.firstChild) {
			me._c5.insertBefore(me._c5__active,me._c5.firstChild);
		} else {
			me._c5.appendChild(me._c5__active);
		}
		if (me._c5.firstChild) {
			me._c5.insertBefore(me._c5__normal,me._c5.firstChild);
		} else {
			me._c5.appendChild(me._c5__normal);
		}
		for (var i = 0; i < me._c5.childNodes.length; i++) {
			me._c5.ggMarkerInstances.push(me._c5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c40);
		me._c40__normal = clonedNormalElement._map_pin;
		me._c40__normalInst = clonedNormalElement;
		me._c40__normal.style.visibility='inherit';
		me._c40__normal.style.left='-12px';
		me._c40__normal.style.top='-41px';
		me._c40.ggMarkerNormal=me._c40__normal;
		me._c40.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c40);
		me._c40__active = clonedActiveElement._map_pin;
		me._c40__activeInst = clonedActiveElement;
		me._c40__active.style.visibility='hidden';
		me._c40__active.style.left='-12px';
		me._c40__active.style.top='-41px';
		me._c40.ggMarkerActive=me._c40__active;
		me._c40.ggMarkerInstances.push(clonedActiveElement);
		if (me._c40.firstChild) {
			me._c40.insertBefore(me._c40__active,me._c40.firstChild);
		} else {
			me._c40.appendChild(me._c40__active);
		}
		if (me._c40.firstChild) {
			me._c40.insertBefore(me._c40__normal,me._c40.firstChild);
		} else {
			me._c40.appendChild(me._c40__normal);
		}
		for (var i = 0; i < me._c40.childNodes.length; i++) {
			me._c40.ggMarkerInstances.push(me._c40.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c30);
		me._c30__normal = clonedNormalElement._map_pin;
		me._c30__normalInst = clonedNormalElement;
		me._c30__normal.style.visibility='inherit';
		me._c30__normal.style.left='-12px';
		me._c30__normal.style.top='-41px';
		me._c30.ggMarkerNormal=me._c30__normal;
		me._c30.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c30);
		me._c30__active = clonedActiveElement._map_pin;
		me._c30__activeInst = clonedActiveElement;
		me._c30__active.style.visibility='hidden';
		me._c30__active.style.left='-12px';
		me._c30__active.style.top='-41px';
		me._c30.ggMarkerActive=me._c30__active;
		me._c30.ggMarkerInstances.push(clonedActiveElement);
		if (me._c30.firstChild) {
			me._c30.insertBefore(me._c30__active,me._c30.firstChild);
		} else {
			me._c30.appendChild(me._c30__active);
		}
		if (me._c30.firstChild) {
			me._c30.insertBefore(me._c30__normal,me._c30.firstChild);
		} else {
			me._c30.appendChild(me._c30__normal);
		}
		for (var i = 0; i < me._c30.childNodes.length; i++) {
			me._c30.ggMarkerInstances.push(me._c30.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c20);
		me._c20__normal = clonedNormalElement._map_pin;
		me._c20__normalInst = clonedNormalElement;
		me._c20__normal.style.visibility='inherit';
		me._c20__normal.style.left='-12px';
		me._c20__normal.style.top='-41px';
		me._c20.ggMarkerNormal=me._c20__normal;
		me._c20.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c20);
		me._c20__active = clonedActiveElement._map_pin;
		me._c20__activeInst = clonedActiveElement;
		me._c20__active.style.visibility='hidden';
		me._c20__active.style.left='-12px';
		me._c20__active.style.top='-41px';
		me._c20.ggMarkerActive=me._c20__active;
		me._c20.ggMarkerInstances.push(clonedActiveElement);
		if (me._c20.firstChild) {
			me._c20.insertBefore(me._c20__active,me._c20.firstChild);
		} else {
			me._c20.appendChild(me._c20__active);
		}
		if (me._c20.firstChild) {
			me._c20.insertBefore(me._c20__normal,me._c20.firstChild);
		} else {
			me._c20.appendChild(me._c20__normal);
		}
		for (var i = 0; i < me._c20.childNodes.length; i++) {
			me._c20.ggMarkerInstances.push(me._c20.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c4);
		me._c4__normal = clonedNormalElement._map_pin;
		me._c4__normalInst = clonedNormalElement;
		me._c4__normal.style.visibility='inherit';
		me._c4__normal.style.left='-12px';
		me._c4__normal.style.top='-41px';
		me._c4.ggMarkerNormal=me._c4__normal;
		me._c4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c4);
		me._c4__active = clonedActiveElement._map_pin;
		me._c4__activeInst = clonedActiveElement;
		me._c4__active.style.visibility='hidden';
		me._c4__active.style.left='-12px';
		me._c4__active.style.top='-41px';
		me._c4.ggMarkerActive=me._c4__active;
		me._c4.ggMarkerInstances.push(clonedActiveElement);
		if (me._c4.firstChild) {
			me._c4.insertBefore(me._c4__active,me._c4.firstChild);
		} else {
			me._c4.appendChild(me._c4__active);
		}
		if (me._c4.firstChild) {
			me._c4.insertBefore(me._c4__normal,me._c4.firstChild);
		} else {
			me._c4.appendChild(me._c4__normal);
		}
		for (var i = 0; i < me._c4.childNodes.length; i++) {
			me._c4.ggMarkerInstances.push(me._c4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__110);
		me.__110__normal = clonedNormalElement._map_pin;
		me.__110__normalInst = clonedNormalElement;
		me.__110__normal.style.visibility='inherit';
		me.__110__normal.style.left='-12px';
		me.__110__normal.style.top='-41px';
		me.__110.ggMarkerNormal=me.__110__normal;
		me.__110.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__110);
		me.__110__active = clonedActiveElement._map_pin;
		me.__110__activeInst = clonedActiveElement;
		me.__110__active.style.visibility='hidden';
		me.__110__active.style.left='-12px';
		me.__110__active.style.top='-41px';
		me.__110.ggMarkerActive=me.__110__active;
		me.__110.ggMarkerInstances.push(clonedActiveElement);
		if (me.__110.firstChild) {
			me.__110.insertBefore(me.__110__active,me.__110.firstChild);
		} else {
			me.__110.appendChild(me.__110__active);
		}
		if (me.__110.firstChild) {
			me.__110.insertBefore(me.__110__normal,me.__110.firstChild);
		} else {
			me.__110.appendChild(me.__110__normal);
		}
		for (var i = 0; i < me.__110.childNodes.length; i++) {
			me.__110.ggMarkerInstances.push(me.__110.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c3);
		me._c3__normal = clonedNormalElement._map_pin;
		me._c3__normalInst = clonedNormalElement;
		me._c3__normal.style.visibility='inherit';
		me._c3__normal.style.left='-12px';
		me._c3__normal.style.top='-41px';
		me._c3.ggMarkerNormal=me._c3__normal;
		me._c3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c3);
		me._c3__active = clonedActiveElement._map_pin;
		me._c3__activeInst = clonedActiveElement;
		me._c3__active.style.visibility='hidden';
		me._c3__active.style.left='-12px';
		me._c3__active.style.top='-41px';
		me._c3.ggMarkerActive=me._c3__active;
		me._c3.ggMarkerInstances.push(clonedActiveElement);
		if (me._c3.firstChild) {
			me._c3.insertBefore(me._c3__active,me._c3.firstChild);
		} else {
			me._c3.appendChild(me._c3__active);
		}
		if (me._c3.firstChild) {
			me._c3.insertBefore(me._c3__normal,me._c3.firstChild);
		} else {
			me._c3.appendChild(me._c3__normal);
		}
		for (var i = 0; i < me._c3.childNodes.length; i++) {
			me._c3.ggMarkerInstances.push(me._c3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c11);
		me._c11__normal = clonedNormalElement._map_pin;
		me._c11__normalInst = clonedNormalElement;
		me._c11__normal.style.visibility='inherit';
		me._c11__normal.style.left='-12px';
		me._c11__normal.style.top='-41px';
		me._c11.ggMarkerNormal=me._c11__normal;
		me._c11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c11);
		me._c11__active = clonedActiveElement._map_pin;
		me._c11__activeInst = clonedActiveElement;
		me._c11__active.style.visibility='hidden';
		me._c11__active.style.left='-12px';
		me._c11__active.style.top='-41px';
		me._c11.ggMarkerActive=me._c11__active;
		me._c11.ggMarkerInstances.push(clonedActiveElement);
		if (me._c11.firstChild) {
			me._c11.insertBefore(me._c11__active,me._c11.firstChild);
		} else {
			me._c11.appendChild(me._c11__active);
		}
		if (me._c11.firstChild) {
			me._c11.insertBefore(me._c11__normal,me._c11.firstChild);
		} else {
			me._c11.appendChild(me._c11__normal);
		}
		for (var i = 0; i < me._c11.childNodes.length; i++) {
			me._c11.ggMarkerInstances.push(me._c11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c2);
		me._c2__normal = clonedNormalElement._map_pin;
		me._c2__normalInst = clonedNormalElement;
		me._c2__normal.style.visibility='inherit';
		me._c2__normal.style.left='-12px';
		me._c2__normal.style.top='-41px';
		me._c2.ggMarkerNormal=me._c2__normal;
		me._c2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c2);
		me._c2__active = clonedActiveElement._map_pin;
		me._c2__activeInst = clonedActiveElement;
		me._c2__active.style.visibility='hidden';
		me._c2__active.style.left='-12px';
		me._c2__active.style.top='-41px';
		me._c2.ggMarkerActive=me._c2__active;
		me._c2.ggMarkerInstances.push(clonedActiveElement);
		if (me._c2.firstChild) {
			me._c2.insertBefore(me._c2__active,me._c2.firstChild);
		} else {
			me._c2.appendChild(me._c2__active);
		}
		if (me._c2.firstChild) {
			me._c2.insertBefore(me._c2__normal,me._c2.firstChild);
		} else {
			me._c2.appendChild(me._c2__normal);
		}
		for (var i = 0; i < me._c2.childNodes.length; i++) {
			me._c2.ggMarkerInstances.push(me._c2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c1);
		me._c1__normal = clonedNormalElement._map_pin;
		me._c1__normalInst = clonedNormalElement;
		me._c1__normal.style.visibility='inherit';
		me._c1__normal.style.left='-12px';
		me._c1__normal.style.top='-41px';
		me._c1.ggMarkerNormal=me._c1__normal;
		me._c1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c1);
		me._c1__active = clonedActiveElement._map_pin;
		me._c1__activeInst = clonedActiveElement;
		me._c1__active.style.visibility='hidden';
		me._c1__active.style.left='-12px';
		me._c1__active.style.top='-41px';
		me._c1.ggMarkerActive=me._c1__active;
		me._c1.ggMarkerInstances.push(clonedActiveElement);
		if (me._c1.firstChild) {
			me._c1.insertBefore(me._c1__active,me._c1.firstChild);
		} else {
			me._c1.appendChild(me._c1__active);
		}
		if (me._c1.firstChild) {
			me._c1.insertBefore(me._c1__normal,me._c1.firstChild);
		} else {
			me._c1.appendChild(me._c1__normal);
		}
		for (var i = 0; i < me._c1.childNodes.length; i++) {
			me._c1.ggMarkerInstances.push(me._c1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._c0);
		me._c0__normal = clonedNormalElement._map_pin;
		me._c0__normalInst = clonedNormalElement;
		me._c0__normal.style.visibility='inherit';
		me._c0__normal.style.left='-12px';
		me._c0__normal.style.top='-41px';
		me._c0.ggMarkerNormal=me._c0__normal;
		me._c0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._c0);
		me._c0__active = clonedActiveElement._map_pin;
		me._c0__activeInst = clonedActiveElement;
		me._c0__active.style.visibility='hidden';
		me._c0__active.style.left='-12px';
		me._c0__active.style.top='-41px';
		me._c0.ggMarkerActive=me._c0__active;
		me._c0.ggMarkerInstances.push(clonedActiveElement);
		if (me._c0.firstChild) {
			me._c0.insertBefore(me._c0__active,me._c0.firstChild);
		} else {
			me._c0.appendChild(me._c0__active);
		}
		if (me._c0.firstChild) {
			me._c0.insertBefore(me._c0__normal,me._c0.firstChild);
		} else {
			me._c0.appendChild(me._c0__normal);
		}
		for (var i = 0; i < me._c0.childNodes.length; i++) {
			me._c0.ggMarkerInstances.push(me._c0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__33);
		me.__33__normal = clonedNormalElement._map_pin;
		me.__33__normalInst = clonedNormalElement;
		me.__33__normal.style.visibility='inherit';
		me.__33__normal.style.left='-12px';
		me.__33__normal.style.top='-41px';
		me.__33.ggMarkerNormal=me.__33__normal;
		me.__33.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__33);
		me.__33__active = clonedActiveElement._map_pin;
		me.__33__activeInst = clonedActiveElement;
		me.__33__active.style.visibility='hidden';
		me.__33__active.style.left='-12px';
		me.__33__active.style.top='-41px';
		me.__33.ggMarkerActive=me.__33__active;
		me.__33.ggMarkerInstances.push(clonedActiveElement);
		if (me.__33.firstChild) {
			me.__33.insertBefore(me.__33__active,me.__33.firstChild);
		} else {
			me.__33.appendChild(me.__33__active);
		}
		if (me.__33.firstChild) {
			me.__33.insertBefore(me.__33__normal,me.__33.firstChild);
		} else {
			me.__33.appendChild(me.__33__normal);
		}
		for (var i = 0; i < me.__33.childNodes.length; i++) {
			me.__33.ggMarkerInstances.push(me.__33.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__32);
		me.__32__normal = clonedNormalElement._map_pin;
		me.__32__normalInst = clonedNormalElement;
		me.__32__normal.style.visibility='inherit';
		me.__32__normal.style.left='-12px';
		me.__32__normal.style.top='-41px';
		me.__32.ggMarkerNormal=me.__32__normal;
		me.__32.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__32);
		me.__32__active = clonedActiveElement._map_pin;
		me.__32__activeInst = clonedActiveElement;
		me.__32__active.style.visibility='hidden';
		me.__32__active.style.left='-12px';
		me.__32__active.style.top='-41px';
		me.__32.ggMarkerActive=me.__32__active;
		me.__32.ggMarkerInstances.push(clonedActiveElement);
		if (me.__32.firstChild) {
			me.__32.insertBefore(me.__32__active,me.__32.firstChild);
		} else {
			me.__32.appendChild(me.__32__active);
		}
		if (me.__32.firstChild) {
			me.__32.insertBefore(me.__32__normal,me.__32.firstChild);
		} else {
			me.__32.appendChild(me.__32__normal);
		}
		for (var i = 0; i < me.__32.childNodes.length; i++) {
			me.__32.ggMarkerInstances.push(me.__32.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__212);
		me.__212__normal = clonedNormalElement._map_pin;
		me.__212__normalInst = clonedNormalElement;
		me.__212__normal.style.visibility='inherit';
		me.__212__normal.style.left='-12px';
		me.__212__normal.style.top='-41px';
		me.__212.ggMarkerNormal=me.__212__normal;
		me.__212.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__212);
		me.__212__active = clonedActiveElement._map_pin;
		me.__212__activeInst = clonedActiveElement;
		me.__212__active.style.visibility='hidden';
		me.__212__active.style.left='-12px';
		me.__212__active.style.top='-41px';
		me.__212.ggMarkerActive=me.__212__active;
		me.__212.ggMarkerInstances.push(clonedActiveElement);
		if (me.__212.firstChild) {
			me.__212.insertBefore(me.__212__active,me.__212.firstChild);
		} else {
			me.__212.appendChild(me.__212__active);
		}
		if (me.__212.firstChild) {
			me.__212.insertBefore(me.__212__normal,me.__212.firstChild);
		} else {
			me.__212.appendChild(me.__212__normal);
		}
		for (var i = 0; i < me.__212.childNodes.length; i++) {
			me.__212.ggMarkerInstances.push(me.__212.childNodes[i]);
		}
		me._b.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__211);
		me.__211__normal = clonedNormalElement._map_pin;
		me.__211__normalInst = clonedNormalElement;
		me.__211__normal.style.visibility='inherit';
		me.__211__normal.style.left='-12px';
		me.__211__normal.style.top='-41px';
		me.__211.ggMarkerNormal=me.__211__normal;
		me.__211.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__211);
		me.__211__active = clonedActiveElement._map_pin;
		me.__211__activeInst = clonedActiveElement;
		me.__211__active.style.visibility='hidden';
		me.__211__active.style.left='-12px';
		me.__211__active.style.top='-41px';
		me.__211.ggMarkerActive=me.__211__active;
		me.__211.ggMarkerInstances.push(clonedActiveElement);
		if (me.__211.firstChild) {
			me.__211.insertBefore(me.__211__active,me.__211.firstChild);
		} else {
			me.__211.appendChild(me.__211__active);
		}
		if (me.__211.firstChild) {
			me.__211.insertBefore(me.__211__normal,me.__211.firstChild);
		} else {
			me.__211.appendChild(me.__211__normal);
		}
		for (var i = 0; i < me.__211.childNodes.length; i++) {
			me.__211.ggMarkerInstances.push(me.__211.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__210);
		me.__210__normal = clonedNormalElement._map_pin;
		me.__210__normalInst = clonedNormalElement;
		me.__210__normal.style.visibility='inherit';
		me.__210__normal.style.left='-12px';
		me.__210__normal.style.top='-41px';
		me.__210.ggMarkerNormal=me.__210__normal;
		me.__210.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__210);
		me.__210__active = clonedActiveElement._map_pin;
		me.__210__activeInst = clonedActiveElement;
		me.__210__active.style.visibility='hidden';
		me.__210__active.style.left='-12px';
		me.__210__active.style.top='-41px';
		me.__210.ggMarkerActive=me.__210__active;
		me.__210.ggMarkerInstances.push(clonedActiveElement);
		if (me.__210.firstChild) {
			me.__210.insertBefore(me.__210__active,me.__210.firstChild);
		} else {
			me.__210.appendChild(me.__210__active);
		}
		if (me.__210.firstChild) {
			me.__210.insertBefore(me.__210__normal,me.__210.firstChild);
		} else {
			me.__210.appendChild(me.__210__normal);
		}
		for (var i = 0; i < me.__210.childNodes.length; i++) {
			me.__210.ggMarkerInstances.push(me.__210.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__29);
		me.__29__normal = clonedNormalElement._map_pin;
		me.__29__normalInst = clonedNormalElement;
		me.__29__normal.style.visibility='inherit';
		me.__29__normal.style.left='-12px';
		me.__29__normal.style.top='-41px';
		me.__29.ggMarkerNormal=me.__29__normal;
		me.__29.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__29);
		me.__29__active = clonedActiveElement._map_pin;
		me.__29__activeInst = clonedActiveElement;
		me.__29__active.style.visibility='hidden';
		me.__29__active.style.left='-12px';
		me.__29__active.style.top='-41px';
		me.__29.ggMarkerActive=me.__29__active;
		me.__29.ggMarkerInstances.push(clonedActiveElement);
		if (me.__29.firstChild) {
			me.__29.insertBefore(me.__29__active,me.__29.firstChild);
		} else {
			me.__29.appendChild(me.__29__active);
		}
		if (me.__29.firstChild) {
			me.__29.insertBefore(me.__29__normal,me.__29.firstChild);
		} else {
			me.__29.appendChild(me.__29__normal);
		}
		for (var i = 0; i < me.__29.childNodes.length; i++) {
			me.__29.ggMarkerInstances.push(me.__29.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__28);
		me.__28__normal = clonedNormalElement._map_pin;
		me.__28__normalInst = clonedNormalElement;
		me.__28__normal.style.visibility='inherit';
		me.__28__normal.style.left='-12px';
		me.__28__normal.style.top='-41px';
		me.__28.ggMarkerNormal=me.__28__normal;
		me.__28.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__28);
		me.__28__active = clonedActiveElement._map_pin;
		me.__28__activeInst = clonedActiveElement;
		me.__28__active.style.visibility='hidden';
		me.__28__active.style.left='-12px';
		me.__28__active.style.top='-41px';
		me.__28.ggMarkerActive=me.__28__active;
		me.__28.ggMarkerInstances.push(clonedActiveElement);
		if (me.__28.firstChild) {
			me.__28.insertBefore(me.__28__active,me.__28.firstChild);
		} else {
			me.__28.appendChild(me.__28__active);
		}
		if (me.__28.firstChild) {
			me.__28.insertBefore(me.__28__normal,me.__28.firstChild);
		} else {
			me.__28.appendChild(me.__28__normal);
		}
		for (var i = 0; i < me.__28.childNodes.length; i++) {
			me.__28.ggMarkerInstances.push(me.__28.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__40);
		me.__40__normal = clonedNormalElement._map_pin;
		me.__40__normalInst = clonedNormalElement;
		me.__40__normal.style.visibility='inherit';
		me.__40__normal.style.left='-12px';
		me.__40__normal.style.top='-41px';
		me.__40.ggMarkerNormal=me.__40__normal;
		me.__40.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__40);
		me.__40__active = clonedActiveElement._map_pin;
		me.__40__activeInst = clonedActiveElement;
		me.__40__active.style.visibility='hidden';
		me.__40__active.style.left='-12px';
		me.__40__active.style.top='-41px';
		me.__40.ggMarkerActive=me.__40__active;
		me.__40.ggMarkerInstances.push(clonedActiveElement);
		if (me.__40.firstChild) {
			me.__40.insertBefore(me.__40__active,me.__40.firstChild);
		} else {
			me.__40.appendChild(me.__40__active);
		}
		if (me.__40.firstChild) {
			me.__40.insertBefore(me.__40__normal,me.__40.firstChild);
		} else {
			me.__40.appendChild(me.__40__normal);
		}
		for (var i = 0; i < me.__40.childNodes.length; i++) {
			me.__40.ggMarkerInstances.push(me.__40.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__27);
		me.__27__normal = clonedNormalElement._map_pin;
		me.__27__normalInst = clonedNormalElement;
		me.__27__normal.style.visibility='inherit';
		me.__27__normal.style.left='-12px';
		me.__27__normal.style.top='-41px';
		me.__27.ggMarkerNormal=me.__27__normal;
		me.__27.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__27);
		me.__27__active = clonedActiveElement._map_pin;
		me.__27__activeInst = clonedActiveElement;
		me.__27__active.style.visibility='hidden';
		me.__27__active.style.left='-12px';
		me.__27__active.style.top='-41px';
		me.__27.ggMarkerActive=me.__27__active;
		me.__27.ggMarkerInstances.push(clonedActiveElement);
		if (me.__27.firstChild) {
			me.__27.insertBefore(me.__27__active,me.__27.firstChild);
		} else {
			me.__27.appendChild(me.__27__active);
		}
		if (me.__27.firstChild) {
			me.__27.insertBefore(me.__27__normal,me.__27.firstChild);
		} else {
			me.__27.appendChild(me.__27__normal);
		}
		for (var i = 0; i < me.__27.childNodes.length; i++) {
			me.__27.ggMarkerInstances.push(me.__27.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__26);
		me.__26__normal = clonedNormalElement._map_pin;
		me.__26__normalInst = clonedNormalElement;
		me.__26__normal.style.visibility='inherit';
		me.__26__normal.style.left='-12px';
		me.__26__normal.style.top='-41px';
		me.__26.ggMarkerNormal=me.__26__normal;
		me.__26.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__26);
		me.__26__active = clonedActiveElement._map_pin;
		me.__26__activeInst = clonedActiveElement;
		me.__26__active.style.visibility='hidden';
		me.__26__active.style.left='-12px';
		me.__26__active.style.top='-41px';
		me.__26.ggMarkerActive=me.__26__active;
		me.__26.ggMarkerInstances.push(clonedActiveElement);
		if (me.__26.firstChild) {
			me.__26.insertBefore(me.__26__active,me.__26.firstChild);
		} else {
			me.__26.appendChild(me.__26__active);
		}
		if (me.__26.firstChild) {
			me.__26.insertBefore(me.__26__normal,me.__26.firstChild);
		} else {
			me.__26.appendChild(me.__26__normal);
		}
		for (var i = 0; i < me.__26.childNodes.length; i++) {
			me.__26.ggMarkerInstances.push(me.__26.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__25);
		me.__25__normal = clonedNormalElement._map_pin;
		me.__25__normalInst = clonedNormalElement;
		me.__25__normal.style.visibility='inherit';
		me.__25__normal.style.left='-12px';
		me.__25__normal.style.top='-41px';
		me.__25.ggMarkerNormal=me.__25__normal;
		me.__25.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__25);
		me.__25__active = clonedActiveElement._map_pin;
		me.__25__activeInst = clonedActiveElement;
		me.__25__active.style.visibility='hidden';
		me.__25__active.style.left='-12px';
		me.__25__active.style.top='-41px';
		me.__25.ggMarkerActive=me.__25__active;
		me.__25.ggMarkerInstances.push(clonedActiveElement);
		if (me.__25.firstChild) {
			me.__25.insertBefore(me.__25__active,me.__25.firstChild);
		} else {
			me.__25.appendChild(me.__25__active);
		}
		if (me.__25.firstChild) {
			me.__25.insertBefore(me.__25__normal,me.__25.firstChild);
		} else {
			me.__25.appendChild(me.__25__normal);
		}
		for (var i = 0; i < me.__25.childNodes.length; i++) {
			me.__25.ggMarkerInstances.push(me.__25.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__24);
		me.__24__normal = clonedNormalElement._map_pin;
		me.__24__normalInst = clonedNormalElement;
		me.__24__normal.style.visibility='inherit';
		me.__24__normal.style.left='-12px';
		me.__24__normal.style.top='-41px';
		me.__24.ggMarkerNormal=me.__24__normal;
		me.__24.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__24);
		me.__24__active = clonedActiveElement._map_pin;
		me.__24__activeInst = clonedActiveElement;
		me.__24__active.style.visibility='hidden';
		me.__24__active.style.left='-12px';
		me.__24__active.style.top='-41px';
		me.__24.ggMarkerActive=me.__24__active;
		me.__24.ggMarkerInstances.push(clonedActiveElement);
		if (me.__24.firstChild) {
			me.__24.insertBefore(me.__24__active,me.__24.firstChild);
		} else {
			me.__24.appendChild(me.__24__active);
		}
		if (me.__24.firstChild) {
			me.__24.insertBefore(me.__24__normal,me.__24.firstChild);
		} else {
			me.__24.appendChild(me.__24__normal);
		}
		for (var i = 0; i < me.__24.childNodes.length; i++) {
			me.__24.ggMarkerInstances.push(me.__24.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__23);
		me.__23__normal = clonedNormalElement._map_pin;
		me.__23__normalInst = clonedNormalElement;
		me.__23__normal.style.visibility='inherit';
		me.__23__normal.style.left='-12px';
		me.__23__normal.style.top='-41px';
		me.__23.ggMarkerNormal=me.__23__normal;
		me.__23.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__23);
		me.__23__active = clonedActiveElement._map_pin;
		me.__23__activeInst = clonedActiveElement;
		me.__23__active.style.visibility='hidden';
		me.__23__active.style.left='-12px';
		me.__23__active.style.top='-41px';
		me.__23.ggMarkerActive=me.__23__active;
		me.__23.ggMarkerInstances.push(clonedActiveElement);
		if (me.__23.firstChild) {
			me.__23.insertBefore(me.__23__active,me.__23.firstChild);
		} else {
			me.__23.appendChild(me.__23__active);
		}
		if (me.__23.firstChild) {
			me.__23.insertBefore(me.__23__normal,me.__23.firstChild);
		} else {
			me.__23.appendChild(me.__23__normal);
		}
		for (var i = 0; i < me.__23.childNodes.length; i++) {
			me.__23.ggMarkerInstances.push(me.__23.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__19);
		me.__19__normal = clonedNormalElement._map_pin;
		me.__19__normalInst = clonedNormalElement;
		me.__19__normal.style.visibility='inherit';
		me.__19__normal.style.left='-12px';
		me.__19__normal.style.top='-41px';
		me.__19.ggMarkerNormal=me.__19__normal;
		me.__19.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__19);
		me.__19__active = clonedActiveElement._map_pin;
		me.__19__activeInst = clonedActiveElement;
		me.__19__active.style.visibility='hidden';
		me.__19__active.style.left='-12px';
		me.__19__active.style.top='-41px';
		me.__19.ggMarkerActive=me.__19__active;
		me.__19.ggMarkerInstances.push(clonedActiveElement);
		if (me.__19.firstChild) {
			me.__19.insertBefore(me.__19__active,me.__19.firstChild);
		} else {
			me.__19.appendChild(me.__19__active);
		}
		if (me.__19.firstChild) {
			me.__19.insertBefore(me.__19__normal,me.__19.firstChild);
		} else {
			me.__19.appendChild(me.__19__normal);
		}
		for (var i = 0; i < me.__19.childNodes.length; i++) {
			me.__19.ggMarkerInstances.push(me.__19.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__18);
		me.__18__normal = clonedNormalElement._map_pin;
		me.__18__normalInst = clonedNormalElement;
		me.__18__normal.style.visibility='inherit';
		me.__18__normal.style.left='-12px';
		me.__18__normal.style.top='-41px';
		me.__18.ggMarkerNormal=me.__18__normal;
		me.__18.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__18);
		me.__18__active = clonedActiveElement._map_pin;
		me.__18__activeInst = clonedActiveElement;
		me.__18__active.style.visibility='hidden';
		me.__18__active.style.left='-12px';
		me.__18__active.style.top='-41px';
		me.__18.ggMarkerActive=me.__18__active;
		me.__18.ggMarkerInstances.push(clonedActiveElement);
		if (me.__18.firstChild) {
			me.__18.insertBefore(me.__18__active,me.__18.firstChild);
		} else {
			me.__18.appendChild(me.__18__active);
		}
		if (me.__18.firstChild) {
			me.__18.insertBefore(me.__18__normal,me.__18.firstChild);
		} else {
			me.__18.appendChild(me.__18__normal);
		}
		for (var i = 0; i < me.__18.childNodes.length; i++) {
			me.__18.ggMarkerInstances.push(me.__18.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__17);
		me.__17__normal = clonedNormalElement._map_pin;
		me.__17__normalInst = clonedNormalElement;
		me.__17__normal.style.visibility='inherit';
		me.__17__normal.style.left='-12px';
		me.__17__normal.style.top='-41px';
		me.__17.ggMarkerNormal=me.__17__normal;
		me.__17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__17);
		me.__17__active = clonedActiveElement._map_pin;
		me.__17__activeInst = clonedActiveElement;
		me.__17__active.style.visibility='hidden';
		me.__17__active.style.left='-12px';
		me.__17__active.style.top='-41px';
		me.__17.ggMarkerActive=me.__17__active;
		me.__17.ggMarkerInstances.push(clonedActiveElement);
		if (me.__17.firstChild) {
			me.__17.insertBefore(me.__17__active,me.__17.firstChild);
		} else {
			me.__17.appendChild(me.__17__active);
		}
		if (me.__17.firstChild) {
			me.__17.insertBefore(me.__17__normal,me.__17.firstChild);
		} else {
			me.__17.appendChild(me.__17__normal);
		}
		for (var i = 0; i < me.__17.childNodes.length; i++) {
			me.__17.ggMarkerInstances.push(me.__17.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__16);
		me.__16__normal = clonedNormalElement._map_pin;
		me.__16__normalInst = clonedNormalElement;
		me.__16__normal.style.visibility='inherit';
		me.__16__normal.style.left='-12px';
		me.__16__normal.style.top='-41px';
		me.__16.ggMarkerNormal=me.__16__normal;
		me.__16.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__16);
		me.__16__active = clonedActiveElement._map_pin;
		me.__16__activeInst = clonedActiveElement;
		me.__16__active.style.visibility='hidden';
		me.__16__active.style.left='-12px';
		me.__16__active.style.top='-41px';
		me.__16.ggMarkerActive=me.__16__active;
		me.__16.ggMarkerInstances.push(clonedActiveElement);
		if (me.__16.firstChild) {
			me.__16.insertBefore(me.__16__active,me.__16.firstChild);
		} else {
			me.__16.appendChild(me.__16__active);
		}
		if (me.__16.firstChild) {
			me.__16.insertBefore(me.__16__normal,me.__16.firstChild);
		} else {
			me.__16.appendChild(me.__16__normal);
		}
		for (var i = 0; i < me.__16.childNodes.length; i++) {
			me.__16.ggMarkerInstances.push(me.__16.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__22);
		me.__22__normal = clonedNormalElement._map_pin;
		me.__22__normalInst = clonedNormalElement;
		me.__22__normal.style.visibility='inherit';
		me.__22__normal.style.left='-12px';
		me.__22__normal.style.top='-41px';
		me.__22.ggMarkerNormal=me.__22__normal;
		me.__22.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__22);
		me.__22__active = clonedActiveElement._map_pin;
		me.__22__activeInst = clonedActiveElement;
		me.__22__active.style.visibility='hidden';
		me.__22__active.style.left='-12px';
		me.__22__active.style.top='-41px';
		me.__22.ggMarkerActive=me.__22__active;
		me.__22.ggMarkerInstances.push(clonedActiveElement);
		if (me.__22.firstChild) {
			me.__22.insertBefore(me.__22__active,me.__22.firstChild);
		} else {
			me.__22.appendChild(me.__22__active);
		}
		if (me.__22.firstChild) {
			me.__22.insertBefore(me.__22__normal,me.__22.firstChild);
		} else {
			me.__22.appendChild(me.__22__normal);
		}
		for (var i = 0; i < me.__22.childNodes.length; i++) {
			me.__22.ggMarkerInstances.push(me.__22.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__31);
		me.__31__normal = clonedNormalElement._map_pin;
		me.__31__normalInst = clonedNormalElement;
		me.__31__normal.style.visibility='inherit';
		me.__31__normal.style.left='-12px';
		me.__31__normal.style.top='-41px';
		me.__31.ggMarkerNormal=me.__31__normal;
		me.__31.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__31);
		me.__31__active = clonedActiveElement._map_pin;
		me.__31__activeInst = clonedActiveElement;
		me.__31__active.style.visibility='hidden';
		me.__31__active.style.left='-12px';
		me.__31__active.style.top='-41px';
		me.__31.ggMarkerActive=me.__31__active;
		me.__31.ggMarkerInstances.push(clonedActiveElement);
		if (me.__31.firstChild) {
			me.__31.insertBefore(me.__31__active,me.__31.firstChild);
		} else {
			me.__31.appendChild(me.__31__active);
		}
		if (me.__31.firstChild) {
			me.__31.insertBefore(me.__31__normal,me.__31.firstChild);
		} else {
			me.__31.appendChild(me.__31__normal);
		}
		for (var i = 0; i < me.__31.childNodes.length; i++) {
			me.__31.ggMarkerInstances.push(me.__31.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__15);
		me.__15__normal = clonedNormalElement._map_pin;
		me.__15__normalInst = clonedNormalElement;
		me.__15__normal.style.visibility='inherit';
		me.__15__normal.style.left='-12px';
		me.__15__normal.style.top='-41px';
		me.__15.ggMarkerNormal=me.__15__normal;
		me.__15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__15);
		me.__15__active = clonedActiveElement._map_pin;
		me.__15__activeInst = clonedActiveElement;
		me.__15__active.style.visibility='hidden';
		me.__15__active.style.left='-12px';
		me.__15__active.style.top='-41px';
		me.__15.ggMarkerActive=me.__15__active;
		me.__15.ggMarkerInstances.push(clonedActiveElement);
		if (me.__15.firstChild) {
			me.__15.insertBefore(me.__15__active,me.__15.firstChild);
		} else {
			me.__15.appendChild(me.__15__active);
		}
		if (me.__15.firstChild) {
			me.__15.insertBefore(me.__15__normal,me.__15.firstChild);
		} else {
			me.__15.appendChild(me.__15__normal);
		}
		for (var i = 0; i < me.__15.childNodes.length; i++) {
			me.__15.ggMarkerInstances.push(me.__15.childNodes[i]);
		}
		me.__10.logicBlock_visible();
		me.__11.logicBlock_visible();
		me.__8.logicBlock_visible();
		me.__20.logicBlock_visible();
		me.__5.logicBlock_visible();
		me.__30.logicBlock_visible();
		me.__3.logicBlock_visible();
		me.__1.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-41px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-41px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__6.logicBlock_position();
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible();
		me.__6.logicBlock_textcolor();
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._cpc.logicBlock_visible();
			me._bpc.logicBlock_visible();
			me._c6.logicBlock_visible();
			me._b0.logicBlock_visible();
			me._c.logicBlock_visible();
			me._b.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__90.logicBlock_visible();
			me.__86.logicBlock_position();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__69.logicBlock_visible();
			me._cpc.logicBlock_visible();
			me._c41__normalInst.ggEvent_changenode();
			me._c41__activeInst.ggEvent_changenode();
			me._c31__normalInst.ggEvent_changenode();
			me._c31__activeInst.ggEvent_changenode();
			me._c22__normalInst.ggEvent_changenode();
			me._c22__activeInst.ggEvent_changenode();
			me._c2___normalInst.ggEvent_changenode();
			me._c2___activeInst.ggEvent_changenode();
			me._c17__normalInst.ggEvent_changenode();
			me._c17__activeInst.ggEvent_changenode();
			me._c16__normalInst.ggEvent_changenode();
			me._c16__activeInst.ggEvent_changenode();
			me._c111__normalInst.ggEvent_changenode();
			me._c111__activeInst.ggEvent_changenode();
			me._c15__normalInst.ggEvent_changenode();
			me._c15__activeInst.ggEvent_changenode();
			me._c14__normalInst.ggEvent_changenode();
			me._c14__activeInst.ggEvent_changenode();
			me._c13__normalInst.ggEvent_changenode();
			me._c13__activeInst.ggEvent_changenode();
			me._c12__normalInst.ggEvent_changenode();
			me._c12__activeInst.ggEvent_changenode();
			me._c10__normalInst.ggEvent_changenode();
			me._c10__activeInst.ggEvent_changenode();
			me._c9__normalInst.ggEvent_changenode();
			me._c9__activeInst.ggEvent_changenode();
			me._c21__normalInst.ggEvent_changenode();
			me._c21__activeInst.ggEvent_changenode();
			me._c8__normalInst.ggEvent_changenode();
			me._c8__activeInst.ggEvent_changenode();
			me._c110__normalInst.ggEvent_changenode();
			me._c110__activeInst.ggEvent_changenode();
			me._c7__normalInst.ggEvent_changenode();
			me._c7__activeInst.ggEvent_changenode();
			me._c_11__normalInst.ggEvent_changenode();
			me._c_11__activeInst.ggEvent_changenode();
			me._bpc.logicBlock_visible();
			me.__81__normalInst.ggEvent_changenode();
			me.__81__activeInst.ggEvent_changenode();
			me.__219__normalInst.ggEvent_changenode();
			me.__219__activeInst.ggEvent_changenode();
			me.__80__normalInst.ggEvent_changenode();
			me.__80__activeInst.ggEvent_changenode();
			me.__218__normalInst.ggEvent_changenode();
			me.__218__activeInst.ggEvent_changenode();
			me.__410__normalInst.ggEvent_changenode();
			me.__410__activeInst.ggEvent_changenode();
			me.__79__normalInst.ggEvent_changenode();
			me.__79__activeInst.ggEvent_changenode();
			me.__78__normalInst.ggEvent_changenode();
			me.__78__activeInst.ggEvent_changenode();
			me.__77__normalInst.ggEvent_changenode();
			me.__77__activeInst.ggEvent_changenode();
			me.__76__normalInst.ggEvent_changenode();
			me.__76__activeInst.ggEvent_changenode();
			me.__217__normalInst.ggEvent_changenode();
			me.__217__activeInst.ggEvent_changenode();
			me.__315__normalInst.ggEvent_changenode();
			me.__315__activeInst.ggEvent_changenode();
			me.__75__normalInst.ggEvent_changenode();
			me.__75__activeInst.ggEvent_changenode();
			me.__74__normalInst.ggEvent_changenode();
			me.__74__activeInst.ggEvent_changenode();
			me.__216__normalInst.ggEvent_changenode();
			me.__216__activeInst.ggEvent_changenode();
			me.__215__normalInst.ggEvent_changenode();
			me.__215__activeInst.ggEvent_changenode();
			me.__73__normalInst.ggEvent_changenode();
			me.__73__activeInst.ggEvent_changenode();
			me.__2_0__normalInst.ggEvent_changenode();
			me.__2_0__activeInst.ggEvent_changenode();
			me.__2___normalInst.ggEvent_changenode();
			me.__2___activeInst.ggEvent_changenode();
			me.__72__normalInst.ggEvent_changenode();
			me.__72__activeInst.ggEvent_changenode();
			me.__68.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__52.logicBlock_position();
			me._c6.logicBlock_visible();
			me._b0.logicBlock_visible();
			me.__56.ggUpdateConditionNodeChange();
			me.__50.logicBlock_visible();
			me.__51.logicBlock_visible();
			me._rectangle_4.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
			me.__214.logicBlock_backgroundcolor();
			me.__111.logicBlock_position();
			me.__311.logicBlock_backgroundcolor();
			me.__312.logicBlock_position();
			me.__45.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
			me.__43.logicBlock_visible();
			me.__34.logicBlock_position();
			me.__34.logicBlock_visible();
			me.__35.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__14.logicBlock_visible();
			me._c.logicBlock_visible();
			me._c5__normalInst.ggEvent_changenode();
			me._c5__activeInst.ggEvent_changenode();
			me._c40__normalInst.ggEvent_changenode();
			me._c40__activeInst.ggEvent_changenode();
			me._c30__normalInst.ggEvent_changenode();
			me._c30__activeInst.ggEvent_changenode();
			me._c20__normalInst.ggEvent_changenode();
			me._c20__activeInst.ggEvent_changenode();
			me._c4__normalInst.ggEvent_changenode();
			me._c4__activeInst.ggEvent_changenode();
			me.__110__normalInst.ggEvent_changenode();
			me.__110__activeInst.ggEvent_changenode();
			me._c3__normalInst.ggEvent_changenode();
			me._c3__activeInst.ggEvent_changenode();
			me._c11__normalInst.ggEvent_changenode();
			me._c11__activeInst.ggEvent_changenode();
			me._c2__normalInst.ggEvent_changenode();
			me._c2__activeInst.ggEvent_changenode();
			me._c1__normalInst.ggEvent_changenode();
			me._c1__activeInst.ggEvent_changenode();
			me._c0__normalInst.ggEvent_changenode();
			me._c0__activeInst.ggEvent_changenode();
			me.__33__normalInst.ggEvent_changenode();
			me.__33__activeInst.ggEvent_changenode();
			me.__32__normalInst.ggEvent_changenode();
			me.__32__activeInst.ggEvent_changenode();
			me.__212__normalInst.ggEvent_changenode();
			me.__212__activeInst.ggEvent_changenode();
			me._b.logicBlock_visible();
			me.__211__normalInst.ggEvent_changenode();
			me.__211__activeInst.ggEvent_changenode();
			me.__210__normalInst.ggEvent_changenode();
			me.__210__activeInst.ggEvent_changenode();
			me.__29__normalInst.ggEvent_changenode();
			me.__29__activeInst.ggEvent_changenode();
			me.__28__normalInst.ggEvent_changenode();
			me.__28__activeInst.ggEvent_changenode();
			me.__40__normalInst.ggEvent_changenode();
			me.__40__activeInst.ggEvent_changenode();
			me.__27__normalInst.ggEvent_changenode();
			me.__27__activeInst.ggEvent_changenode();
			me.__26__normalInst.ggEvent_changenode();
			me.__26__activeInst.ggEvent_changenode();
			me.__25__normalInst.ggEvent_changenode();
			me.__25__activeInst.ggEvent_changenode();
			me.__24__normalInst.ggEvent_changenode();
			me.__24__activeInst.ggEvent_changenode();
			me.__23__normalInst.ggEvent_changenode();
			me.__23__activeInst.ggEvent_changenode();
			me.__19__normalInst.ggEvent_changenode();
			me.__19__activeInst.ggEvent_changenode();
			me.__18__normalInst.ggEvent_changenode();
			me.__18__activeInst.ggEvent_changenode();
			me.__17__normalInst.ggEvent_changenode();
			me.__17__activeInst.ggEvent_changenode();
			me.__16__normalInst.ggEvent_changenode();
			me.__16__activeInst.ggEvent_changenode();
			me.__22__normalInst.ggEvent_changenode();
			me.__22__activeInst.ggEvent_changenode();
			me.__31__normalInst.ggEvent_changenode();
			me.__31__activeInst.ggEvent_changenode();
			me.__15__normalInst.ggEvent_changenode();
			me.__15__activeInst.ggEvent_changenode();
			me.__10.logicBlock_visible();
			me.__11.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__20.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__30.logicBlock_visible();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__6.logicBlock_textcolor();
			me.__pc.logicBlock_position();
			me.__pc.logicBlock_textcolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__90.logicBlock_visible();
			me.__86.logicBlock_position();
			me.__86.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me.__69.logicBlock_visible();
			me._cpc.logicBlock_visible();
			me._bpc.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__52.logicBlock_position();
			me._c6.logicBlock_visible();
			me._b0.logicBlock_visible();
			me.__113.ggUpdatePosition();
			me.__50.logicBlock_visible();
			me._rectangle_4.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
			me.__214.logicBlock_backgroundcolor();
			me.__111.logicBlock_position();
			me.__311.logicBlock_backgroundcolor();
			me.__312.logicBlock_position();
			me.__45.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
			me.__34.logicBlock_position();
			me.__34.logicBlock_visible();
			me.__13.logicBlock_visible();
			me._c.logicBlock_visible();
			me._b.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__3.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__.logicBlock_position();
			me.__.logicBlock_size();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__6.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__90.logicBlock_visible();
			me.__86.logicBlock_visible();
			me.__69.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__113.logicBlock_position();
			me.__50.logicBlock_visible();
			me.__34.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__3.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__.logicBlock_size();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__6.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
		});
		player.addListener('varchanged_vis_catagory', function(event) {
			me.__86.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle', function(event) {
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle2', function(event) {
			me.__214.logicBlock_backgroundcolor();
			me.__111.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle3', function(event) {
			me.__311.logicBlock_backgroundcolor();
			me.__312.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle4', function(event) {
			me.__45.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
		});
		player.addListener('varchanged_vis_hambegur', function(event) {
			me._rectangle_4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mobilecatagory', function(event) {
			me.__52.logicBlock_position();
		});
		player.addListener('varchanged_vis_mobilemenu', function(event) {
			me.__34.logicBlock_position();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
			me.__56.ggUpdate();
		});
	};
	function SkinCloner__56_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			skin.__52.style.transition='none';
			skin.__52.style.visibility='hidden';
			skin.__52.ggVisible=false;
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_5.ggUpdateText();
		});
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me._text_5);
		el=me.__57=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__57;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(26,109,255,0.392157);';
		hs+='border : 0px solid #1a66ff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.onclick=function (e) {
			if (me.__57.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me.__57);
		me.__div.appendChild(me._nodeimage_1);
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_10_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 104px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.onclick=function (e) {
			if (me._nodeimage_10.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._nodeimage_10.onmouseover=function (e) {
			me.elementMouseOver['nodeimage_10']=true;
			me.__89.logicBlock_visible();
		}
		me._nodeimage_10.onmouseout=function (e) {
			me.elementMouseOver['nodeimage_10']=false;
			me.__89.logicBlock_visible();
		}
		me._nodeimage_10.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['nodeimage_10']) {
				me.elementMouseOver['nodeimage_10']=true;
				me.__89.logicBlock_visible();
			}
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_50=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_50;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_50.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_50.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_50.ggUpdateText();
		});
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_50.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me._text_50);
		el=me.__89=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__89;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #1a66ff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['nodeimage_10'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__89.style.transition='';
				if (me.__89.ggCurrentLogicStateVisible == 0) {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
				else {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
			}
		}
		me.__89.logicBlock_visible();
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me.__89);
		me.__div.appendChild(me._nodeimage_10);
		me.__89.logicBlock_visible();
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-128;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 128px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAGHUlEQVR4nO3cb0iVVxwH8O+5hYOE0HVWrWbu2tRIrbue2IsZepy4aFhCUZBEsReNXkwWTSts+TzuRdRmk/V6izZYQVsOQ6SIfJ5iwti8adlge7FMGoNAuMEWuYb77UX3NmlXff7ce88Vfx8Q4Xqe5xzPz985z3Oe8wgwxhhjjDHGGGOMMcYYY4wxxhhjLBmhuwE+KQCmlDIPAMbGxiKJH0gph+Kfdcc/sjLduCBmU0CUlLJzbGwsYhjGg/r6+jyl1H8/VAqO4wDA0+89PT0PotFonmEYX0Sj0buYZcHJVkpKOWgYRsy2bfLDNE1qamoaAUDgoPgWOBDJAgOAiouLR/Bk2GMuWQDINM2UBGKqwICzxRULAKUqK6Zi2zYHxQUrlUOUG4ZhxMBBScoCkL'+
			'FAJHCmJKeQgWHKRVCU1l7IIoEmcNu2n375ZZomSSkHdXdENrCamppGvHZg2+HDVFVRQQCoctkyqly8mCqXLiUAVLVmDfV92+U5KPH5ROntDv08Z8eRXbsIADUXhel+Xe3/vrrWr6MNBQVUtXatp/NOGrq0CemsHIBlmiYsy3J9gBACjwd+xP26WrSsLEpapjI/HxdWleC1P/+AEO5Xh5RSMAzjATRmidaASCkbvJSvjkTQsqoUzQUvuSrfUhRGS3kZPtizx3UdHR0deVLKTi/tSiXdi4tE5G6EsC9fRtvevbiwqsRzJUuuXEXboUNoP37cVfl4VtUAcDxXFpDODLFM03Rf+PAhHFjygq+KmovCcC5dcl0+PmxpoXsOce360E3fx7asLML1m+6Pr6+vzwPg/q8lhbQFRErZMPl5xnQSzzcq8/MD1Zk4z0yUUkg8/Mq0'+
			'WZMhGwoKgh2/YkWKWpJeOid11xM68GSivV9X67uyJVeuwm19juOgpqYG0NA/WjPE7RACAFVlZeiPxXzV0x+LoaqszHV5t0NpOuicQ4a8lFd1dfj+r7991XVy9B6qa99wXd5xHBQXF9/1VVlA83VU6kd7ZyeEEPjnYXjKO/Rk+mMxhOQifPjpKdfHOI6DhQsXXvPTzqC0ZUhhYeFNL0MWALQdPIiOOyOuh67+WAxbB26g/eQnntsX36WScdoCEo1Gz/T09Hi6AWs/cQJt7x/A1oEb+PjXO9OW7bg7iq0DN3B0/37UbNoUqK1zhTIMI+ZpOTaxKtvXR1WRCG0Iv0yvP59PzUVh6lq/jpqLwtRSWkIA6Mju3X5OTfFLv7n5sEpKORjkoZJt23T1m6+p2jCo2jDo6L59dHT/e4EfVMW3Cc1JtlLKd+elQ3yLkKWrQ3Sv9i'+
			'oANnm4QUy3+Eqvtn7RvXTiSCmHvF5tpYtlWdi+fbuWy91sorJl2Irv/7V0d0g20LYFKGHS9lKGLJjclVK8WW4SBY1ZwtmRnKUrS8BbSaeU8Szh7Jie5Xc5xS9wdswoY1mi+658tlDIwGsJ2bBtdNaQUg6m63W2BL7M9S5tQ9dcX9H1y/fzkplgrj7vCCodQxdP5MEopHDo4rekUkMhBVdd/B5hagW+YQTfAKZWkPmE5430UPAxn/BaVXopeAgKzxuZ4Xo+Ac8bmeFmPuH/YZJh0wXFNE0yDOOM7jbOKcuXL69Hkn86YJomlZaW3uvq6lqku41+6N4oN6Pu7u5loVAoQkSrhRClAF4BUAigYHh4eH5rayts24ZSCpZlob29HceOHUN5efnjUCj0OxGNENEdAD/Pmzfv9vj4+O1t27b9pve3mlrWBqS3t/e5iYmJfUT0'+
			'jhBi9VTlhoeH0draCtM0nwajoqJiulPfAnA6Jyfns40bNz5MecMDysqAXLx4cZ0Q4l0Ab7spf/bsWZw7dw47d+5EY2Oj22pOAzi1efNm/+9bp0FWvkFFRIuEEG+5Ld/Y2OglEAlvEtFXXg9KN917e5NqaGi4QkSfp7MOIvpyy5Ytfemsw4+szBAAGB8f/2jBggVRIqoiokohxPqg5xRCRInoOwDXQqGQE7yVqZeVc8izzp8/n5Obm/sqgAgRlRFRCYCVAF4EkPtseSHEOBGNAhglol8A/CSEuPXo0aMfduzYMZHZ1jPGGGOMMcYYY4wxxhhjjDHGGGMsFf4F3lhxDxNGkzwAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggCurrentLogicStateScaling = -1;
		me._map_pin_active.ggCurrentLogicStateAlpha = -1;
		me._map_pin_active.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_active']) {
				me.elementMouseOver['map_pin_active']=true;
			}
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggCurrentLogicStateScaling = -1;
		me._map_pin_normal.ggCurrentLogicStateAlpha = -1;
		me._map_pin_normal.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_normal']) {
				me.elementMouseOver['map_pin_normal']=true;
			}
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
	player.addListener('timer', function() { me._map_pin_active.ggUpdateConditionTimer();
me._map_pin_normal.ggUpdateConditionTimer(); });
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node']=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		els=me.__60__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__60.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__60.ggUpdateText();
		player.addListener('changenode', function() {
			me.__60.ggUpdateText();
		});
		el.appendChild(els);
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__60.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__60.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__60.ggCurrentLogicStatePosition == 0) {
					me.__60.style.left = 'calc(50% - (50px / 2))';
					me.__60.style.bottom='0px';
				}
				else {
					me.__60.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__60.style.bottom='-28px';
				}
			}
		}
		me.__60.logicBlock_position();
		me.__60.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__60.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__60.ggCurrentLogicStateSize = newLogicStateSize;
				me.__60.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__60.ggCurrentLogicStateSize == 0) {
					me.__60.style.width='95px';
					me.__60.style.height='25px';
					me.__60.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__60);
				}
				else if (me.__60.ggCurrentLogicStateSize == 1) {
					me.__60.style.width='60px';
					me.__60.style.height='25px';
					me.__60.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__60);
				}
				else if (me.__60.ggCurrentLogicStateSize == 2) {
					me.__60.style.width='60px';
					me.__60.style.height='25px';
					me.__60.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__60);
				}
				else {
					me.__60.style.width='50px';
					me.__60.style.height='25px';
					me.__60.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_size();
		me.__60.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__60.ggCurrentLogicStateVisible == 0) {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
				else if (me.__60.ggCurrentLogicStateVisible == 1) {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
				else {
					me.__60.style.visibility="hidden";
					me.__60.ggVisible=false;
				}
			}
		}
		me.__60.logicBlock_visible();
		me.__60.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__60.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__60.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__60.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__60.ggCurrentLogicStateBackgroundColor == 0) {
					me.__60.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__60.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__60.logicBlock_backgroundcolor();
		me.__60.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__60.ggCurrentLogicStateText != newLogicStateText) {
				me.__60.ggCurrentLogicStateText = newLogicStateText;
				me.__60.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__60.ggCurrentLogicStateText == 0) {
					if (me.__60.ggUpdateText) {
					me.__60.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__60.ggUpdateText();
					} else {
						if (me.__60.ggUpdatePosition) me.__60.ggUpdatePosition();
					}
				}
				else {
					if (me.__60.ggUpdateText) {
					me.__60.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__60.ggUpdateText();
					} else {
						if (me.__60.ggUpdatePosition) me.__60.ggUpdatePosition();
					}
				}
			}
		}
		me.__60.logicBlock_text();
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__59.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__59.ggUpdateText();
		player.addListener('changenode', function() {
			me.__59.ggUpdateText();
		});
		el.appendChild(els);
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__59.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.left = 'calc(50% - (60px / 2))';
					me.__59.style.bottom='0px';
				}
				else if (me.__59.ggCurrentLogicStatePosition == 1) {
					me.__59.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__59.style.bottom='40px';
				}
				else {
					me.__59.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__59.style.bottom='-40px';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__59.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__59.ggCurrentLogicStateSize = newLogicStateSize;
				me.__59.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__59.ggCurrentLogicStateSize == 0) {
					me.__59.style.width='50px';
					me.__59.style.height='25px';
					me.__59.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__59);
				}
				else if (me.__59.ggCurrentLogicStateSize == 1) {
					me.__59.style.width='50px';
					me.__59.style.height='25px';
					me.__59.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__59);
				}
				else if (me.__59.ggCurrentLogicStateSize == 2) {
					me.__59.style.width='95px';
					me.__59.style.height='25px';
					me.__59.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__59);
				}
				else {
					me.__59.style.width='60px';
					me.__59.style.height='30px';
					me.__59.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__59);
				}
			}
		}
		me.__59.logicBlock_size();
		me.__59.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
				else if (me.__59.ggCurrentLogicStateVisible == 1) {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
				else {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__59.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__59.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__59.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__59.ggCurrentLogicStateBackgroundColor == 0) {
					me.__59.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__59.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__59.logicBlock_backgroundcolor();
		me.__59.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__59.ggCurrentLogicStateText != newLogicStateText) {
				me.__59.ggCurrentLogicStateText = newLogicStateText;
				me.__59.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__59.ggCurrentLogicStateText == 0) {
					if (me.__59.ggUpdateText) {
					me.__59.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__59.ggUpdateText();
					} else {
						if (me.__59.ggUpdatePosition) me.__59.ggUpdatePosition();
					}
				}
				else {
					if (me.__59.ggUpdateText) {
					me.__59.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__59.ggUpdateText();
					} else {
						if (me.__59.ggUpdatePosition) me.__59.ggUpdatePosition();
					}
				}
			}
		}
		me.__59.logicBlock_text();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__59);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__60.logicBlock_position();
		me.__60.logicBlock_size();
		me.__60.logicBlock_visible();
		me.__60.logicBlock_backgroundcolor();
		me.__60.logicBlock_text();
		me.__59.logicBlock_position();
		me.__59.logicBlock_size();
		me.__59.logicBlock_visible();
		me.__59.logicBlock_backgroundcolor();
		me.__59.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__60.logicBlock_size();
				me.__60.logicBlock_backgroundcolor();
				me.__60.logicBlock_text();
				me.__59.logicBlock_size();
				me.__59.logicBlock_backgroundcolor();
				me.__59.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__60.logicBlock_size();
				me.__60.logicBlock_backgroundcolor();
				me.__60.logicBlock_text();
				me.__59.logicBlock_size();
				me.__59.logicBlock_backgroundcolor();
				me.__59.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__60.logicBlock_size();
				me.__60.logicBlock_visible();
				me.__60.logicBlock_backgroundcolor();
				me.__60.logicBlock_text();
				me.__59.logicBlock_position();
				me.__59.logicBlock_size();
				me.__59.logicBlock_visible();
				me.__59.logicBlock_backgroundcolor();
				me.__59.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__60.logicBlock_position();
				me.__59.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__60.logicBlock_size();
				me.__60.logicBlock_visible();
				me.__59.logicBlock_size();
				me.__59.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__220.ggUpdateConditionTimer();
		me.__221.ggUpdateConditionTimer();
		me.__316.ggUpdateConditionTimer();
		me.__317.ggUpdateConditionTimer();
		me.__411.ggUpdateConditionTimer();
		me.__412.ggUpdateConditionTimer();
		me.__114.ggUpdateConditionTimer();
		me.__115.ggUpdateConditionTimer();
		me.__.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .menu-bar { background-image: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 / 10%); }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};