const largest = (x,y,z) => {
	if ((x > y) && (x > z)) {
		return x
	} else if ( y > z){
		return y
	} else {
		return z
	}
}

console.log(largest(1,6,3))