function isTokenValid(user, config) {
    var timeLeft =
        !!config &&
        !!user &&
        !!user.token &&
        !user.token.invalidated &&
        !config.uninitialized &&
        (config.ignoreTimestamps ||
        getTimeLeft(user.token.expiry));

    // The token must not be expired
    return timeLeft > 0;
}

function getTimeLeft(expiry) {
    return expiry - ~~(Date.now() / 1000);
}

module.exports = isTokenValid
