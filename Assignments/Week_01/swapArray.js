const swapArrays = (arrOne, arrTwo) => {
	let temp1 = arrOne.slice()
	let temp2 = arrTwo.slice()
	arrOne = []
	arrTwo = []
	arrOne = temp2.slice()
	arrTwo = temp1.slice()
	console.log(arrOne,arrTwo)
}

let a = [1,2,3,4,56,"a"]
let b = [4,3,44,11,2]

swapArrays(a,b)