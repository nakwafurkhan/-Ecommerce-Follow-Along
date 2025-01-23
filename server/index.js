const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/users');
// const authRoutes = require('./routes/userRoutes'); 

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

app.post("/create",async(req,res)=> {
    let payload=req.body;
    

    try {
        let new_user=new User(payload)
        await new_user.save()
        res.send({"message":"Hurray! Successfully saved the user to the database"})

        
    } catch (error) {
        console.log(error)
        res.send({"error":error})
        
    }
})
const multer = require('multer');

// const multer  = require('multer')
// const upload = multer({ dest: './uploads' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'uploads/');
  },
  
  filename: (req, file, cb) => {
    // const fileExtension = file.mimetype.split('/')[1];
    // const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExtension}`;


    // cb(null, file.fieldname+'-'+Date.now+'-'+file.originalname);
    

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

app.post("/upload",upload.single("myFile"),(req,res)=>{
    try {
        console.log(req.file);
        res.send({'message':"Successfully uploaded file"})
    } catch (error) {
        console.log(error)
        res.send ({"err":error})
    }
})


// // Use auth routes for authentication
// app.use('/api/users', authRoutes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!', error: err.message });
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
