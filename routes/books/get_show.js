const express = require('express');
const router = express.Router();
const books = require('../../model/books');

router.get('/show', async function (req, res) {

   try {
    const data = await  books.find({
        status: 1
    });
     return res.status(200).json({
         "status" : 200,
         "result_books" : data
     })
   } catch (err) {
    return res.status(404).json({status: 404, message: "internal error", error: err.message})
       
   }
});


module.exports = router;

