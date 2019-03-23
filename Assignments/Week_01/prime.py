def isPrime(num):
	if (num <=1 or num <= 3):
		return True
	elif (num % 2 == 0 or num % 3 == 0):
		return False
	i = 5
	while (i*i <= num):
		if (num % i == 0 or num % (i+2) == 0):
			return False
		i += 6
	return True

print(isPrime(1337))
				