const oracledb = require('oracledb');
const dbConfig = require('./config/db.config.js');
const db = require('./models/index.js');

//var password = 'admin' 

// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();