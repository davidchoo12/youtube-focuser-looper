document.getElementById('sourceCodeLink').onclick = function(){chrome.tabs.create({url:"https://github.com/davidchoo12/youtube-focuser-looper"});};
document.getElementById('bugReportLink').onclick = function(){chrome.tabs.create({url:"https://github.com/davidchoo12/youtube-focuser-looper/issues"});};
// chrome.tabs.executeScript({
// 	code: "window.getComputedStyle(window.getSelection().getRangeAt(0).startContainer.parentNode).fontFamily;"
// }, function(selectionFont){
// 	document.getElementById('selectedFontStart').innerHTML = selectionFont;
// });
// chrome.tabs.executeScript({
// 	code: "window.getComputedStyle(window.getSelection().getRangeAt(0).endContainer.parentNode).fontFamily;"
// }, function(selectionFont){
// 	document.getElementById('selectedFontEnd').innerHTML = selectionFont;
// });