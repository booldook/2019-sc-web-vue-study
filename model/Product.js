const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class Product extends Model {}
Product.init({
	src: { type: Sequelize.STRING, allowNull: false },
	title: { type: Sequelize.STRING, allowNull: true },
	desc: { type: Sequelize.STRING, allowNull: true },
},{
	sequelize,
	modelName: "Products",
});
Product.sync();

module.exports = {Product}
