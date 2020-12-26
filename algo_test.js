let voted = {};

function check_voted(name) {
	if(voted[name]) {
		console.log('Exist');
	}
	else {
		voted[name] = true; 
		console.log('Not exist');
	}
}
check_voted('Georgie');
check_voted('John');
check_voted('Georgie');

