const isPrime = (num) => {
    if (num >= 1 && num <= 3)
        return true
    else if (num % 2 === 0 || num % 3 === 0)
        return false
    let i = 5
    while( i*i <= num){
        if (num % i === 0 || num % (i+2) === 0){
            return false
        }
        i += 6

    }
    return true
}

const primGen = (n) => {
    let curr = 2
    let count = 0
    while(count < n){
        if(isPrime(curr)){
            console.log(curr)
            count++
        }
        curr++
    }
}

primGen(25)