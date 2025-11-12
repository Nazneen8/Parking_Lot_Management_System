<?php
session_start();

// LIVE DEMO VALIDATION - Perfect for presentation!
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Pre-approved demo credentials 
    $valid_logins = [
        'ST10456789@rcconnect.edu.za' => 'Password123!', // CHANGED FROM 'Pass123!'
        'admin@example.com' => 'Admin123!', 
        'test@example.com' => 'Test123!',
        'demo@example.com' => 'Demo123!'
    ];
    
    // Check if credentials match our demo users
    if (array_key_exists($email, $valid_logins) && $password === $valid_logins[$email]) {
        // Login successful - set session variables
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;
        $_SESSION['name'] = ucfirst(explode('@', $email)[0]) . ' User';
        
        // Show success message and redirect
        echo "<script>
            alert('Login successful! Welcome back, {$_SESSION['name']}');
            window.location.href = 'studentDashboard.html';
        </script>";
        exit();
    }
    // Allow ANY credentials to work for demo purposes (optional)
    else if (!empty($email) && !empty($password)) {
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;
        $_SESSION['name'] = 'Demo User';
        
        echo "<script>
            alert('Login successful! Welcome, Demo User');
            window.location.href = 'studentDashboard.html';
        </script>";
        exit();
    }
    // No credentials provided
    else {
        echo "<script>
            alert('Please enter email and password.\\n\\nDemo: student@example.com / Password123!');
            window.history.back();
        </script>";
        exit();
    }
}

// If someone accesses login.php directly, redirect to login page
header("Location: StudentLogin.html");
exit();
?>