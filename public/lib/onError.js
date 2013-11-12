(function(){
	var scripts = document.getElementsByTagName('script'),
		script = scripts[scripts.length - 1],
		apiKey = script.getAttribute('data-key'),
		propogateError = script.getAttribute('data-propogate');

	if (apiKey) {
		window.onerror = function(message, url, linenumber){
			if (window.XMLHttpRequest){
				var xhr = new XMLHttpRequest(),
					postUrl = "http://localhost:3000/errors",
					log = url + ":" + linenumber + " " + message;

				xhr.open("POST", postUrl);
				xhr.setRequestHeader("Content-Type", "application/json");

				if (message && url && linenumber) {
					xhr.send(JSON.stringify({ 
						message: message,
						url: url,
						lineNumber: linenumber,
						key: apiKey
					}));
				} else {
					xhr.send(JSON.stringify({ 
						message: arguments[0],
						url: arguments[1],
						lineNumber: arguments[2],
						key: apiKey
					}));
				}
			}
			return false;
		}
	}

})();