const alphabetChecker = (input) => {
	const expression = /^[a-zA-Z]+$/
	return expression.test(input)
}

console.log(alphabetChecker("a"))
console.log(alphabetChecker(2))