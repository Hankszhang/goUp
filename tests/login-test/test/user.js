var assert = require('assert')
var getUser = require('../src/user')

// example
describe('user', function() {
  // existing user with correct password
  it('should get matching user', function() {
    var username = 'test1'
    var password = 'password1'
    var user = getUser(username, password)
    assert(user !== null)
  });
  // user not exist
  it('should return null when user not exist', function() {
      var username = 'test';
      var password = 'password';
      var user = getUser(username, password);
      assert(user == null);
  });
  // the input username is null
  it('should return null when username is null', function() {
      var username = '';
      var password = 'password';
      var user = getUser(username, password);
      assert(user == null);
  });
  // incorrect password
  it('should return null when password is incorrect', function() {
    var username = 'test1'
    var password = 'wrongpass'
    var user = getUser(username, password)
    assert(user == null)
  });
});
