const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');


require('dotenv').config(); //by doing this, we have our environment variables in dotenv file


const app=express(); //creates express server
const port =process.env.port || 5000; //sets the port that server will be on



app.use(cors());   //  cors middleware
app.use(express.json());  // allows to parse json because server is sending & receiving JSON



const uri = process.env.ATLAS_URI;  //setting up database URI;
mongoose.connect(uri,{useNewUrlParser:true}); 
const connection=mongoose.connection; //starts connection
connection.once('open',()=>{
  console.log("MongoDb connection established successfully");
}) // shows message on console once connection is successful

const usersRouter=require('./routes/users');
const exercisesRouter=require('./routes/exercises');
app.use('/users',usersRouter);
app.use('/exercises',exercisesRouter);

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);

});  //starts the server. Server starts listening on mentioned port number.