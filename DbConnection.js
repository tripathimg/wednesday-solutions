
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
      DbConnection.sequeConnect = new Sequelize(
        process.env.DB_URI,
        JSON.parse(process.env.DB_OPTIONS)
      );
    }
    return DbConnection.sequeConnect;
  }
}

module.exports = new DbConnection();

module.exports.Sequelize = require('sequelize');
