const fizzBuzz = (n) => {
    for (var i = 0; i < n+1; i++){
        if (i % 3 === 0){
            console.log("Fizz")
        }
        if (i % 5 === 0){
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}

fizzBuzz(100)