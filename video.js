var svgStop = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id=svgStop"></path></svg>';
var svgPlay = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="svgPlay"></path></svg>';
var svgStartFull = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-83"></use><path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="svgStartFull1"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-84"></use><path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="svgStartFull2"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-85"></use><path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="svgStartFull2"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-86"></use><path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="svgStartFull4"></path></g></svg>'
var svgStopFull = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-2"><path class="ytp-svg-fill" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z" id="svgStopFull1"></path></g><g class="ytp-fullscreen-button-corner-3"><path class="ytp-svg-fill" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z" id="svgStopFull2"></path></g><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-91"></use><path class="ytp-svg-fill" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z" id="svgStopFull3"></path></g><g class="ytp-fullscreen-button-corner-1"><path class="ytp-svg-fill" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" id="svgStopFull4"></path></g></svg>'
var svgPinP = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#000" id="svgPinP"></path></svg>'
var svgBar = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><circle cx="18" cy="18" r="10"  fill="red" /></svg>';
var btnStyle = "width : 30px;margin-Left : 10px;margin-Top : 0px;padding : 0px;background-color: Transparent; background-repeat:no-repeat;border:0px solid #000000; cursor:pointer;overflow: hidden;outline:none;";

var player = {};

player.add = function (src,width,height,fps){

	var barPosByBtm = 45;
	var menuPosByBtm = 32;

    var divMain = document.createElement("div");
	divMain.id = "divMain";
	divMain.style.width = width;
	divMain.style.height = height;
	divMain.style.position = "relative";
    document.body.appendChild(divMain);

    var video = document.createElement("video");
	video.id = "video";
    video.src = src;
    video.autoplay = "autoplay";
	video.style.display = "none";
    divMain.appendChild(video);

    var video1 = document.createElement("video");
	video1.id = "video1";
    video1.src = src;
	video1.style.display = "none";
    divMain.appendChild(video);

    var canvas = document.createElement("canvas");
	canvas.id = "canvas";
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
	canvas.style.border = "1px solid #000000";
    divMain.appendChild(canvas);

    var canvas1 = document.createElement("canvas");
	canvas1.id = "canvas1";
	canvas1.style.width = "100px";
	canvas1.style.height = "80px";
	canvas1.style.border = "1px solid #000000";
	canvas1.style.display = "none";
	canvas1.style.position = "absolute";
	canvas1.style.left = 20 + "px";
    divMain.appendChild(canvas1);

    var labelTime = document.createElement("label");
	labelTime.id = "labelTime";
	labelTime.style.display = "block";
	labelTime.style.position = "absolute";
	divMain.appendChild(labelTime);

    var barButton = document.createElement("button");
	barButton.id = "barButton";
	barButton.innerHTML = svgBar;
	barButton.style.left = "5px";
	barButton.style.display = "none";
	barButton.style.position = "absolute";
	barButton.style = btnStyle + ";position:absolute;display:none;left:5px";
	divMain.appendChild(barButton);

    var barOut = document.createElement("div");
	barOut.id = "barOut";
	barOut.style.top = (getDisplayHeight() - barPosByBtm) + "px";
    barOut.style.width = width;
	barOut.style.height = "5px";
	barOut.style.position = "absolute";
	barOut.style.display = "none";
	barOut.style.opacity = "0.5";
	barOut.style.backgroundColor = "#808080";
	barOut.style.cursor = "pointer";
    divMain.appendChild(barOut);

    var bar = document.createElement("div");
	bar.id = "bar";
    bar.style.backgroundColor = "red";
    bar.style.width = "0%";
	bar.style.height = "4.5px";
	bar.style.opacity = "0.5";
	bar.style.cursor = "pointer";
    barOut.appendChild(bar);

    var menu = document.createElement("div");
	menu.id = "menu";
	menu.style.top = (getDisplayHeight() - menuPosByBtm) + "px";
	menu.style.position = "absolute";
	menu.style.display = "none";
    divMain.appendChild(menu);

    var playButton = document.createElement("button");
	playButton.id = "playButton";
	playButton.innerHTML = svgPlay;
	playButton.title = "Play";
	playButton.style = btnStyle;
    menu.appendChild(playButton);

    var fullButton = document.createElement("button");
	fullButton.id = "fullButton";
	fullButton.innerHTML = svgStartFull;
	fullButton.title = "Full Screen";
	fullButton.style = btnStyle;
    menu.appendChild(fullButton);

    var inButton = document.createElement("button");
	inButton.id = "inButton";
	inButton.innerHTML = svgPinP;
	inButton.title = "Picture In Picture";
	inButton.style = btnStyle;
    menu.appendChild(inButton);

    var labelPlay = document.createElement("label");
	labelPlay.id = "labelPlay";
	labelPlay.innerHTML = "00:00/00:00";
	labelPlay.style.marginLeft = "15px";
	labelPlay.style.position = "absolute";
	labelPlay.style.top = "50%";
	labelPlay.style.transform = "translate(0%, -50%)";
    menu.appendChild(labelPlay);

	canvas1.style.top = (getDisplayHeight() - menuPosByBtm - 120) + "px";
	barButton.style.top = (getDisplayHeight() - barPosByBtm - 12) + "px";
	labelTime.style.top = (getDisplayHeight() - menuPosByBtm - 35) + "px";

	function getDisPlayWidth(){
		var w = document.fullscreenElement?screen.width:width.replace("px","");
		return w;
	}

	function getDisplayHeight(){
		var h = document.fullscreenElement?screen.height:height.replace("px","");
		return h;
	}

	function secToMin(time){
		var minutes = "0" + Math.floor(time / 60);
		var seconds = "0" + (time - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);
	}

    video.addEventListener("timeupdate", function(event){
        bar.style.width = (video.currentTime * 100/ video.duration)  + "%";
		var barLeft = ((video.currentTime / video.duration) * getDisPlayWidth() - 20);
		barButton.style.left = (barLeft + 30 > getDisPlayWidth()?(getDisPlayWidth() - 30):barLeft)+ "px";
		labelPlay.innerHTML = secToMin(parseInt(video.currentTime)) + "/" + secToMin(parseInt(video.duration));

    })

    inButton.addEventListener("click", function(event){
        if(document.pictureInPictureElement){
            document.exitPictureInPicture();
        }else{
            if(document.pictureInPictureEnabled){
                video.requestPictureInPicture();
            }
        }
    })

    fullButton.addEventListener("click", function(event){
        if(!document.fullscreenElement){
			canvas.width = screen.width;
			canvas.height = screen.height;
            divMain.requestFullscreen();
			fullButton.innerHTML = svgStopFull;
			barOut.style.width = screen.width + "px";

			barOut.style.top = (screen.height - barPosByBtm) + "px";
			menu.style.top = (screen.height - menuPosByBtm) + "px";

			canvas1.style.top = (screen.height - barPosByBtm - 120) + "px";
			barButton.style.top = (screen.height - barPosByBtm - 12) + "px";
			labelTime.style.top = (screen.height - barPosByBtm - 35) + "px";

        }else{
			canvas.width = getDisPlayWidth();
			canvas.height =  getDisplayHeight();
			document.exitFullscreen();
			fullButton.innerHTML = svgStartFull;
			barOut.style.width = getDisPlayWidth() + "px";

			barOut.style.top = (getDisplayHeight()- barPosByBtm) + "px";
			menu.style.top = (getDisplayHeight() - menuPosByBtm) + "px";

			canvas1.style.top = (getDisplayHeight() - menuPosByBtm - 120) + "px";
			barButton.style.top = (getDisplayHeight() - barPosByBtm - 12) + "px";
			labelTime.style.top = (getDisplayHeight() - menuPosByBtm - 35) + "px";

        }
    })

    divMain.addEventListener("fullscreenchange", function(event){
        if(!document.fullscreenElement){
			canvas.width = getDisPlayWidth();
			canvas.height =  getDisplayHeight();
			fullButton.innerHTML = svgStartFull;
			barOut.style.width = getDisPlayWidth() + "px";
			fullButton.innerHTML = svgStartFull;

			barOut.style.top = (getDisplayHeight() - barPosByBtm) + "px";
			menu.style.top = (getDisplayHeight() - menuPosByBtm) + "px";

			canvas1.style.top = (getDisplayHeight() - menuPosByBtm - 120) + "px";
			barButton.style.top = (getDisplayHeight() - barPosByBtm - 12) + "px";
			labelTime.style.top = (getDisplayHeight() - menuPosByBtm - 35) + "px";

        } else{
			fullButton.innerHTML = svgStopFull;
			barOut.style.width = getDisPlayWidth() + "px";
		}
    })

	barOut.addEventListener("mouseover", function(event){
		if(barButton.style.display != "block"){
			barButton.style.display = "block";
			labelTime.style.display = "block";
		}
		var labLeft = event.clientX - 20;
		var cMouseTime = (labLeft / getDisPlayWidth()) * video.duration;
		labelTime.innerHTML = secToMin(parseInt(cMouseTime));
		if(labLeft + 90 > (getDisPlayWidth())) labLeft = getDisPlayWidth() - 90;
		if(labLeft < 50) labLeft = 50;
		labelTime.style.left = labLeft + "px";

		var ctx1 = canvas1.getContext("2d");
        ctx1.drawImage(video1, 0, 0, canvas1.width, canvas1.height);
		video1.currentTime = ((event.clientX -5) / getDisPlayWidth()) * video.duration;

		var canLeft =  event.clientX - 50;
		if(canLeft + 120 > getDisPlayWidth()) canLeft = getDisPlayWidth() - 120;
		if(canLeft < 20) canLeft = 20;
		canvas1.style.left = canLeft + "px";
		canvas1.style.display = "block";
		
		var barLeft = ((video.currentTime / video.duration) * getDisPlayWidth() - 20);
		barButton.style.left = (barLeft + 30 > getDisPlayWidth()?(getDisPlayWidth() - 30):barLeft)+ "px";
    })

	barOut.addEventListener("mousemove", function(event){
		if(barButton.style.display != "block"){
			labelTime.style.display = "block";
			barButton.style.display = "block";
		}
		var labLeft = event.clientX - 20;
		var cMouseTime = (labLeft / getDisPlayWidth()) * video.duration;
		labelTime.innerHTML = secToMin(parseInt(cMouseTime));
		if(labLeft + 90 > (getDisPlayWidth())) labLeft = getDisPlayWidth() - 90;
		if(labLeft < 50) labLeft = 50;
		labelTime.style.left = labLeft  + "px";

		var ctx1 = canvas1.getContext("2d");
        ctx1.drawImage(video1, 0, 0, canvas1.width, canvas1.height);
		video1.currentTime = ((event.clientX - 5) / getDisPlayWidth()) * video.duration;

		var canLeft =  event.clientX - 50;
		if(canLeft + 120 > getDisPlayWidth()) canLeft = getDisPlayWidth() - 120;
		if(canLeft < 20) canLeft = 20;
		canvas1.style.left = canLeft + "px";
		canvas1.style.display = "block";
		
		var barLeft = ((video.currentTime / video.duration) * getDisPlayWidth() - 20);
		barButton.style.left = (barLeft + 30 > getDisPlayWidth()?(getDisPlayWidth() - 30):barLeft)+ "px";

    })

	barOut.addEventListener("mouseout", function(event){
		barButton.style.display = "none";
		labelTime.style.display = "none";
		canvas1.style.display = "none";
    })

	barOut.addEventListener("click", function(event){
		var pos = event.clientX;
		video.currentTime = (pos / getDisPlayWidth()) * video.duration;
    })

    var play = false;
    playButton.addEventListener("click", function(event){
        if(play){
			video.pause();
			menu.style.display = "block";
			barOut.style.display = "block";
        }else{
            video.play();
        }
    })

    barButton.addEventListener("click", function(event){
        if(play){
			video.pause();
			menu.style.display = "block";
			barOut.style.display = "block";
        }else{
            video.play();
        }
    })

    barButton.addEventListener("mouseup", function(event){
        if(play){
			video.pause();
			menu.style.display = "block";
			barOut.style.display = "block";
        }else{
            video.play();
        }
    })

    canvas.addEventListener("click", function(event){
        if(play){
            video.pause();
        }else{
            video.play();
        }
    })

    canvas.addEventListener("mouseover", function(event){
		if(menu.style.display != "block"){
			menu.style.display = "block"
			barOut.style.display = "block"
			setTimeout(function(){
				menu.style.display = "none"
				barOut.style.display = "none"
				barButton.style.display = "none"
				labelTime.style.display = "none";
			}, 5000);
		}
    })

    canvas.addEventListener("mousemove", function(event){
		if(menu.style.display != "block"){
			menu.style.display = "block";
			barOut.style.display = "block";
			setTimeout(function(){
				menu.style.display = "none";
				barOut.style.display = "none";
				barButton.style.display = "none";
				labelTime.style.display = "none";
			}, 5000);
		}
    })

	canvas.addEventListener("mouseout", function(event){
		try{
			var eId =  event.toElement.id;
			if( eId !== undefined){
				if (eId != "svgStop" && eId != "svgPlay" && eId != "svgPinP" && eId != "svgBar"
				&& eId != "svgStartFull1" && eId != "svgStartFull2" && eId != "svgStartFull3" && eId != "svgStartFull4"
				&& eId != "svgStopFull1" && eId != "svgStopFull2" && eId != "svgStopFull3" && eId != "svgStopFull4"
				&& eId != "menu" && eId !="barOut" && eId != "bar" && eId != "canvas" && eId != "labelPlay"
				&& eId != "labelTime" && eId != "playButton"  && eId != "fullButton" && eId != "inButton"
				&& eId != "" ) {
					menu.style.display = "none";
					barOut.style.display = "none";
					barButton.style.display = "none";
					labelTime.style.display = "none";
				}
			}
		}catch(e){
			
		}	

	})

    document.body.onkeypress = function(event){
        if(event.keyCode == 32){
            if(play){
                video.pause();
            }else{
                video.play();
            }
        }
    }

    video.addEventListener("play", function(event){
        play = true;
		barOut.style.display = "block";
		playButton.title = "Stop";
		playButton.innerHTML = svgStop;
    })

    video.addEventListener("pause", function(event){
        play = false;
        playButton.title = "Play";
		playButton.innerHTML = svgPlay;
    })

    video.addEventListener("ended", function(event){
        play = false;
		playButton.title = "Play";
		playButton.innerHTML = svgPlay;
    })

    var ctx = canvas.getContext("2d");
	var isImage = false;

    window.setInterval(function (event) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }, 1000 / fps);


}
