# Function for nth Fibonacci number 

def Fibonacci(position): 
	solution = []
	solution.append(0)
	solution.append(1)
	
	i = 2 
	while (i < position):
		solution.append(solution[i-2] + solution[i-1])
		i+=1
	return (solution[position - 1])

print(Fibonacci(4))


# solution = []
# solution.append(0)
# print(solution)
