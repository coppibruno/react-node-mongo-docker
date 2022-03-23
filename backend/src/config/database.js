const mongoose = require('mongoose');

// const url = 'mongodb://admin:admin@localhost:27017/todo?authMode=scram-sha1';
const url = 'mongodb://mongo:27017/databasetest';

mongoose.connect(url, {useNewUrlParser: true} );

module.exports = mongoose;