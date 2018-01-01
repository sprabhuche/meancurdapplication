
const express= require('express');
const app=express();
const mongoose=require('mongoose');

app.get('/',(req,res)=>{
return res.send('Welcome to MEAN app with Angular js 4+');
});

const MONGO_DB_URI='mongodb://localhost/y_mean';
mongoose.connect(MONGO_DB_URI,{
    useMongoClient:true
});

mongoose.connection.on('connected',()=>{
    console.log('app is connected to mongodg',MONGO_DB_URI);
});

mongoose.connection.on('error',err=>{
    console.log('error while connecting to mongodg',err);
});

app.listen('3000',()=>{
    console.log('app is running on PORT 300');
});