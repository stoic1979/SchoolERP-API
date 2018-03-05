import config from '../config/config';
const readlineSync = require('readline-sync');
const mongoose     = require('mongoose');
const User        = require('../models/user.model');

function addUser() {
	
	var firstname  = readlineSync.question("Enter firstname\n?");
	var lastname  = readlineSync.question("Enter lastname\n?");
	var email  = readlineSync.question("Enter email\n?");
	var password  = readlineSync.question("Enter password\n?");
	var role  = readlineSync.question("Enter role\n?");

	var user = new User({
		firstname : firstname,
		lastname : lastname,
		email : email,
		password : password,
		role : role,
	});

	user.save(function(err){
		if(err){
			console.log('Error while saving the user '+err);
		}

		console.log('user saved successfully');
	});



}//addUser

// read from config
let mongoUri = config.db;
console.log('mogo uri '+mongoUri);
mongoose.connect(mongoUri,function(err){
    if(err) {
        console.log("Error connecting to database ", err);
        return;  
    }

    console.log("Connected to", mongoUri);

    addUser();

})




