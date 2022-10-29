let arrr = [5, 5, 5, 5];
let y = true;
for (let i = 1; i < arrr.length; i++) {
	if (arrr[1] !== arrr[i - 1]) {
		y = false; break
	};
};
console.log(y)