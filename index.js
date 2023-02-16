var express =require('express');
var app=express();
var body_parser = require('body-parser');
const router = require('./routes/router');
const connectDB = require('./db/connect'); 

app.get('/',(req,res)=>{
  
  res.send("Hello");
  
});
var json = body_parser.json();
app.use('/',json,router);

const start = async()=>{
	try{
		await connectDB(process.env.MONGO_URI);
		app.listen(8000);
	}
	catch(error){
		console.log(error);
	}
}
start();