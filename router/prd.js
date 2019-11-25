const express = require("express");
const router = express.Router();
const { Product } = require('../model/Product');

/* Get */
router.get("/", getPrd);

/* Router CB */
async function getPrd(req, res) {
	let result = await Product.findAll({order:[["id", "asc"]]});
	res.header("Access-Control-Allow-Origin", "*");
	res.json(result);
}

module.exports = router;