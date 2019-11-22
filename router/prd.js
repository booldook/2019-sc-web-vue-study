const express = require("express");
const router = express.Router();

/* Get */
router.get("/", getPrd);

/* Router CB */
function getPrd(req, res) {
	res.json({hello: "world"});
}

module.exports = router;