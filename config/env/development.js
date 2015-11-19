var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '182446122099481',
        clientSecret: '96c198619f860bd492ab087f4e5957f1',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    }
};
