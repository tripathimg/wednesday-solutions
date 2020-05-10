const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;
const { RESOURCE_TYPE } = require('./../../utils/seedData');

const oauthClientScopes = sequelize.define(
    'oauth_client_scopes',
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
        scope: {
            type: dbInstance.Sequelize.ENUM(
                SCOPE_TYPE.INTERNAL_SERVICE,
                SCOPE_TYPE.SUPER_ADMIN,
                SCOPE_TYPE.ADMIN,
                SCOPE_TYPE.USER
            ),
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
        tableName: 'oauth_client_scopes'
    }
);

oauthClientScopes.associate = function (models) {
    oauthClientScopes.hasOne(models.oauth_clients, {
        foreignKey: 'id',
        sourceKey: 'oauthClientId'
    });
};
