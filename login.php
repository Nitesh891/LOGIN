<?php
$conn = new mysqli("localhost", "root", "", "website");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['Username'];
$password = $_POST['Password'];

$sql = "SELECT * FROM Login WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "✅ Login successful! Welcome, $username.";
} else {
    echo "❌ Invalid username or password.";
}

$conn->close();
?>
