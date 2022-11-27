// project stage 4 - Ashour Yahia - U20100293
var words = ["chair", "brown", "sight", "white", "spoil", "thumb", "brain", "buyer", "digit"];
var word = "" 
var failbox, answer;
var mistake = 0;
var hint = 0;

function startGame() {
	word = words[Math.floor(Math.random() * 9)];
	mistakes = 0;
	document.getElementById("outputBox").innerHTML = "";
	for (var i=1; i < 4; i++) {
		failbox = document.getElementById("fail" + i);
		failbox.innerHTML = "Y";
	}
}

function submitAns() {
	answer = document.getElementById("answer").value;
	if (mistakes >= 3) {
		return
	}
	if (answer == word) {
		document.getElementById("outputBox").innerHTML = "Congratulations, You Win!";
	}
	else {
		mistakes += 1
		failbox = document.getElementById("fail" + mistakes);
		failbox.textContent = "X";
		if (mistakes >= 3) {
			document.getElementById("outputBox").innerHTML = "Sorry, You Lose :(";
		}
	}
}

function giveHint() {
	if (mistakes >= 3) {
		return
	}
	document.getElementById("outputBox").innerHTML = "The first letter is " + word.charAt(0);
}
