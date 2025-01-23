const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/users');
const upload = require('./middlewares/multer.js'); 
const bcrypt = require('bcrypt');
// const authRoutes = require('./routes/userRoutes')./multer;

dotenv.config();
const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
connectToDatabase();

// Create user 
app.post("/create", async (req, res) => {
  let payload = req.body;

  try {
    let new_user = new User(payload);
    await new_user.save();
    res.send({ "message": "Hurray! Successfully saved the user to the database" });
  } catch (error) {
    console.log(error);
    res.send({ "error": error });
  }
});

// Upload file route
app.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    console.log(req.file);  // Check the file uploaded
    res.send({ 'message': "Successfully uploaded file" });
  } catch (error) {
    console.log(error);
    res.send({ "err": error });
  }
});

// Login endpoint and validation
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.send({ message: "wrong password" });
    }

    res.send({ message: "Login successful" });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.send({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
