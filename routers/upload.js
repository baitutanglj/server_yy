const express = require('express')
const uptools = require('../public/javascripts/upfile')
const router = express.Router()

router.post('/',uptools.multer().single('file'),(req, res, next) => {
    // const url = 'http://localhost:3003/' + req.file.filename
    console.log(req.file.path);
    res.json({filePath: req.file.path})
})
module.exports = router;
