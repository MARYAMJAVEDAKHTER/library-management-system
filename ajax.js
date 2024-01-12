// ajax.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to make an Ajax request
    function makeAjaxRequest(url, method, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    }

    // Function to update the book list on the page
    function updateBookList(response) {
        var bookList = document.getElementById("book-list");
        bookList.innerHTML = response;
    }

    // Initial load of the book list
    makeAjaxRequest("get_books.php", "GET", updateBookList);

    // Example: Add event listener for a button to refresh the book list
    var refreshButton = document.getElementById("refresh-button");
    if (refreshButton) {
        refreshButton.addEventListener("click", function () {
            makeAjaxRequest("get_books.php", "GET", updateBookList);
        });
    }
});
