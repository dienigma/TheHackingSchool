const add = (x,y) => {
	let res = [];
	x.forEach((t,n1) => {
		let sums = [];
		t.forEach((num,n2) => {
			sums.push(num + y[n1][n2])
		})
		res.push(sums)
	})
	return res
}

const subtract = (x,y) => {
	let res = [];
	x.forEach((t,n1) => {
		let diff = []
		t.forEach((num,n2) =>{
			diff.push(num - y[n1][n2])
		})
		res.push(diff)
	})
	return res
}

let x = [[1,2,3],[2,4,5],[6,7,8]]
let y = [[1,2,3],[2,4,5],[6,7,8]]

console.log(add(x,y))
console.log(subtract(x,y))