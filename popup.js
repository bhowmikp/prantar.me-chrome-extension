chrome.browserAction.setBadgeText({text: '1'});

console.log('11');

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    console.log(request);
});

window.onload = function()
	{
	var iframe_window = window.frames["frame"];
	var iframe_body_html = iframe_window.document.getElementsByTagName("body")[0].innerHTML;
	//var html = iframe_body_html.replace(/me/gi,"you"); //case-insensitive
	console.log(iframe_body_html);
	}