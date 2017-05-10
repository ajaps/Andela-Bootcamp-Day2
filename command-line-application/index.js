
//A simple command line application that consumes a GITHUB API using a HTTP client library.
const readLineSync = require('readline-sync');
const webRequest = require("https");

//Get UserID from command-line
console.log('Command line application using GITHUB API');
let userID = readLineSync.question("Enter UserID:   ");

let myConditions = {
	host: "api.github.com",
    method: "GET",
		headers: {"user-agent": "node.js"},
		path: "/users/" + userID+"/repos"		
	};

webRequest.get(myConditions, function(response) {
	response.on('data', function(data) {
		const resultData = data.toString();
	  console.log(resultData);  
	}); 
})
.on("error", function(exception) {
  console.log("An error was encountered: " + exception.message);
});