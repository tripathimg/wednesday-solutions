const userModel = require('../models/users')

const getUserByUid = function (req, res) {
    const uid = req.params.uid;
console.log("user id", uid);
    userModel.findOneUser(uid)
        .then(data => {
            if (!data) {
                return res.status(422).send({ status: 0, message: "Something went wrong", data: { result: [] }, });
            } else {
                return res.status(200).send({ status: 1, data: { data: data } });
            }
        }).catch(err => {
            console.log("error------", err);
            
            return res.status(409).send({ status: 0, message: "Exception : " + err.message, data: { result: [] } });
        })
}

const getUser = function (req, res) {
    let { page, limit } = req.query;
    page = page || 1;
    limit = limit || 20;

    userModel.findAllUser(page, limit)
        .then(data => {
            if (!data) {
                return res.status(422).send({ status: 0, message: "Something went wrong", data: { result: [] }, });
            } else {
                return res.status(200).send({ status: 1, data: { data: data } });
            }
        }).catch(err => {
            return res.status(409).send({ status: 0, message: "Exception : " + err.message, data: { result: [] } });
        })
}

module.exports = {
    getUser,
    getUserByUid
}