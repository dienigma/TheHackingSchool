def largestOfThree(x,y,z):
	if(x>y and x>z):
		return x
	elif(y>z):
		return y
	else:
		return z

print(largestOfThree(2,5,1))