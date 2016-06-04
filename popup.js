chrome.browserAction.setBadgeText({text: '1'});

console.log('11');

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    console.log(request);
});