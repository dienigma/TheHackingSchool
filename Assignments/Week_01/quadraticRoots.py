def quadraticRoots (a,b,c):
	root_part = (b*b - 4*a*c)**0.5
	denominator = 2*a
	root_one = (-b + root_part)/denominator
	root_two = (-b - root_part)/denominator

	return(root_one, root_two)

print(quadraticRoots(1,1,1))