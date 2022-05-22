const express = require('express');
const bodyParser =require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true }));

app.get("/",function(req,res){
	res.sendfile(__dirname+ "/index.html");
});

app.post("/",function(req,res){
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1+num2;

	res.send("The result of adding Two no. is " +result);
});

app.get("/bmicalculator",function(req,res){
	res.sendfile(__dirname + "/bmiCalculator.html");

});
app.post("/bmicalculator",function(req,res){
	var weight = Number(req.body.weight);
	var height = Number(req.body.height)/100;
	var result=weight/(Math.pow(height,2));
	res.send("Your BMI is " + result.toFixed(4));
});

app.listen(3000,function(){
	console.log("Server is running on port 3000");
});
