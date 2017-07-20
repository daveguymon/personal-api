const skillz = require('./../skillz')
const secrets = require('./../secrets');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateId: (req, res, next) => {
    req.body.id = (skillz[skillz.length-1] ? skillz[skillz.length-1].id + 1 : 1);
    next();
  },

  verifyUser: (req, res, next) => {
    console.log(req);
    if(req.url === '/api/secrets/dave/12345'){
      res.status(200).json(secrets);
    } else {
      res.status(400).json('Error: Access Denied')
    }
    next();
  }
}
