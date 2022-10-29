let arrNumber = [1, 3, 4, 6, 54, 55, 56, 0,];
let even = 0;
let ss = 0;
let zero = 0;
for (m = 0; m < arrNumber.length; m++) {
	if (arrNumber[m] % 2 == 0) {
		even++
	} else if (arrNumber[m] % 2 !== 0) {
		ss++
	} else if (arrNumber[m] === 0) {
		zero++
	}
} console.log(`количество четных цифр ${even}, количество не четных чисел ${ss}, количество нулей ${zero}`)