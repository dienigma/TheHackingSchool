def bitSubtraction(x,y):
	while (y != 0):
		borrow = (~x) & y
		x = x^y
		y = borrow << 1
	return x

print(bitSubtraction(4,1))