const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;
const { RESOURCE_TYPE } = require('./../../utils/seedData');

const oauthClientResources = sequelize.define(
    'oauth_client_resources',
    {
        id: {
            type: dbInstance.Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        oauthClientId: {
            field: 'oauth_client_id',
            type: dbInstance.Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: 'oauth_clients',
                key: 'id'
            }
        },
        resourceType: {
            field: 'resource_type',
            type: dbInstance.Sequelize.ENUM(RESOURCE_TYPE.LIST_ID),
            allowNull: false
        },
        resourceId: {
            field: 'resource_id',
            type: dbInstance.Sequelize.INTEGER(10),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: dbInstance.Sequelize.DATE,
            allowNull: false,
            defaultValue: dbInstance.Sequelize.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: dbInstance.Sequelize.DATE,
            allowNull: true
        }
    },
    {
        tableName: 'oauth_client_resources'
    }
);

oauthClientResources.associate = function (models) {
    oauthClientResources.hasOne(models.oauth_clients, {
        foreignKey: 'id',
        sourceKey: 'oauthClientId'
    });
};

