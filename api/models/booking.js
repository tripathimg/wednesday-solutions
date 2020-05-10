const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;

const bookingSchema = sequelize.define('booking_details', {
    id: {
       type: dbInstance.Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    uid: dbInstance.Sequelize.INTEGER(11),
    vid: dbInstance.Sequelize.INTEGER(11),
    stime: dbInstance.Sequelize.DATE(),
    s_lat: dbInstance.Sequelize.DECIMAL(10, 8),
    s_lng: dbInstance.Sequelize.DECIMAL(11, 8),
    etime: dbInstance.Sequelize.DATE(),
    d_lat: dbInstance.Sequelize.DECIMAL(10, 8),
    d_lng: dbInstance.Sequelize.DECIMAL(11, 8),
    bstatus: dbInstance.Sequelize.TINYINT(3),
    fare: dbInstance.Sequelize.INTEGER(11),
    pstatus: dbInstance.Sequelize.TINYINT(3),
    added_by: dbInstance.Sequelize.INTEGER(11),
    modified_by: dbInstance.Sequelize.INTEGER(11),
    created_at: dbInstance.Sequelize.DATE,
    modified_at: dbInstance.Sequelize.DATE,
}, {})


module.exports.bookingModel = bookingSchema;

const getUserBookings = async (uid, page, limit) => {
    let whrCondition = {};
    whrCondition.uid = uid;

    return bookingSchema.findAll({
        where: whrCondition,
        offset: (page - 1) * limit,
        limit: limit
    }).then(records => {
        let recordList = [];
        records.map(record => recordList.push(record.dataValues));
        return recordList;
    }).catch(err => {
        return false;
    });
}

const bookVehicle = (data) => {
    return bookingSchema.create(data)
      .then(data => data.id)
      .catch(err => {
        return false;
      });
  }
  

module.exports = {
    getUserBookings,
    bookVehicle
}