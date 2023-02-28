
/**
 
Homework
Login functionality with the usage of the package colors
Create a function that accepts two params: username & password
If user exists in users array print the message : "User is logged in" in green text
If not: "User not found" in red text and yellow background */



let users = [ 
    {role: "admin", fullName: "John Doe", username: "qwerty", password: "123qwe"},
    {role: "client", fullName: "Bob Bobski", username: "asdasd", password: "zxczxc"},
    {role: "admin", fullName: "Tom Brady", username: "TomTerrific", password: "goat123"} ,
    {role: "client", fullName: "John Brzenk", username: "armgoat", password: "kingmove22"} 


];


const color = require('colors');

let loginFunctionality = function (username,password) {
  const user = users.find(userInfo => userInfo.username === username && userInfo.password === password);
  if (user) {
    console.log(color.green('User is logged in'));
  } else {
    console.log(color.bgYellow.red('User not found'));
  }
}


loginFunctionality('TomTerrific', 'goat123'); // printame user so tekst vo zeleno 
loginFunctionality('foo', 'bar'); // printame  user not found vo zolta pozadina so crven tekst 


