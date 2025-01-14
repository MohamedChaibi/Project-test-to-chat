// 1- require excpress
const express = require("express");

// 2- create instance
const app= express();

// 5- require dotenv
require("dotenv").config();

// 6- connect DB
const connectDB = require('./config/connectDB');
connectDB();

// Routing
// middleware global
app.use(express.json()); 

// middlewear route
app.use("/api/user", require("./routes/user"));

// 3-creation port   
const PORT = process.env.PORT;

// 4- create server
app.listen(PORT , (err) => err ? console.error(err) : console.log(`server running on port ${PORT}..`));