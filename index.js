const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const route = require("./routes/router");

app.use(express.json());

app.use('/api/v1',books);
app.get('/',(req,res)=>{
	res.json("hello");
})

const start = async()=>{
	try{
		await connectDB(process.env.MONGO_URI);
		app.listen(3000);
	}
	catch(error){
		console.log(error);
	}
}
start();