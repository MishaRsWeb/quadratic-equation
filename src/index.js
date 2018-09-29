module.exports = function solveEquation(equation) {
	equation = equation.replace(/\s/g, '');
	var arr = equation.split('*x^2');
	var a = +arr[0];
	var arr2 = arr[1].split('*x');
	var b = +arr2[0];
	var c = +arr2[1];
	var d = Math.pow(b, 2)-(4*a*c);
	var x1 = (-b-Math.sqrt(d))/(2*a);
	var x2 = (-b+Math.sqrt(d))/(2*a);
	return [x1, x2];
}
