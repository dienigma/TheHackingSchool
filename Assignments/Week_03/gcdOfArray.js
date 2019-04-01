const gcdArray = (array) =>{
    i = 1
    result = array[0]
    while(i < array.length){
        if(array[i]% result === 0){
            i++
        } else {
            result = array[i] % result
            i++
        }
    }
    return result
}

l = [25, 125, 625]

console.log(gcdArray(l))