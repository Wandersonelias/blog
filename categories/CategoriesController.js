const express = require('express');
const router = express.Router();


router.get('/categories',(req,res)=>{
    res.send("lorem ispum");
    console.log("Terror");
});
router.get('/admin/categories/new',(req,res)=>{
    res.send("lorem ispum");
});


module.exports = router;