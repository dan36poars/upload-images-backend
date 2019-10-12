module.exports = {
	database: 'nodeauth',
	username: 'postgres',
	password: 'root',
	dialect: 'postgres',
	options: {
		host: 'localhost',
	},
  logging: false,
	define: {
    underscored: true,
    underscoredAll: true,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  },
  sync: { 
    force: true 
  }
}
