var Express = require('express');
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const { ObjectId } = require('mongodb');


var app = Express();


app.use(cors());
app.use(Express.json()); 

// MongoDB Connection String
var CONNECTION_STRING = "mongodb+srv://christiantan120501:ChristianTan20930398@cluster0.0ihhj.mongodb.net/as";

// Database Name
var DATABASENAME = "GuguResort";

// Initialize database connection
var database;


app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.error("Database connection failed:", error);
            return;
        }
        database = client.db(DATABASENAME);
        console.log(`Connected to MongoDB Database Successfully: ${DATABASENAME}`);
    });
});


