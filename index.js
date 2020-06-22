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