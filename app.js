const express=require('express');
const path=require('path');
const cors=require('cors');

// DB config
require('./config/db');

const app=express();

const poll=require('./routes/poll');


// set public  folder
app.use(express.static(path.join(__dirname,'public')));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// enable CORS
app.use(cors());

app.use('/poll',poll);

const port=3000;

app.listen(port,()=>console.log('Server started at port:3000')
);