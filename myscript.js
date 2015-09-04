document.getElementById("player-api").onfocus = function(){
if(document.getElementById("movie_player") != null)
	document.getElementById("movie_player").focus();}

var replayOnceBtn = document.createElement("button");
replayOnceBtn.setAttribute("class", "ytp-button");
replayOnceBtn.setAttribute("aria-live", "assertive");
replayOnceBtn.setAttribute("title", "Replay Once");
replayOnceBtn.style["float"] = "right";
replayOnceBtn.style["text-align"] = "center";
replayOnceBtn.innerHTML = "<svg fill=\"white\" width=\"90%\" height=\"100%\" viewBox=\"0 0 36 36\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M26.466,21.04 L30.966,16 L27.8,16 C26.873,11.435 22.841,8 18.001,8 C12.474,8 8,12.477 8,18 C8,23.523 12.474,28 18.001,28 C21.181,28 24.009,26.511 25.841,24.197 L24.005,22.361 C22.652,24.217 20.471,25.427 18.001,25.427 C13.899,25.427 10.569,22.101 10.569,18 C10.569,13.898 13.899,10.572 18.001,10.572 C21.407,10.572 24.268,12.871 25.142,16 L21.966,16 L26.466,21.04\"><animate></animate></path><text x=\"15\" y=\"22\">1</text></svg>";
replayOnceBtn.onclick = function(){
	//if not replaying once
	if(document.getElementsByTagName("video")[0].onended == null) {
		document.getElementsByTagName("video")[0].onended = function(){document.getElementsByClassName("ytp-play-button")[0].click();}
		replayOnceBtn.setAttribute("style", "float:right; text-align:center; -webkit-filter:drop-shadow( 0px 0px 2px #0ff );");
	}
	//if replaying once
	else {
		document.getElementsByTagName("video")[0].onended = null;
		replayOnceBtn.setAttribute("style", "float:right; text-align:center;");
	}
}
document.getElementsByClassName("ytp-chrome-controls")[0].appendChild(replayOnceBtn);

document.getElementById("movie_player").onkeydown = function(e){
	if(e.keyCode == 82)
		replayOnceBtn.click();
}