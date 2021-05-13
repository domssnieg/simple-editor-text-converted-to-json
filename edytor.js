let textbox = document.getElementById('textbox');
let options = document.querySelectorAll('.option');
let textToJson;
let jsonText;


	for (let btn of options) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];	
			document.execCommand(cmd, false, null);
	});
};

	function toJson (textbox) {
	var text = textbox.innerHTML;
	textToJson = {
		"text": text
	};
	return jsonText = JSON.stringify(textToJson);
};
