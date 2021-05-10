const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');//connecting to database//may be deleted

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV == "production")
{
    app.use(express.static("client/build"));
     


}


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


