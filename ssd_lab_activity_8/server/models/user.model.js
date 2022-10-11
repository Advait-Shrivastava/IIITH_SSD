const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		roll: { type: String, required: true, unique: true  },
		password: { type: String, required: true},
		role: { type: String, required: true },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('QueryData', User)

module.exports = model