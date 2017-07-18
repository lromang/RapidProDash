var options = {};
pgp = require('pg-promise')(options);

    const config = {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME ||'temba',
        user: process.env.DB_USER || 'messanger',
        password: process.env.DB_PASSWORD || 'test'
    };

var db = pgp(config);

console.log('DB Config -> ', JSON.stringify(config));

module.exports = {
    db : db 
};
