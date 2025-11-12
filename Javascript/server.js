// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const sql = require('mssql');
// const path = require('path');

// const app = express();

// // Middleware 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname))); // Serve static files

// // Session middleware 
// app.use(session({
//     secret: 'parking-lot-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

// // Database configuration
// const dbConfig = {
//     server: 'localhost\\SQLEXPRESS',
//     database: 'ParkingLotDB',
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     },
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     connectionTimeout: 30000,
//     requestTimeout: 30000
// };

// // Your existing route (keep this)
// app.get('/api/driver/:id', async (req, res) => {
//   const driver = await getDriverEmail(req.params.id);
//   res.json(driver);
// });

// //NEW ROUTES FOR LOGIN:

// // Login route
// app.post('/login', async (req, res) => {
//     try {
//         let pool = await sql.connect(dbConfig);
//         const { email, password } = req.body;

//         console.log('Login attempt:', email);

//         const result = await pool.request()
//             .input('email', sql.VarChar, email)
//             .input('password', sql.VarChar, password)
//             .query('SELECT * FROM users WHERE email = @email AND password = @password');

//         if (result.recordset.length > 0) {
//             // Login successful
//             req.session.user = result.recordset[0];
//             req.session.loggedin = true;

//             res.send(`
//                 <script>
//                     alert('Login successful! Welcome ${result.recordset[0].name}');
//                     window.location.href = '/studentDashboard.html';
//                 </script>
//             `);
//         } else {
//             res.send(`
//                 <script>
//                     alert('Invalid email or password. Try: student@example.com / Password123!');
//                     window.history.back();
//                 </script>
//             `);
//         }
//     } catch (err) {
//         console.error('Database error:', err);
//         res.send(`
//             <script>
//                 alert('Server error. Please try again.');
//                 window.history.back();
//             </script>
//         `);
//     }
// });

// // Check login status
// app.get('/api/check-auth', (req, res) => {
//     res.json({ loggedin: !!req.session.loggedin, user: req.session.user });
// });

// // Logout route
// app.get('/logout', (req, res) => {
//     req.session.destroy();
//     res.redirect('/');
// });

// // Start server 
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });