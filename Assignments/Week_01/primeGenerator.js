const isPrime = (num) => {
	if (num >= 1 && num <= 3)
		return true
	else if (num % 2 === 0 || num % 3 === 0)
		return false
	let i = 5
	while( i*i <= num){
		if (num % i === 0 || num % (i+2) === 0){
			return false
		}
		i += 6

	}
	return true
}


const primeGenerator = (n) => {
	for (var i = 0; i < n; i++) {
		if(isPrime(i)){
			console.log(i)
		}
	}
}

console.log(primeGenerator(25))