const express = require("express");
const app = express();
const path = require("path");
const router = require("./src/routers");
const bodyParser = require("body-parser");
const PORT = 4000; 
//morgan
var logger = require('morgan');
app.use(logger('dev'));
//? ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정
//view(ejs) (동적파일관리0)
app.set("views", path.resolve(__dirname, "./public/views"));
app.set("view engine" , "ejs");
//static (정적파일관리)
app.use(express.static(path.resolve(__dirname, "./public/static")));
//? Use json : req 객체에서 json 타입의 body 받기
app.use(express.json());
//? Use form-urlencoded : req 객체에서 x-www-form-urlencoded 타입의 body 받기
app.use(express.urlencoded({
    extended: true,
}));
app.use(router);

app.listen(PORT, ()=>{
    console.log("server ing...")
})