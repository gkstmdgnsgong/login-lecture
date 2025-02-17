"use strict"

//express 이용해서 구현하기

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // 어떤 엔진으로 해석할 것인지

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드 !!!미들웨어의 순서는 중요, 위에서부터 순차적으로
module.exports = app;