// Your JavaScript goes here...
function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	//request.open("GET", "https://messagehub.herokuapp.com/messages.json", true)
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			result = " ";
			requestData = JSON.parse(request.responseText);
			console.log(requestData);
			elem = document.getElementById("messages");
			for (var i = 0; i < requestData.length; i++) {
				result = result + "<p><span class = 'usn'>" + requestData[i]["username"] + ":</span> "+requestData[i]["content"]+"</p>";
			}
			elem.innerHTML = result;
		}
	};
	request.send(null);
}