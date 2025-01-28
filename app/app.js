"use strict"

//express 이용해서 구현하기

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // 어떤 엔진으로 해석할 것인지

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;