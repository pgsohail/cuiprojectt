<?php
// Establish connection to the MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dba";


$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validate the form data
    if (empty($name) || empty($email) || empty($password)) {
        echo "Please fill in all fields.";
    } else {
        $checkEmailQuery = "SELECT * FROM users WHERE email = '$email'";
        $checkEmailResult = mysqli_query($conn, $checkEmailQuery);

        if (mysqli_num_rows($checkEmailResult) > 0) {
            echo "Email already exists. Please use a different email.";
        } else {
            $insertQuery = "INSERT INTO users (username, Email, password) VALUES ('$name', '$email', '$password')";
            if (mysqli_query($conn, $insertQuery)) {
                header("Location: index.html");
            }
             else {
                echo "Error: " . mysqli_error($conn);
            }
        }
    }
}

mysqli_close($conn);
?>
