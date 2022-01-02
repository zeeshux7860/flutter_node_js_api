var jwt = require('jsonwebtoken');
const users = require('../model/users');

async function verify(req, res, next) {
    try {
        const token = req.header('auth-token');
        if (! token) {
            return res.status(401).json({status: 401, message: "token not found"})

        } else {
            jwt.verify(token, process.env.JWT_KEY, async function (err, verifiedUser) {
                if (err) {
                    return res.status(401).json({status: 401, message: "token is invalid"})

                } else {
                    if (verifiedUser.user_details._id) {
                        const user_details = await users.exists({_id: verifiedUser.user_details._id});


                        if (user_details) {
req.user = verifiedUser.user_details;
                            next();
                        } else {
                            return res.status(401).json({status: 401, message: "Unauthorized"})

                        }
                    } else {
                        return res.status(401).json({status: 401, message: "Unauthorized Token"})
                    }
                }
            });

            // if (verifiedUser.id) {
            //     const user_details = await users.exists({id: verifiedUser.id});
            //     if (user_details) {
            //         next();
            //     } else {
            //         return res.status(401).json({status: 401, message: "Unauthorized"})

            //     }


            // } else {
            //     return res.status(401).json({status: 401, message: "invalid token"})

            // }
        }
    } catch (err) {
        return res.status(404).json({status: 404, message: "internal error", error: err.message})

    }
}

module.exports = verify;
