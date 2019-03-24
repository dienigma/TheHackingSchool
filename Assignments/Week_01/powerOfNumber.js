const power = (number,exp) => {
	if (exp === 0){
		return 1
	} else{
		return number * power(number, exp -1)
	}
}

console.log(power(2,5));