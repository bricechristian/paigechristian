const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// CLEARS OUT THE SCHEMA. ELIMINATES A SCHEMA OVERWRITE ISSUE I HAD WHEN TRYING TO RUN THE SERVER.

mongoose.models = {};
mongoose.modelSchemas = {};

const BlogSchema = new Schema({
		title: {type: String, required: true},
		date: {type: String, required: true},
		content: {type: String, required: true}
});

module.exports = mongoose.model('Blog', BlogSchema);
