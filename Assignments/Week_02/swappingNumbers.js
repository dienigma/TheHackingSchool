var a = 4
var b = 5

console.log("Before Swapping: "+a,b)
// Using temporary variable.

// var temp = a
// 	a = b
// 	b = temp

// console.log("after Swapping with temporary variable:"+a,b)

// // Without temp

// a = (a+b)
// b = a -b
// a = a - b
// console.log("After Swapping Without using the temporary variable: "+a,b)

// // Without using  + or -

// b = a * b
// a = b / a
// b = b / a

// console.log("After Swapping wihtout usnig + or - and temporary variable: "+a,b)


// Using xor apoerator

a = ~(a ^ b)
b = ~(a ^ b) 
a = ~(a ^ b)
console.log(a,b)