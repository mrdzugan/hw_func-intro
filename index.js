console.log(isAdult(18));

/**
 *
 * @param num {int}
 * @returns {boolean}
 */
function isAdult(num) {
	num = Number(num);
	return num >= 18;
}

console.log(checkMultiplicity(15, 4));

/**
 *
 * @param a {int}
 * @param b {int}
 * @returns {boolean}
 */
function checkMultiplicity(a, b) {
	const num1 = Number(a);
	const num2 = Number(b);
	return !(num1 % num2);
}

console.log(checkTriangle(2, 5, 9));

/**
 *
 * @param a {int}
 * @param b {int}
 * @param c {int}
 * @returns {boolean}
 */
function checkTriangle(a, b, c) {
	const side1 = Number(a);
	const side2 = Number(b);
	const side3 = Number(c);
	return side1 + side2 > side3;
}