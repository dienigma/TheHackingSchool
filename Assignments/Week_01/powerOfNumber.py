def powerOfNumber(num, exp):
    return 1 if (exp == 0) else num * powerOfNumber(num, exp -1)
print(powerOfNumber(2,3))