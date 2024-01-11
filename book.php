<?php
include "connection.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Book Screen</title>
</head>
<body>
    <?php
    // Assuming you have an array of books
    $books = array(
        array("title" => "Book 1", "author" => "Author 1", "year" => 2020),
        array("title" => "Book 2", "author" => "Author 2", "year" => 2019),
        array("title" => "Book 3", "author" => "Author 3", "year" => 2018)
    );

    // Loop through the books array and display book information
    foreach ($books as $book) {
        echo "<h2>" . $book['title'] . "</h2>";
        echo "<p>Author: " . $book['author'] . "</p>";
        echo "<p>Year: " . $book['year'] . "</p>";
        echo "<hr>";
    }
    ?>
</body>
</html>
