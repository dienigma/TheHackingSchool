function print (){
  console.log(this.something)
}

var obj = {
  something: "Hi",
  print:print
}

var something = "hello"
print()

var bound = print.bind(obj)

bound()