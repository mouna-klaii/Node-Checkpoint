const passGenerator = require('generate-pswd');

const password = passGenerator.generate({
	length: 10,
	numbers: true,
});

console.log(password);