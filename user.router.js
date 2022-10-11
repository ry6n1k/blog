const express = require("express");
const userController = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/postuser", userController.postUser);
userRouter.get("/create", userController.addUser);
userRouter.get("/", userController.getUsers);

module.exports = userRouter;
