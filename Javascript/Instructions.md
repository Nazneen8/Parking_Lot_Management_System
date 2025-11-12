# XAMPP + SQL SERVER SETUP

## Files Provided:
- `login.php` - Database connection ready template
- `login.html` - Updated form action

## Database Details (from settings.json):
- Server: LAPTOP-OCOHBPDO\SQLEXPRESS
- Database: ParkingLotDB  
- Windows Authentication

## Required SQL:
```sql
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL
);

INSERT INTO users (email, password, name) 
VALUES ('student@example.com', 'Password123!', 'Demo Student');