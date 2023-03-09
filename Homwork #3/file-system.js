
//Create an event that will greet all students when they register to our app!
// Create a function that accepts parameters: studentFullname, studentEmail, studentPassword;
// The function should create a new student object (PS: Feel free to add id property to the student using the uuid library from class);
// Whenever the student object is created emit the event that will greet the student;
// BONUS:
// The previously created event, that greets the student, should aswell save the student full name in separate file named greeting_log.txt.
// In a separate file called students.json, using the file system module, save the newly created student.


import fs from 'fs';
import {v4 as uuidv4} from 'uuid';
import { EventEmitter } from 'events';

import path from 'path';





const eventEmitter = new EventEmitter();

function greetStudents ( fullName ,email, password ) {
    const student = {
        id: uuidv4(), // why is this underlined ?
        fullName: fullName,
        email: email,
        password: password

    }
    eventEmitter.emit('greet',student.fullName + '\n')
    const someFilePath = path.join('./','greeting.log.txt'); // ovde __dirname ?
    fs.appendFileSync(someFilePath , student.fullName);
}

eventEmitter.on( 'greet',( fullName )=>{
        console.log('Hello', `${fullName}`);

});

greetStudents('Bogdan Trencev','toopgun.com','somepassword')

