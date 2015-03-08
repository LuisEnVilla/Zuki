module.exports = function(mongoose) {
  var Schema = mongoose.Schema;
  // Objeto modelo de Mongoose
  var SchemaDelegacion = new Schema({
    "reportesAgua" : Number,
    "nombre" : String,
    "incidencia" : {
        "nombre" : String,
        "cantidad" : Number
    },
    "gentefeliz" : Number,
    "porcentajeFeliz" : Number,
    "genteTriste" : Number
  }, {versionKey: false});
  SchemaDelegacion.set('collection','Delegaciones');
  return mongoose.model('delegaciones', SchemaDelegacion);
}