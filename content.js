//content.js

$('body').mousedown(function(e){if(e.button==2)return false});

$(document).mousedown(function(e){

	if (e.button == 1){
		e.preventDefault();
		var text = window.getSelection().toString();
		if (text != null && text.length > 0){
			console.log(text);
			chrome.runtime.sendMessage({"message": "google_search", "to_search": text});
		}
	}
	
})