// extension environment. Scripts that modify the popup.html are here
var options = {
	type: "basic",
	title: "Hello",
	message: "Messege",
	iconUrl: "icon.png"
};

chrome.notifications.create(options);

chrome.notifications.onClicked.addListener(redirectWindow);

function redirectWindow(){
	window.open("https://prantar.me/");
	
}