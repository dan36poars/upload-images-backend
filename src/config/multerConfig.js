const path = require('path');
const multer = require('multer');

const storageType = {
	local : multer.diskStorage({
		destination: function (req, file , cb) {
			cb(null,  path.resolve(__dirname, '..', '..', 'tmp', 'uploads') )
		},
		filename: function ( req, file , cb ) {
		cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}` )
		}
	})
}


module.exports = {
	dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
	storage: storageType.local,
	limits : {
		fileSize: 2 * 1024 * 1024
	},
	fileFilter : ( req, file, cb ) => {
		const allowedMines = [
			'image/jpeg',
			'image/png'
		];

		if (allowedMines.includes(file.mimetype) ) {
			cb(null, true)
		} else {
			cb(new Error('Invalid file types.'))
		}
	},
}
