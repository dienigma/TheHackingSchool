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
	count = 0 
	num = 0
	while(count < n){
		if(isPrime(num)){
			console.log(num)
			count += 1
		}
		num +=1
	}
}

primeGenerator(26)