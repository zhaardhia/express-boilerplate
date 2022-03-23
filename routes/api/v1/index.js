"use strict";

const express = require("express");
const response = require("@Component/response");
const router = express.Router();

const index = function (req, res, next) {
  response.res404(res);
};

router.all("/", index);

// insert endpoint here
// router.use(endpoint, require(folder))

router.all("*", index);

module.exports = router;
