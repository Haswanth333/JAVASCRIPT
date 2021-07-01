// variabe usage

const uid = "abac123";

// cannot
// uid = "abcd123";

var fullName = "Haswanth royal";
var email = "haswanthroya33@gmail.com";
var password = "12345";
var confirmPassword = "12345";
var courseCount = 0;
var isLoggedInFromGoogle = false;

var firstName = "Haswanth";
var lastName = "Royal";
var country = "India";
var state = "Andhra Pradesh";
var isLoggedInFromFacebook = false;

console.log(`
   First name is : ${firstName}
   Last name is : ${lastName}
   email is : ${email}
   password is : ${password}
   state : ${state}
   country : ${country}
   Course Count : ${courseCount}
   Logged in from Google : ${isLoggedInFromGoogle}
   Logged in from Facebook : ${isLoggedInFromFacebook}


`);

// fullName = prompt("Enter your full name");

console.log("This is my full name :", fullName);
console.log(email);

console.log(`
    With UniqueId : ${uid}
    User is: ${fullName}
    and his email is : ${email}
    and uses the password: ${password}

`);
