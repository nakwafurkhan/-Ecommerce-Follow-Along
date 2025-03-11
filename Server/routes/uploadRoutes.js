const express = require('express');
const multer = require('multer');
const router = express.Router();  


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');  
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);  
    }
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("myFile"), (req, res) => {
    try {
        console.log(req.file);  
        res.send({ "message": "file uploaded successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error uploading file" });
    }
});

module.exports = router; 
