def logarithm(n):
	return (1 + logarithm(n/2) if (n > 1) else 0)

print(logarithm(32))