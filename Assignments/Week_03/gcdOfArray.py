
def gcdArray(array):
    result = array[0]
    i = 1
    while(i < len(array)):
        if(array[i] % result == 0):
            i += 1
        else:
            result = array[i] % result
            i += 1
    return result


l = [25, 125, 625]


print(gcdArray(l))