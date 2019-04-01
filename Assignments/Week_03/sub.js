const bitSubtract = (x,y) => {
    while(y !== 0){
        borrow = (~x) & y
        x = x^y
        y = borrow << 1
    }
    return x
}

console.log(bitSubtract(12,8))