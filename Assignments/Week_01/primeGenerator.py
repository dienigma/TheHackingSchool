def isPrime(num):
	if (num >= 1 and num <= 3):
		return True
	elif (num % 2 == 0 or num % 3 == 0):
		return False
	i = 5
	while (i*i <= num):
		if (num % i == 0 or num % (i+2) == 0):
			return False
		i += 6
	return True

def generatePrime(n):
	i = 0
	while (i < n):
		if (isPrime(i)):
			print(i)
		i += 1

generatePrime(25)
			