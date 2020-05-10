const userModel = require('./../models/users')
const utilHandler = require('./../utils/handlers');
const { body, query } = require('express-validator/check');

let registerUser = function (req, res) {
    const { fname, mname, lname, uname, pass, mobile, email } = req.body;
    const uid = req.uid !== undefined ? req.uid : 0;

    const userData = {
        fname: fname,
        mname: mname,
        lname: lname,
        uname: uname,
        pass: pass,
        mobile: mobile,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date(),
        created_by: uid,
        updated_by: uid,
    }
    req.getValidationResult()
    .then(utilHandler.validationHandler())
        .then(async (error) => {
            if (error) {
                res.json({
                    status: 0,
                    msg: "Enter proper parameters"
                })
                return;
            }
            userModel.registerUser(userData)
                .then(user => {
                    res.send({ msg: 'User registered Successfully.' })
                })
                .catch(error => {
                    res.send("Error while registration..", error)
                })
        })
}

module.exports = {
    registerUser
}