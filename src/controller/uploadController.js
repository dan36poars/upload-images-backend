const File = require('../models/File');
const Sequelize = require('sequelize');

module.exports = {
    store( req, res ){

        // Note: using `force: true` will drop the table if it already exists
        // const response = await File.sync({ force: true }).then(() => {
        //   // Now the `users` table in the database corresponds to the model definition
        //   return File.create({
        //     thumbnail_url: file.path           
        //   });
        // });

        const sequelize = new Sequelize('nodeauth', 'postgres', 'root', {
            host: 'localhost',
            dialect: 'postgres'
        });

        // Testing connection

        sequelize
          .authenticate()
          .then(() => {
            console.log('Connection has been established successfully.');
          })
          .catch(err => {
            console.error('Unable to connect to the database:', err);
          });

        // Model to table  
        const Uploads = sequelize.define('files', {
            thumbnail_url: {
                type: Sequelize.STRING
            }
        });

        // Create the data in table
        // const response = Uploads.sync({ force: true })
        // .then( () => {
        //     return Uploads.create({
        //         thumbnail_url: req.file.path
        //     });
        // });

        const response = async() => {
            try {
                const resp = await Uploads.create({
                    thumbnail_url: req.file.path
                });
                return resp
            } catch(e) {
                return e;
            }
        }

        const data = response()
        .then( (resolve )=> {
            return resolve
        });

        res.json(data);
    }
}