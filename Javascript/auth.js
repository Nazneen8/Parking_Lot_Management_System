const users = [
    { username: "user1", password: "password1", role: "user" },
    { username: "admin", password: "adminpassword", role: "admin" }
];

document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Redirect based on user role
        if (user.role === "admin") {
            window.location.href = 'admin-index.html'; // Redirect admin to admin-index
        } else {
            window.location.href = 'user-index.html'; // Redirect user to user-index
        }
    } else {
        alert("Invalid username or password");
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('user-section').style.display = 'none';
    document.getElementById('admin-section').style.display = 'none';
});

// Export for testing
module.exports = { authenticate };
