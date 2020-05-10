const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;
const { GRANT_TYPE } = require('./../../utils/constants');

const oauthClients = sequelize.define(
    'oauth_clients',
    {
        id: {
            type: dbInstance.Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clientId: {
            field: 'client_id',
            type: dbInstance.Sequelize.STRING(36),
            allowNull: false,
            unique: true
        },
        clientSecret: {
            field: 'client_secret',
            type: dbInstance.Sequelize.STRING(36),
            allowNull: false
        },
        grantType: {
            field: 'grant_type',
            type: dbInstance.Sequelize.ENUM(GRANT_TYPE.CLIENT_CREDENTIALS),
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
        tableName: 'oauth_clients'
    }
);

oauthClients.associate = function (models) {
    oauthClients.hasOne(models.oauth_client_scopes, {
        foreignKey: 'oauth_client_id',
        sourceKey: 'id'
    });
    oauthClients.hasMany(models.oauth_client_resources, {
        foreignKey: 'oauth_client_id',
        sourceKey: 'id'
    });
};
