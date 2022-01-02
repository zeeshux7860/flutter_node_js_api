const express = require('express');
const req = require('express/lib/request');
const router = express.Router();



const bookAddController =  require('./books/post_add');
router.use('/books', bookAddController)

const bookUpdateController =  require('./books/patch_update');
router.use('/books', bookUpdateController)

const bookDeleteController =  require('./books/delete');
router.use('/books', bookDeleteController)

router.get('/profile', function (req, res) {
    
  return   res.status(200).json({
        status: 200,
        user: req.user
    })
})


module.exports = router;