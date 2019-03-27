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

m = [[1,2,3],[3,4,5],[7,9,1]]

console.log(cofactor(m))