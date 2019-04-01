def genEven(n):
    for i in range(0,n):
        if(i % 2 == 0):
            print(i)

def genOdd(n):
    for i in range(0,n):
        if(i % 2 == 1):
            print(i)


def genEvenInRange(n):
    number = 0
    for i in range(0,n):
        if(number % 2 == 0):
            print (number)
        number += 2


def genOddInRange(n):
    number = 1
    for i in range(0,n):
        if(number % 2 == 1):
            print (number)
        number += 2


# genEven(25)
# genOdd(25)
# genEvenInRange(25)
genOddInRange(10)