var mongoose = require('./db.js');

var IcdfullnameSchema = new mongoose.Schema({
	ICDCodeSeven : {type: String},
	ICDChineseName : {type: String}
}, { collection: "icdfullname"})

module.exports = mongoose.model('Icdfullname', IcdfullnameSchema);