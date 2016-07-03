// does not run on page, but runs in an isolated environment. Not able to access DOM or any of its properties
$(function(){
	main();
	setInterval(main, 20000);
});
	
function main(){
	$.get('https://prantar.me/', function(data){
		var htmlData = data;
		
		//$data = $('body').append($(htmlData).find('#lastModified').eq(0));
		
		var date = $('body').find('#lastModified').text();
		date = date.slice(3,5);
		chrome.storage.sync.set({
			'value': date
		});
		chrome.browserAction.setBadgeText ( { text: "1" } );
		chrome.storage.sync.get('value', function(data){
			console.log(data.value);
		});
	});
};