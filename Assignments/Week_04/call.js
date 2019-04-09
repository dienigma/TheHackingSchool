function print(){
    this.a.forEach(element => console.log(element))
}

var a = [2,3,4,5]

var obj = {
    a: [7,8,9,10],
    print:print
}