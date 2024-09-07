// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
<?php
// Step 1: Database connection
$servername = "localhost";
$username = "root"; // default username in XAMPP
$password = ""; // default password is empty in XAMPP
$dbname = "form_db"; // name of the database you created

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Handling form data submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $socials = $_POST['socials'];
    $drive_link = $_POST['drive_link'];

    // Step 3: Insert data into the database
    $sql = "INSERT INTO form_submissions (name, email, contact, socials, drive_link)
            VALUES ('$name', '$email', '$contact', '$socials', '$drive_link')";

    if ($conn->query($sql) === TRUE) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close(); // Step 4: Close the database connection
}
?>
<?php
// Include database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request is an AJAX request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $contact = $conn->real_escape_string($_POST['contact']);
    $socials = $conn->real_escape_string($_POST['socials']);
    $drive_link = $conn->real_escape_string($_POST['drive_link']);

    // SQL query to insert data into database
    $sql = "INSERT INTO form_submissions (name, email, contact, socials, drive_link)
            VALUES ('$name', '$email', '$contact', '$socials', '$drive_link')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        // Return a success response
        echo json_encode(['message' => 'Form submitted successfully']);
    } else {
        // Return an error response
        echo json_encode(['error' => 'Error: ' . $sql . '<br>' . $conn->error]);
    }

    // Close the connection
    $conn->close();
}
?>

// Use password hashing or OpenSSL to encrypt data
$encrypted_email = openssl_encrypt($email, "AES-128-CTR", "your-encryption-key", 0, "1234567891011121");

$sql = "INSERT INTO form_submissions (name, email, contact, socials, drive_link)
        VALUES ('$name', '$encrypted_email', '$contact', '$socials', '$drive_link')";
