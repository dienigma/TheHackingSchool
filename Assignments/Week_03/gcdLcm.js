const gcd = (x,y) => y === 0 ? x : gcd(y,x%y)
const lcm = (x,y) => (x*y)/gcd(x,y)

console.log(lcm(10,25))
console.log(gcd(10,25))