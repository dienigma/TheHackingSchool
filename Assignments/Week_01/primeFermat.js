const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const isPrime = (number) => {
    if (number === 0 || number === 1)
        return "The number is neither prime nor composite."
    else if( number === 3)
        return "The number is prime"
    for (var i = 2; i <= number-2; i ++){
        return (i**number-1) % number === 1 ? "The number is prime" : "The number is not prime"
    }
}

readline.question('Enter the Number to test: ', (input) =>{
    console.log(isPrime(input))
    readline.close()
})
