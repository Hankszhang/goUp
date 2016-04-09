var db = require('./db.json')

/**
 * a mock password hash function
 * @param {string} input
 * @return {string} hashed password
 */
function mockEncrypt(input) {
  var tmp = input.split('')
  tmp.reverse()
  return tmp.join('')
}

function getUser(username, password) {
  var l = db.length
  var user
  while (l--) {
    user = db[l]
    if (username === user.name &&
      mockEncrypt(password) === user.passwordHash) {
      return user
    }
  }
  return null
}

module.exports = getUser
