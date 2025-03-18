var Express = require('express');
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const { ObjectId } = require('mongodb');

var app = Express();

app.use(cors());
app.use(Express.json()); 

// MongoDB Connection String
var CONNECTION_STRING = "mongodb+srv://christiantan120501:ChristianTan20930398@cluster0.0ihhj.mongodb.net/as?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true";

// Database Name
var DATABASENAME = "GuguResort";

// Initialize database connection
var database;


const PORT = process.env.PORT || 5038;

MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        database = client.db(DATABASENAME);
        console.log(`Connected to MongoDB Database Successfully: ${DATABASENAME}`);
    })
    .catch(error => {
        console.error("Database connection failed:", error);
    });

// Testing Route
app.get("/", (req, res) => {
    res.send("Backend is running on Render!");
});

// API Route to Fetch All Collection Data
app.get("/data", async (req, res) => {
    try {
        const collection = database.collection("contact"); 
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// API Route to Send a Meesage
app.post("/sendMessage", async (req, res) => {
    try {
        const collection = database.collection("contact");
        await collection.insertOne(req.body);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
