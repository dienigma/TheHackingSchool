const logarithm = (n) => n > 1 ? 1 + logarithm(n/2) : 0

console.log(logarithm(32))