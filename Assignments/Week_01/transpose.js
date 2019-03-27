const transpose = (matrix) => {
	let tMatrix = new Array(matrix.length)
	for (let i = 0; i < tMatrix.length; i++){
		tMatrix[i] = new Array(matrix.length)
	}

	for (var i = 0; i < matrix.length; i++){
		for (var j = 0; j < matrix.length; j++){
			tMatrix[i][j] = matrix[j][i]
		}
	}

	return tMatrix
}

let m = [[1,2,3],[4,5,6],[7,8,9]]

console.log(transpose(m))