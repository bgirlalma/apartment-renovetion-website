const express = require("express");
const router = express.Router();

const userRouter = require("./sendEmail");
router.use("/users", userRouter);

module.exports = router;
