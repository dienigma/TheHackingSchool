const genOdd = (n) => {
	for (var i = 1; i < n; i+=2) {
		console.log(i);
	}
}

const genEven = (n) => {
	for (var i = 0; i < n; i+=2) {
		console.log(i)
	}
}

genEven(7);
genOdd(12);