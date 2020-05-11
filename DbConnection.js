
/**
 * Get DB connection
 */
class DbConnection {
  constructor() {
  }

  /**
   * get db connection for sequelizer
   */
  getSequelizeInstance() {

    if (!DbConnection.sequeConnect) {
      const Sequelize = require('sequelize');
      DbConnection.sequeConnect = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        migrationStorageTableName: "sequelize_migrations",
        define: {
          timestamps: false
        }
      });
    }
    return DbConnection.sequeConnect;
  }
}

module.exports = new DbConnection();

module.exports.Sequelize = require('sequelize');
