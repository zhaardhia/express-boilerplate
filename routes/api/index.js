const express = require("express");
const router = express.Router();
const response = require("@Component/response");

const index = function (req, res, next) {
  response.res404(res);
};

router.all("/", index);

// router.use("/v1", require("./v1"));

router.all("*", index);

module.exports = router;
