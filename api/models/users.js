const dbInstance = require('./../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;

const userSchema = sequelize.define('user_details', {
    uid: {
        type: dbInstance.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Primary Key"
    },
    fname: {
        type: dbInstance.Sequelize.STRING,
        comment: "First Name"
    },
    mname: {
        type: dbInstance.Sequelize.STRING,
        comment: "First Name",
        defaultValue: '',
    },
    lname: {
        type: dbInstance.Sequelize.STRING,
        comment: "First Name"
    },
    mobile: {
        type: dbInstance.Sequelize.STRING,
        comment: "User mobile number.",
        defaultValue : ''
    },
    email: {
        type: dbInstance.Sequelize.STRING,
        comment: "User E-mail ID",
        defaultValue : ''
    },
    m_verified: {
        type: dbInstance.Sequelize.TINYINT(3),
        comment: "Mobile Verified.",
        defaultValue: 0
    },
    e_verified: {
        type: dbInstance.Sequelize.TINYINT(3),
        comment: "E-mail Verified.",
        defaultValue : 0
    },
    uname: {
        type: dbInstance.Sequelize.STRING,
        comment: "Username"
    },
    pass: {
        type: dbInstance.Sequelize.STRING,
        comment: "Password"
    },
    status: {
        type: dbInstance.Sequelize.TINYINT(3),
        comment: "User Status (0 => Created, 1 => Active, 2 => Blocked, 3 => Deleted)",
        defaultValue : 0
    },
    role_id: {
        type: dbInstance.Sequelize.INTEGER(10),
        comment: "User role-id.",
        defaultValue : 0
    },
    created_by : {
        type: dbInstance.Sequelize.INTEGER(10),
        comment: "Userid of user who adde user.",
        defaultValue : 0
    },
    updated_by : {
        type: dbInstance.Sequelize.INTEGER(10),
        comment: "Userid of user who updated user last time.",
        defaultValue : 0
    },
}, {})

module.exports.userModel = userSchema;


const registerUser = async (userObj) => {
    await userSchema.sync();
    return userSchema
        .create(userObj)
        .then(userDetails => userDetails.id)
        .catch(error => {
            console.log("error", error);
            return false;
        });
}

module.exports = {
    registerUser
}