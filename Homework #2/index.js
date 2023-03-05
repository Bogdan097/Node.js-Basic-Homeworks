/**
 * Exercise 1
1.Initialize a new npm project and create an index.js file. 
2.Using the fs module create a new file called homework.txt 
3.Create a path to the file using the path module 
4.Inside the file write the following "Homework 02 in Basic Node"
5.Append to the file the following " FINISHED!" 
6.Read the file contents and print them out in the console.
 */



const fs = require('fs');
const path = require('path');
const colors = require('colors');

const filePath = path.join(__dirname, 'homework.txt');

fs.writeFile(filePath, 'Homework 02 in Basic Node', (err) => {
  if (err) throw err;
  console.log(colors.bgMagenta.yellow('We created a file and added some text!'));
  
  
  fs.appendFile(filePath, ' FINISHED!', (err) => {
      if (err) throw err;
      console.log(colors.yellow('Wea also appended the word FINISHED!'));
      
      
      fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err;
          console.log(data,(colors.magenta ("\nI think we did it right,if not,leave a critic ")));
        });   
     });
  });
  

  