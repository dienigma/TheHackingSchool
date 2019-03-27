const determinent = (matrix) => {
	if (matrix.length == 2){
		return (matrix[0][0]*matrix[1][1]) - (matrix[0][1]* matrix[1][0])
	} else if (matrix.length == 3){
		return (matrix[0][0] * ((matrix[1][1] * matrix[2][2]) - (matrix[1][2] * matrix[2][1])))
	}
	
}

let m = [[1,2,3],[2,3,4],[4,5,6]]

console.log(determinent(m))