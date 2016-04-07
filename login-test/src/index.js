var getConfig = require('./config')
var getUser = require('./user')
var isTokenValid = require('./token')

var username = prompt('please enter your username!')
var password = prompt('please enter your password!')

// Get the user from db with given username and password.
var user = getUser(username, password); 
// get config
var config = getConfig(); 
if(user == null){
    alert("User not exist or password incorrect!");
} else {
    // Token is valid or not
    var tokenTest = isTokenValid(user, config); 
    if (tokenTest) {
        //user exists and token is valid
        alert('Welcome! ' + user.name);
    } else {
        alert('Oops...');
    }
}
