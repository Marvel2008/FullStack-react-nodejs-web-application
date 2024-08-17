module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "kolaps888",
    DB: "wallpapers",
    dialect: "postgres",
    pool: { //used for Sequelize connection pool configuration
      max: 5,
      min: 0,
      acquire: 30000,//time that pool will try to get connection before throwing error
      idle: 10000//maximum time that connection can be idle before being released
    }
  };