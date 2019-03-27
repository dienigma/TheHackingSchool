import re
def alphabetChecker(input):
	expression = re.compile("^[a-zA-Z]+$")
	return (True if (expression.match(input)) else False)

print(alphabetChecker("2"))