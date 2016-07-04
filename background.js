// does not run on page, but runs in an isolated environment. Not able to access DOM or any of its properties
$(function(){
	main();
	// 1 sec = 1000
	//refresh every 30 min
	// 1800000 == 30 min
	setInterval(main, 1800000);
});

var options = {
	type: "basic",
	title: "New Update",
	message: "The site has been updated. Please take a look.",
	iconUrl: "icon.png"
};

function redirectWindow(){
	window.open("https://prantar.me/");	
}
	
function main(){
	$.get('https://prantar.me/', function(data){
		var htmlData = data;
		var currDate;
		var prevDate;
		
		// get currDate
		$data = $('body').append($(htmlData).find('#lastModified').eq(0));
		currDate = $('body').find('#lastModified').text();
		
		// get prevDate
		chrome.storage.local.get('data', function (result) {
			prevDate = (result.data);
		
			console.log("Cur val: " + currDate);
			console.log("Prev val: " + prevDate);
			
			// if they are not same set prevDate = currDate
			if (currDate != prevDate){
				prevDate = currDate;
				
				chrome.storage.local.set({'data': prevDate}, function (result) {});
				
				console.log("NEW Cur val: " + currDate);
				console.log("NEW Prev val: " + prevDate);
				
				// if new version available inform user with badge notification
				chrome.browserAction.setBadgeText ( { text: "1" } );
				// create rich notifications
				chrome.notifications.create(options);
				chrome.notifications.onClicked.addListener(redirectWindow);
			}
		});		
	});
};