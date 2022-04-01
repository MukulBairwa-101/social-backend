const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(
        `${__dirname}/api/postapi.json`,"utf-8", );
    
    
    
        if(req.url == "/postapi"){
            res.writeHead(200, {"content-type": "application/json"});
            res.end(data);
        }
        else res.end('404');
    })
    


// const connection = require('./db/db');

// connection();



app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001
server.listen(port,()=>console.log(`server is listening at ${port}`));
