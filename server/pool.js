// 환경변수 불러오기
require("dotenv").config({ path: "../.env" });

// mysql2 모듈 불러오기
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

module.exports = pool;