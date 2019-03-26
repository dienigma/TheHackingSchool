


const fibPosition = (position) => {
	var i;
	var fib = []; // Initialize array!

	fib[0] = 0;
	fib[1] = 1;
	for (i = 2; i <= position; i++) {
	  fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib[6]
}

console.log(fibPosition(6))