const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4327;



const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ykqeq.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};
connectToDatabase();


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
