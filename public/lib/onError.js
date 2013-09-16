(function(){
	console.log('error!');

	window.onerror = function(message, url, linenumber){
		if (window.XMLHttpRequest){
			var xhr = new XMLHttpRequest();
			var postUrl = "http://localhost:3000";
			var log = url + ":" + linenumber + " " + message;

			xhr.open("POST", postUrl);
			xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			xhr.send(JSON.stringify({ error: log}));
		}
		return true;
	}

})();