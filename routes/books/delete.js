const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const books = require('../../model/books');

router.delete('/delete', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            id: "required|string"
        });
        const mathced = await val.check();

        if (! mathced) {
            return res.status(422).json({status: 422, error: val.errors})

        } else {

            books.findOneAndRemove({
                id: req.body.id
            }, function (err, ds) {
                if (! err) {
                    return res.status(200).json({"status": 200, "message": "Deleted"})
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
