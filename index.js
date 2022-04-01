const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// const connection = require('./db/db');

// connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`server is listening at ${port}`));
