def bitSubtract(a,b):
    while (b != 0):
        borrow = (~a) & b
        a = a^b
        b = borrow << 1
    return a

print (bitSubtract(12,8))