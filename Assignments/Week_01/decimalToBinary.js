const convertToBinary = (decimal) => {
	
	if (decimal == 0){
		return;
	} else {
		console.log(decimal % 2)
		return convertToBinary(parseInt(decimal / 2))
	}
}

convertToBinary(25)