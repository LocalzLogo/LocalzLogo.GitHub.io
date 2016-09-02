function generate() {
	var text = document.getElementById('text').value;
	var checkbox = document.getElementById('z').checked;
	
	var output = "";
	
	for (var i = 0, len = text.length; i < len; i++) {
		if (text[i] == "a") {output += "<span style='color: #6D6F71'>a</span><span style='color: #F7931E'>`</span>"}
		else {output += "<span style='color: #6D6F71'>" + text[i] + "</span>"};
	}
	if (checkbox == true) {output = output + "<span style='color: #6D6F71'>z</span>"};
	
	document.getElementById('output').innerHTML = output
}