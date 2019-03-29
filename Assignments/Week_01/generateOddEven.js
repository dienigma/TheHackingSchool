const genOdd = (n) => {
	for (var i = 1; i < n; i+=2) {
		console.log(i);
	}
}

const genEven = (n) => {
	for (var i = 0; i < n; i+=2) {
		console.log(i)
	}
}

// genEven(7);
// genOdd(12);


const genOddRange = (n) => {
    curr = 1
    for( var i = 0; i < n; i++){
        console.log(curr)
        curr += 2
    }
}

genOddRange(9)

const genEvenRange = (n) => {
    curr = 0
    for (var i = 0; i <n; i++){
        console.log(curr)
        curr +=2
    }
}

genEvenRange(9)