const determinent = (matrix) => {
	if (matrix.length == 2){
		return (matrix[0][0]*matrix[1][1]) - (matrix[0][1]* matrix[1][0])
	} else if (matrix.length == 3){
		return (matrix[0][0] * ((matrix[1][1] * matrix[2][2]) - (matrix[1][2] * matrix[2][1])))
	}
	
}

const cofactor = (matrix) =>{
	let res = new Array(3);
	for(var i = 0; i < 3; i++){
		res[i] = new Array(3)
	}
	res [0][0] = (matrix[1][1]* matrix[2][2] - matrix[2][1]*matrix[1][2])
	res [0][1] = (matrix[1][0]* matrix[2][2] - matrix[2][0]*matrix[1][2])
	res [0][2] = (matrix[1][0]* matrix[2][1] - matrix[2][0]*matrix[1][1])
	res [1][0] = (matrix[0][1]* matrix[2][2] - matrix[0][2]*matrix[2][1])
	res [1][1] = (matrix[0][0]* matrix[2][2] - matrix[2][0]*matrix[0][2])
	res [1][2] = (matrix[0][0]* matrix[2][1] - matrix[2][0]*matrix[0][1])
	res [2][0] = (matrix[0][1]* matrix[1][2] - matrix[0][2]*matrix[1][1])
	res [2][1] = (matrix[0][0]* matrix[1][2] - matrix[0][2]*matrix[1][0])
	res [2][2] = (matrix[0][0]* matrix[1][1] - matrix[0][1]*matrix[1][0])

	return res
}


const invert = (x) => {

	var d = determinent(x)

	var c = cofactor(x)

	for (var i = 0; i < x.length; i++){
		for (var j = 0; j < x.length; j++){
			c[i][j] = c[i][j] / d
		}
	}

	return c



}

var matrix = [[2,3,4],[1,2,1],[9,4,5]]

console.log(invert(matrix))
