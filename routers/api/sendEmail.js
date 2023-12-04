const express = require("express");
const router = express.Router();
const jsonParser = express.json();
const Ctrl = require("../../controllers/sendEmail")

router.post("/dispatch", jsonParser, Ctrl.postSendEmail);

module.exports = router;