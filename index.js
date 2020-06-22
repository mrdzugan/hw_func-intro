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

console.log(rhombSquare(5, 7));

/**
 *
 * @param a {int}
 * @param h {int}
 * @returns {number}
 */
function rhombSquare(a, h) {
	const side = Number(a);
	const height = Number(h);
	return side * height;
}

console.log(cylinderSquare(5, 6));

/**
 *
 * @param r {int}
 * @param h {int}
 * @returns {number}
 */
function cylinderSquare(r, h) {
	const radius = Number(r);
	const height = Number(h);
	return 2 * Math.PI * radius * height;
}

console.log(triangleSquare(5, 10));

/**
 *
 * @param a {int}
 * @param h {int}
 * @returns {number}
 */
function triangleSquare(a, h) {
	const side = Number(a);
	const height = Number(h);
	return side * height / 2;
}

console.log(rectangleSquare(5, 3));

/**
 *
 * @param a {int}
 * @param b {int}
 * @returns {number}
 */
function rectangleSquare(a, b) {
	const side1 = Number(a);
	const side2 = Number(b);
	return side1 * side2;
}