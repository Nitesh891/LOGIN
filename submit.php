<?php
$conn = new mysqli("localhost", "root", "", "website");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstname = $_POST['FirstName'];
$lastname = $_POST['LastName'];
$fathername = $_POST['FatherName'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$phone = $_POST['Phone'];
$password = $_POST['Password'];
$gender = $_POST['Gender'];
$address = $_POST['Address'];
$trade = $_POST['Trade'];

$sql_formdata = "INSERT INTO Formdata (firstname, lastname, fathername, dob, email, phone, password, gender, address, trade)
VALUES ('$firstname', '$lastname', '$fathername', '$dob', '$email', '$phone', '$password', '$gender', '$address', '$trade')";

$sql_login = "INSERT INTO Login (username, password)
VALUES ('$firstname', '$password')";

if ($conn->query($sql_formdata) === TRUE && $conn->query($sql_login) === TRUE) {
    echo "✅ Registration Successful!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
