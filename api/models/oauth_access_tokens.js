const dbInstance = require('../../DbConnection');
const sequelize = dbInstance.getSequelizeInstance();
const Op = dbInstance.Sequelize.Op;

  const oauthAccessTokensSchema = sequelize.define(
        'oauth_access_tokens',
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
            accessToken: {
                field: 'access_token',
                type: dbInstance.Sequelize.STRING(64),
                allowNull: false,
                unique: true
            },
            expiresIn: {
                field: 'expires_in',
                type: dbInstance.Sequelize.INTEGER(8).UNSIGNED,
                allowNull: false
            },
            expiresOn: {
                field: 'expires_on',
                type: dbInstance.Sequelize.DATE,
                allowNull: false
            },
            metadata: {
                type: dbInstance.Sequelize.TEXT,
                allowNull: true
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
            tableName: 'oauth_access_tokens'
        }
    );
