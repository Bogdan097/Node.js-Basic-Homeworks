/**
 * Create server using HTTP module; 
 * -When the default url is hit return HTML content to the user, the content of your choice.
 *  -When the url /student is hit, return HTML with the informations: 
 * -Student name: "your name"; Student lastName: "your lastName"; 
 * -Academy: "the academy you are at";
 * -Subject: "the current subject we are learning"                                        
 */


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let student = {
    firstName: 'Bogdan',
    lastName: 'Trenchev',
    academy: 'SEDC',
    subject: 'Node.Js Basic'

  }

const server = http.createServer((req, res) => {
  // Check if the default URL is hit
  if (req.url === '/') {
  
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<html><body><h1>Welcome to my website!</h1></body></html>');
  }
  // Check if the /student URL is hit
  else if (req.url === '/student') {
    res.setHeader('Content-Type', 'text/html');
    // Return student information, i did it like this and also hardcored my info in the html file which i didn't show cause it's you know,Hardcored :)...
    res.statusCode = 200;
    res.end(`<html><body><h1>Student Information</h1><p>Student firstName: ${student.firstName}</p><p>Student lastName:${student.lastName} </p><p>Academy: ${student.academy}</p><p>Subject: ${student.subject}</p></body></html>`);
  }
  // If no match,return a 404 error
  else {
    res.statusCode = 404;
    res.end('Error 404: Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is now  running at http://${hostname}:${port}/, go check your browser !`);
});




