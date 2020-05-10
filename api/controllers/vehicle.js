const vehicleModel = require('../models/vehicle')

let getNearbyVehicle = async function (req, res) {
    let { lat, lng, dist, page, limit } = req.query;
    page = page || 1;
    limit = limit || 20;

    vehicleModel.getNearbyVehicle(lat, lng, dist, page, limit)
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
    getNearbyVehicle
}