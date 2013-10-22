(function(){
	window.onerror = function(message, url, linenumber){
		if (window.XMLHttpRequest){
			var xhr = new XMLHttpRequest();
			var postUrl = "http://localhost:3000/errors";
			var log = url + ":" + linenumber + " " + message;

			xhr.open("POST", postUrl);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify({ url: url,
				lineNumber: linenumber,
				message: message
			}));
		}
		return false;
	}

})();