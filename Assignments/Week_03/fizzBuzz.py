def fizzBuzz (n):
    for i in range(n+1):
        if (i % 3 == 0):
            print("fizz")
        if (i % 5 == 0):
            print("Buzz")
        else: 
            print (i)

fizzBuzz(100)