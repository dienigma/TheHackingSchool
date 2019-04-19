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
