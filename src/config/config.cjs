require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DB_URL,
    dialect: "postgres",
    logging: false,
      ssl: {
        require: true,
        rejectUnauthorized: false, // important for Neon
      },
  },
};