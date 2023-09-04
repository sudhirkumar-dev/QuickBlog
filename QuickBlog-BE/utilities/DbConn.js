

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.Dburl
  });

console.log(process.env.console)
module.exports = pool