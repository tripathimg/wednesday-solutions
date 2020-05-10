const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;

const userSchema = sequelize.define(
    'users',
    {
        id: {
            type: dbInstance.Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            field: 'first_name',
            type: dbInstance.Sequelize.STRING(32),
            allowNull: false
        },
        lastName: {
            field: 'last_name',
            type: dbInstance.Sequelize.STRING(32),
            allowNull: false
        },
        email: {
            type: dbInstance.Sequelize.STRING(32),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: dbInstance.Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
);

const findOneUser =  userId =>
    userSchema.findOne({
        attributes: ['id', 'first_name', 'last_name', 'email'],
        where: {
            id: userId
        },
        underscoredAll: false
    });


const findAllUser = async (page, limit) => {
    const where = {};
    const totalCount = await userSchema.count({ where });
    const allUsers = await userSchema.findAll({
        attributes: ['id', 'first_name', 'last_name', 'email'],
        where,
        offset: (page - 1) * limit,
        limit: limit
    });
    return { allUsers, totalCount };
};

module.exports = {
    findAllUser,
    findOneUser
}


