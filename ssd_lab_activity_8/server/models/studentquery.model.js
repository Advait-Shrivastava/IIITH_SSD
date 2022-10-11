const mongoose = require('mongoose')

const query = new mongoose.Schema(
	{
		exam: { type: String, required: true, unique: true  },
		course: { type: String, required: true},
		question: { type: String, required: true },
        ta: { type: String, required: true },
        comment: { type: String, required: true },
	},
	{ collection: 'query-data' }
)

const model = mongoose.model('UserData', query)

module.exports = model