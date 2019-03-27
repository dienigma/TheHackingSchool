def isLeftShift(number,bits):
	return (number << bits == number * 2 **bits)

print(isLeftShift(6,2))