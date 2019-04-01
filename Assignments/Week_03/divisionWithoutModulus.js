
const modulus = (num, divisor) => {
    return num - divisor * parseInt((num / divisor))
}

console.log(modulus(12,5))