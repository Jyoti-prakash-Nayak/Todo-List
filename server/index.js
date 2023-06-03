import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app=express();

app.use(cors());

app.use(bodyParser.json({extends:true}))
app.use(bodyParser.urlencoded({extends:true}));

app.use('/',Routes);

const PORT = 8001;

Connection();

app.listen(PORT,()=>console.log(`app is running on PORT ${PORT}`));