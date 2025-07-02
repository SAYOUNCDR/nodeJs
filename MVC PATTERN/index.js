const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares/index");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/api-crud");

// MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
