const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// multer config
const storage = multer.diskStorage({
    destination : (req, file, cb) => {

        if( file.fieldname == 'photo' ){
            cb(null, path.join(__dirname, '../public/images'));
        }

        if( file.fieldname == 'pdf' ){
            cb(null, path.join(__dirname, '../public/pdf'));
        }

    },
    filename : (req, file, cb) => {
        if( file.fieldname == 'photo' ){
            cb(null, Date.now() + '_' + file.originalname  );
        }

        if( file.fieldname == 'pdf' ){
            cb(null, req.body.name + '_' + file.originalname  );
        }
        
       


    }
});

const productUplaod = multer({
    storage : storage
}).fields([
    {
       name : "photo",
       maxCount : 1 
    },
    {
        name : "pdf",
        maxCount : 5 
    }
]);

 

// routes 
router.post('/create', productUplaod,  (req, res) => {





    res.json({
        message : "Done", 
        body : req.body,
        photo : req.files.photo[0].filename,
        pdf : req.files.pdf[0].filename
    });
});

// exports 
module.exports = router;


