const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const books = require('../../model/books');

router.post('/add', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            name: "required|string",
            page: "required|string",
            author: "required|string"
        });
        const mathced = await val.check();

        if (! mathced) {
            return res.status(422).json({status: 422, error: val.errors})

        } else {

            books.create({
                create_user_id: req.user._id,
                name: req.body.name,
                page: req.body.page,
                author: req.body.author,
                date: Date.now(),
                status: 1
            });

            return res.status(200).json({"status": 200, "message": "Data Save"})
        }

    } catch (error) {
        return res.status(404).json({status: 404, message: "internal error", error: err.message})

    }
});


module.exports = router;
