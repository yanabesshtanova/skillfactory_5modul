let user = new Map();
user.set("name", "yana",);
user.set("age", 31);
for (let item of user) {
	console.log(`Ключ - ${item[0]}, Значение - ${item[1]}`)
}