'use strict';

var scrap = require('../controllers/scrap');

// The Package is past automatically as first parameter
module.exports = function(Scrap, app, auth, database) {

    app.post('/scrap',scrap.scrapWebsite);

};