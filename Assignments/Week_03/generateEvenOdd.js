const genEven = (n) => {
    for (let i = 0; i< n; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

const genOdd = (n) => {
    for (let i = 0; i< n; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}


const genEvenTillRange = (n) =>{
    let num = 0
    for(let i = 0; i < n; i++){
        if(num % 2 == 0){
            console.log(num)
        }
        num+=2
    }
}

const genOddTillRange = (n) =>{
    let num = 1
    for(let i = 0; i < n; i++){
        if(num % 2 == 1){
            console.log(num)
        }
        num += 2
    }
}

// genEven(15)
// genOdd(25)
// genEvenTillRange(10)
genOddTillRange(10)

