require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const DATABASE_URL = process.env.ATLAS_URI;


mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require("./controllers/haircuts"));


// Listeners
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});