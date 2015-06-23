function myProject() {
	console.log('Do you want "rock", "paper", or "scissors"?');
	return prompt();
}	
function myComparisons(computerChoice){
	if (computerChoice < 0.33) {
		return 'rock';
	} else if (computerChoice < 0.66) {
		return 'paper';
	} else {
		return 'scissors';
function getWinner(playerMove, computerMove) {
	if(playerMove === computerMove) {
		return "The result is a tie!";
	} else if(playerMove === 'rock') {
		if(computerMove === 'paper') {
			return 'rock wins!';
		} else {
			return 'paper wins!';
	} else if(playerMove === 'paper') {
		if(computerMove === 'scissors') {
			return 'scissors wins!';
		} else {
			return 'paper wins!'
	} else if(playerMove === 'scissors') {
		if(computerMove === 'rock') {
			return 'rock wins!';
		} else {
			return 'scissors wins!';
	}
}
myProject();