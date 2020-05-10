const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;

const vehicleSchema = sequelize.define('vehicle_details', {
    id: {
        type: dbInstance.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vmodel: dbInstance.Sequelize.STRING(64),
    vnum: dbInstance.Sequelize.STRING(32),
    curr_lat: dbInstance.Sequelize.DECIMAL(10, 8),
    curr_lng: dbInstance.Sequelize.DECIMAL(11, 8),
    added_by: dbInstance.Sequelize.INTEGER(11),
    modified_by: dbInstance.Sequelize.INTEGER(11),
    created_at: dbInstance.Sequelize.DATE,
    modified_at: dbInstance.Sequelize.DATE,
}, {})


module.exports.vehicleModel = vehicleSchema;

const getNearbyVehicle = async (lat, lng, dist, page, limit) => {
    let start = (page - 1) * limit;

   return sequelize.query(`SELECT id, vmodel, vnum, curr_lat, curr_lng,
    (
       6371 *
       acos(cos(radians(${lat})) * 
       cos(radians(curr_lat)) * 
       cos(radians(curr_lng) - 
       radians(${lng})) + 
       sin(radians(${lat})) * 
       sin(radians(curr_lat )))
    ) AS distance 
    FROM vehicle_details
    HAVING distance < ${dist}
    ORDER BY distance LIMIT ${start}, ${limit}`, { type: sequelize.QueryTypes.SELECT })
    .then(records => {
        let recordList = [];
        records.map(record => recordList.push(record));
        return recordList;
    }).catch(err => {
        return false;
    });
}


module.exports = {
    getNearbyVehicle
}