// 2! = 2X1
//5! = 5X4X3X2X1

function fact(n){
    if(n<=1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

console.log(fact(5));