const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DBNAME,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

client.connect(async function (err) {
  if (err) {
    console.log("Connection failed!");
    throw err;
  }
  console.log("Connected to PostGres!");
});

const connectDb = async (query) => {
  try {
    const result = await client.query(query);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const closeDbConnection = async () => {
  await client.end();
};

module.exports = connectDb;
