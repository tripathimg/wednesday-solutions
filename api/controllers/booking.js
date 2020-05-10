const bookingModel = require('../models/booking')

const getUserBookings = function (req, res) {
    let { uid, page, limit } = req.query;
    page = page || 1;
    limit = limit || 20;

    bookingModel.getUserBookings(uid, page, limit)
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

const bookVehicle = function (req, res) {
    const { uid, vid, s_lat, s_lng, d_lng, d_lat, fare } = req.body;

    const data = {
        uid : uid,
        vid : vid,
        stime : new Date(),
        s_lat : s_lat,
        s_lng : s_lng,
        d_lat : d_lat,
        d_lng : d_lng,
        fare : fare !== 'undefind' ? fare : 0,
        added_by : uid,
        created_at : new Date(),
        modified_at : new Date()
    }

    bookingModel.bookVehicle(data)
        .then(data => {
            if (!data) {
                return res.status(422).send({ status: 0, message: "Something went wrong", data: {}, });
            } else {
                return res.status(200).send({ status: 1, data: {bid : data} });
            }
        }).catch(err => {
            return res.status(409).send({ status: 0, message: "Exception : " + err.message, data: { bid: null} });
        })
}

module.exports = {
    getUserBookings,
    bookVehicle
}