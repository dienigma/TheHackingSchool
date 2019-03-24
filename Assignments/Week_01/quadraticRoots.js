const quadraticRoots = (a,b,c) => {
	let root_part =  (b*b + 4*a*c)**0.5
	let denom = (2*a)

	let root1 = (-b + root_part)/denom
	let root2 = (-b - root_part)/denom

	console.log(root1,root2)
	
}

quadraticRoots(2,2,4)