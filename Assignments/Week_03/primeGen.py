def isPrime(number):
    if(number == 0 or number == 1):
        return False
    elif (number ==2 and number ==3):
        return True
    elif(number % 2 == 0 or number % 3 == 0):
        return False
    i = 5
    while (i * i <= number):
        if (number % i == 0 or number % (i+2) == 0):
            return False
        i += 6
    return True

def primeGen(n):
    i = 0
    num = 0
    while (i < n):
        if(isPrime(num)== True):
            print(num)
            i += 1
        num += 1

primeGen(25)