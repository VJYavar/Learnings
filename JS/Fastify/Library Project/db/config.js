"use strict";

const env = process.env.NODE_ENV || development;

const development = {
  db: {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  use_env_variable: "DATABASE_URL",
};

const test = {
  db: {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  use_env_variable: "DATABASE_URL",
};

const production = {
  db: {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  use_env_variable: "DATABASE_URL",
};

const config = {
  development,
  test,
  production,
};

module.exports = config[env];
