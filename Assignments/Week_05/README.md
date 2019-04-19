# Assignment - Interview Questions

This is a set of questions that are most common in the interviews.

## Question 1 - Explain the concept of “strict” in JavaScript with any code sample ?

The `'strict'` keyword activates a strict context in javascript that makes it more secure in a sence. It is an ES 2015 feature.

The `'strict'` keyword disables certain functionalities in js that can be potentially dangerous. It sticks with certain traditional code blocks and throws errors if a relatively new and confusing code block is used.

It in some cases makes the code less optimized since it prevents javascript to prevent certain optimizations. However, in most cases it optimizes performance. Certain poorly thought out features are also disabled and it throws all the silent errors that occur in js which is helpful for understanding where did the code break.

Consider the following code examples.

Without `'strict'`

```javascript
x = 3.45;
console.log(x);
// Implicitly converts to let x = 3.45
// => prints out 3.45
```

With `'strict'`

```javascript
"use strict";
x = 3.45;
console.log(x);
// Will strictly check if the variable is declared
// Since it cannot find the let keyword, it throws a referrence error.
```

## Question 2 - Consider the following functions, will they both return the same thing or will they return different things? Why or why not?

```
function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return
  {
    bar: "hello";
  }
}
```

The first function will return an object where as the second one will return undefined. This is because of the way it is written. The first function will return the object because return has a curly brace after it which means that the compiler will see it and will consider that the function is returning something(`object`) in this case.
The second function will return undefined because the obejct code start on the line after return. This is how the code will be for further understanding.

```javascript
function foo2() {
  return undefined;
  {
    bar: "hello";
  }
}
```

This clearly shows that `foo2()` is retunrning undefined. The `return undefined` statement is converted by a simple `return` statement implicitly by JS.

## Question 3 - In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

```javascript
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

Here is the output for the code.

```
1
4
3
2
```

Why? Becasue this is an example of the asynchronous nature of JS. and the two `setTimeout` functions will be put in the event loop and they will execute after the stack is free. The JS compiler will put the `console.log()`functions on the stack. While this happens, the other `setTimeout` functions will be pushed to the event loop or the callback queue, when the compiler prints the two console.logs, it pops them and then loads the callback queue on to the stack and hence it prints 3 and then 2 because 3 has 0 time out where as 2 has a timeout of 1000 ms.

## Question 4 - What will the code below output to the console and why?

```javascript
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```

This will print out the following:

```javascript

array 1: length= 5 last=j,o,n,e,s
array 2: length= 5 last=j,o,n,e,s

```

**Explanation -** When you add arr3 to the arr2, you are pushing the entire array as an element in the arr2. So the last element of arr2 will be arr3. Hence, it displays length to be 5 and its last elemtent to be j,o,n,e,s

## Question 5 - What is a “closure” in JavaScript? Provide an example.

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

```javascript
function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}
```

Here in this case the scope of _a_ is limited to the _inner_ function and the scope of _b_ is limited to the _outer_ function. Still, _inner_ has access to _b_ which is outside it's scope.

Now consider this example

```javascript
function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}

var X = outer();
var Y = outer();
```

In the execution of this code, X will return the entire inner function. Now when outer actually executes, the variables inside outer do not exist anymore.

When the function is executed the second time, again another variable b is created.

## Question 6 - What will the following code output to the console?

```javascript
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
```

This function is an example of factorial by recursion. This is also an IIFE so it will take 10 as an arguement and immediately invoke itself.
The output is 10!

`> 3628800`

## Question 7 - What will be the out put of the following function and why?

```javascript
(function(x) {
  return (function(y) {
    console.log(x);
  })(2);
})(1);
```

The output will be `1` because the outer function and inner function are IIFEs, when outer function is invoked with the argument 1 it returns another IIFE with an arguemnt 2. When the inner function runs it prints the argument of the outer function.
Therefore the output will be `1`.

## Question 8 -Consider the following code. What will the output be, and why?

```javascript
(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

The output will be :

```
1
undefined
2
```

This is because it will first print the inner `x` which is equal to 1 then it will print `undefined` as there is no outer `x` will be undefined and the third statyment wll print the value of `y` which is 2.
