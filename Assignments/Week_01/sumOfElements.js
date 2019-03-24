let a = [1,2,3,4,5,6,7]

const sumOfArray = (array) => {
	let sum = 0
	for (var i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum
}

console.log(sumOfArray(a))