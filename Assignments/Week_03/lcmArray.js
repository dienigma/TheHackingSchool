const lcm = (array) => {
    let max_num = 0
    for (var i = 0; i < array.length; i++){
        if(max_num < array[i]){
            max_num = array[i]
        }
    }
    res = 1
    x = 2
    while(x <= max_num){
        let indexes = []
        for (let j = 0; j < array.length; j++){
            if(array[j] % res === 0){
                indexes.push(array[j])
            }
        }
        if (indexes.length >= 2) {
            for (let j = 0; j < indexes.length; j++){
                array[indexes[j]] = parseInt(array[indexes[j]]/x)
            }
            res = res * x
        } else {
            x += 1
        }
    }

    for (var i = 0; i < array.length; i++) {
        res = res * array[i]
    }

    return res
}


arr = [1, 2, 3, 4, 5, 10, 20, 35]; 

console.log(lcm(arr))

