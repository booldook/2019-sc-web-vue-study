// npm i sequelize sequelize-cli mysql mysql2
const Sequelize = require("sequelize");	//<script src="../js/fx-slide.js"></script>
const sequelize = new Sequelize({
	host: "localhost",
	port: 3306,
	database: "ella",
	username: "ella",
	password: "000000",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

/*
sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
*/
(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	}
	catch (err) {
		console.error('Unable to connect to the database:', err);
	}
})();

module.exports = {Sequelize, sequelize}