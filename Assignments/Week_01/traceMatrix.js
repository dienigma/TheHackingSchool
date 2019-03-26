const trace = (matrix) => {
	let sum = 0
	for (var i = 0; i < matrix.length; i++) {
		sum += matrix[i][i]
	}
	return sum
}

let a = [[1,2,3],[4,5,6],[7,8,9]]

console.log(trace(a))