var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '182446122099481',
        clientSecret: 'ENV["FACEBOOK_KEY"]',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },
   twitter: {
      clientID: 'dvX7ucVNuasExyWYWuiBinUBo',
      clientSecret: 'ENV["TWITTER_KEY"]',
      callbackURL: 'http://localhost:1337/oauth/twitter/callback'
    }
  };
