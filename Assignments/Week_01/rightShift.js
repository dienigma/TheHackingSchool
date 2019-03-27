const rightShift = (number,bits) => {
	return parseInt(number / 2**bits) == number >> bits
}

console.log(rightShift(6,2))