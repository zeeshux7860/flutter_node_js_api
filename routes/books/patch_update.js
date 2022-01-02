const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const books = require('../../model/books');

router.patch('/update', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            id: "required|string",
            name: "required|string",
            page: "required|string",
            author: "required|string"
        });
        const mathced = await val.check();

        if (! mathced) {
            return res.status(422).json({status: 422, error: val.errors})

        } else {

            books.where({_id: req.body.id}).updateOne({
                create_user_id: req.user._id,
                name: req.body.name,
                page: req.body.page,
                author: req.body.author
            }, function (err) {
                if (!err) {
                    return res.status(200).json({"status": 200, "message": "Updated"})
                } else {
                    return res.status(404).json({"status": 404, "message": "not update"})
 
                }
            });

          
        }

    } catch (error) {
        return res.status(404).json({status: 404, message: "internal error", error: err.message})

    }
});


module.exports = router;
