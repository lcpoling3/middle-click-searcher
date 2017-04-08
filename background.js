//background.js

chrome.runtime.onMessage.addListener(

	function(request, sender, sendResponse){

		if (request.message === "google_search"){
			var url = "http://www.google.com/search?q=" + request.to_search;
			chrome.tabs.create({"url": url});
		}
	}
);