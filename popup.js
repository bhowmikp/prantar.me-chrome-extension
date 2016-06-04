chrome.browserAction.setBadgeText({text: '1'});

console.log('11');

// communication with website
document.getElementById("theButton").addEventListener("click",
    function() {
  window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
}, false);