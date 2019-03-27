def decimalToBinary(number):
	if (number == 0):
		return
	else:
		print(number%2)
		decimalToBinary(number//2)

decimalToBinary(25)