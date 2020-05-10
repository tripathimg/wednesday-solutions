
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

  /**
   * Get Db instance for mysql
   */
  getMysqlInstance() {
    if (!DbConnection.mysqlConnnect) {

      DbConnection.mysqlConnnect = require('mysql2').createConnection({
          database: process.env.DB_NAME,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT
      });
    }
    return DbConnection.mysqlConnnect;
  }
}

module.exports = new DbConnection();

module.exports.Sequelize = require('sequelize');
