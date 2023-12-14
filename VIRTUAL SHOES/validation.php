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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if (empty($email) || empty($password)) {
        echo "Please fill in all fields.";
    } else {
        $sql = "SELECT * FROM users WHERE Email = '$email' AND password = '$password'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_assoc($result);
            $name = $row["username"];
            header("Location: index.html?username=" . urlencode($name));
            echo "<script>const username = '$name';</script>";
            exit();
        } else {
            echo "Invalid email or password.";
        }
    }
}

mysqli_close($conn);
?>
