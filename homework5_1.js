let meaning = prompt("Введите число")
meaning = +meaning;
if (typeof meaning == "number" && !isNaN(meaning)) {
	if (meaning % 2 == 0) {
		console.log("четное")
	}
	else {
		console.log("нечетное")
	}
}
else {
	console.log("Упс, кажется, вы ошиблись")
}