const express = require("express");
const router = express.Router();
const jsonParser = express.json();
const Ctrl = require("../../controllers/sendEmail");
const cors = require("cors");

router.use(cors());

router.get("/dispatch", jsonParser, Ctrl.postSendEmail);

module.exports = router;
