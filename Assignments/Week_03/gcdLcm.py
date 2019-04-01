def gcd(x,y):
    return x if(y ==0) else gcd(y,x%y)

def lcm(x,y):
    return (x * y / gcd(x,y))

print(gcd(10,25))
print(lcm(10,25))