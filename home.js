//studentlogin
function login() {
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;

  // Perform login validation here
  if(Username === "admin" && Password === "admin") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid Username or Password.Please try again");
    return false;
  }
}
//signup
function submit() {
  var Firstname = document.getElementById("Firstname").value;
  var Laststname = document.getElementById("Laststname").value;
  var Email = document.getElementById("Email").value;
  var RollNo = document.getElementById("RollNo").value;
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;
  console.log("Firstname:"+Firstname);
  console.log("Lastname:"+Laststname);
  console.log("Email:"+Email);
  console.log("Username:"+Username);
  console.log("Password:"+Password);
}
//adminlogin
function adminlogin(){
var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;

  // Perform login validation here
  if(Username === "admin" && Password === "admin") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid Username or Password.Please try again");
    return false;
  }
}
//addbook
//assume you have an array to store book
let books=[];
function addbook(){
   const Bookname = document.getElementById("Bookname").value;
   const Authorname = document.getElementById("Authorname").value;
   const Quantity = document.getElementById("Quantity").value;
   const Price = document.getElementById("Price").value;
   if(!Bookname||!Authorname||!Quantity||!Price){
    alert('Please fill in both bookname or authorname or quantity or price');
    return;
   }
   //create a book object
   const newbook={bookname,authorname,quantity,price};
   //add the book to the array
   books.push(newbook);
   console.log('book added:',newbook);
   console.log('all books:',books);
  }
//editbooks
function editbook(){
   const Bookname = document.getElementById("Bookname").value;
   const Authorname = document.getElementById("Authorname").value;
   if(!Bookname||!Authorname){
    alert('Please fill in both bookname or authorname or quantity or price');
    return;
   }
   console.log('bookname:'+bookname);
   console.log('authorname:'+authorname);
  }
//searchbook
function searchbook(){
  const Bookname = document.getElementById("Bookname").value;
  const Authorname = document.getElementById("Authorname").value;
  if(!Bookname||!Authorname){
   alert('Please fill in both bookname or authorname ');
   return;
  }
  console.log('bookname:'+bookname);
  console.log('authorname:'+authorname);
 }
//issuebook
function issuebook(){
  const Bookname = document.getElementById("Bookname").value;
  const studentname = document.getElementById("studentname").value;
  const duedate = document.getElementById("duedate").value;

  if(!Bookname||!Authorname||!duedate){
   alert('Please fill in both bookname or studentname or duedate');
   return;
  }
  console.log('bookname:'+bookname);
  console.log('studentname:'+studentname);
  console.log('duedate:'+duedate)
 }






  
  





