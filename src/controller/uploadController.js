const Files = require('../models/File');

module.exports = {
    store(req, res){       

        const response = async() => {
            try {
                const resp = await Files.create({
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

        res.json(req.file);
    }
}