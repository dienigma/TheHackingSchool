const checkTriangle = (a,b,c) => {
	if ((a === b) && (b === c)) {
		return 'Equilateral'
	} else if ((a === b) || (a === c) || (b === c) || (c === a)) {
		return 'Isosceles'
	} else {
		return 'Scalene'
	}
}

console.log(checkTriangle(2,2,4));
console.log(checkTriangle(2,2,2));
console.log(checkTriangle(2,3,4));

