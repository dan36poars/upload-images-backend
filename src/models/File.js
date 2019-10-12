// connection database
const { sequelize, Sequelize } = require('./index');

 // Model to File  
const Files = sequelize.define('files', {
    thumbnail_url: {
        type: Sequelize.STRING
    }
});

module.exports = Files;