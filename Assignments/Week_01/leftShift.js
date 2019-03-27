const leftShift = (number,bits) => {
	return number * 2**bits == number << bits
}

console.log(leftShift(6,2))