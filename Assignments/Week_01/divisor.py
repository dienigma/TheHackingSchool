def modulus(num, divisor):
	return (num - divisor * (num // divisor))

print(modulus(16,7))