/* Alias for console functions */
function cl(param) {
	try {
		if (arguments.length > 1) {
			console.log(arguments);
		}
		else {
			console.log(param);
		}
		
	}
	catch (e) {}
}

function cd() {
	try {
		console.dir(arguments);
	}
	catch (e) {}
}

function cg() {
	try {
		console.group();
		for (var i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
		console.groupEnd();
		
	}
	catch (e) {}
}