const towerOfHanoi = (n, first_rod, to_rod,aux_rod) => {
    if (n === 1){
        console.log(`Disk 1 moved from ${first_rod} to ${to_rod}`)
        return
    } else {
        towerOfHanoi(n-1,first_rod,aux_rod,to_rod)
        console.log(`Disk ${n} moved from ${first_rod} to ${to_rod}`)
        towerOfHanoi(n-1,aux_rod,to_rod,first_rod)
        
    }
}

x = 4

towerOfHanoi(x,'A','C','B')