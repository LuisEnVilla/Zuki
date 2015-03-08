var mongoose = require('mongoose');
var dbName = 'zuki';
var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + dbName;

if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + dbName;
}
mongoose.connect(mongodb_connection_string,function(err, res) {
	if(!err) console.log('Conectado a BD uMaker');
});

global.db = {
mongoose: mongoose,
//models
delegaciones 	: 	require('./delegacion')(mongoose)
// agregar más modelos aquí en caso de haberlos
};
module.exports = global.db;