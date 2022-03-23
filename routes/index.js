const express = require("express");
const router = express.Router();
const response = require("@Component/response");
// const { core_company } = require("@Model/index");

const index = function (req, res, next) {
  response.res404(res);
};

router.all("/", index);

router.use("/api", require("./api"));

router.all("*", index);

module.exports = router;
