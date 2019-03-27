def swapArrays(arrOne,arrTwo):
	temp1 = arrOne
	arrOne = arrTwo
	arrTwo = temp1
	return(arrOne,arrTwo)


a = [1,2,3,4,56,"a"]
b = [4,3,44,11,2]
print(swapArrays(a,b))
