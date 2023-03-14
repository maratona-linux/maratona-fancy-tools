let messageTimeout;

function showMessage(activity) {
	let message = document.getElementById("message");
	let activityElement = document.getElementById("activity");
	activityElement.innerHTML = activity;

	message.classList.remove("hide");
	message.classList.add("show");

	if (messageTimeout) {
		clearTimeout(messageTimeout);
	}

	messageTimeout = setTimeout(function() {
		message.classList.remove("show");
		message.classList.add("hide");
	}, 5000);
}

document.addEventListener("mousemove", function() {
	showMessage("<span class='emoji'>🖱️</span>Mouse Moved");
});

document.addEventListener("keydown", function() {
	showMessage("<span class='emoji'>⌨️</span>Keyboard Input");
});
