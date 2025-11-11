const sql = require('mssql');

const config = {
  server: 'localhost',
  database: 'ParkingLotDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

async function getDriverEmail(driverId) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('driverId', sql.VarChar, driverId)
      .query(`
        SELECT 
          Name, 
          Surname, 
          CONCAT(DriverID, '@gmail.com') AS Email
        FROM Driver
        WHERE DriverID = @driverId
      `);
    return result.recordset[0];
  } catch (err) {
    console.error(err);
  }
}
