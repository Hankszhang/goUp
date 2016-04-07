var assert = require('assert')
var isTokenValid = require('../src/token')

//Load users from db
var db = require('../src/db.json');
//Load default config
var getConfig = require('../src/config');
var config = getConfig();

// test token
describe('token', function() {
    it('should return true when everything match', function() {
        var user = db[0];
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == true);
    });
    it('should return false when the token is expired', function() {
        var user = db[1];
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
    it('should return false when the token is invalidated', function() {
        var user = db[2];
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
    it('should return false when the user has no token', function() {
        var user = db[0];
        user.token = null;
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
    it('should return false when user is null', function() {
        var user = null;
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
    it('should return false when config is null', function() {
        var user = db[0];
        var config = null;
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
    it('should return true when ignoreTimestamps is true though the token is expired', function() {
        var user = db[1];
        var config = {
            uninitialized: false,
            ignoreTimestamps: true
        };
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == true);
    });
    it('should return false when uninitialzed is true', function() {
        var user = db[1];
        var config = {
            uninitialized: true,
            ignoreTimestamps: false
        };
        var tokenTest = isTokenValid(user, config);
        assert(tokenTest == false);
    });
});
