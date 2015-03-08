var express = require('express');
var router = express.Router();
var request = require("request")

router.get('/ciudad/:lat/:lng', function(req, res) {
    var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000';
    request({ url: url, json: true }, function (error1, response1, body1) {
        if (!error1 && response1.statusCode === 200) {
            var url = 'http://datos.labplc.mx/aire.json';
            request({ url: url, json: true }, function (error2, response2, body2) {
                if (!error2 && response2.statusCode === 200) {
                    if (body1.consulta.cuadrante.delegacion){
                        var temp = {
                            temperatura : body2.consulta.clima.temperatura,
                            condicion   : body2.consulta.clima.condicion,
                            recomendaciones : body2.consulta.uv.recomendaciones
                        };
                        console.log({delegacion:body1.consulta.cuadrante.delegacion ,temperaturaActual:temp });
                        res.status(200).jsonp({delegacion:body1.consulta.cuadrante.delegacion ,temperaturaActual:temp });
                    };
                }
            })
        }
    })
})

router.get('/delegacion/:lat/:lng', function(req, res) {
    var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000';
    request({ url: url, json: true }, function (error1, response1, body1) {
        if (!error1 && response1.statusCode === 200) {
            if (body1.consulta.cuadrante.delegacion){
                db.delegaciones.findOne({nombre: body1.consulta.cuadrante.delegacion}, function(req, datos){
                    console.log(datos);
                    res.status(200).jsonp({result: datos, dele: body1.consulta.cuadrante.delegacion});
                });
            }
            }
        })
    })

router.get('/cercania/:lat/:lng', function(req, res) {
    var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000&categoria=mercados';
    console.log(url);
    request({ url: url, json: true }, function (error1, response1, body1) {
        if (!error1 && response1.statusCode === 200) {
            if (body1.consulta.cuadrante.delegacion){
                var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000&categoria=hospitales';
                request({ url: url, json: true }, function (error2, response2, body2) {
                    if (!error2 && response2.statusCode === 200) {
                        var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000&categoria=estacionamientos';
                        request({ url: url, json: true }, function (error3, response3, body3) {
                            if (!error3 && response3.statusCode === 200) {
                                var url = 'http://datos.labplc.mx/georeferencia.json?&latitud=' + req.params.lat + '&longitud=' + req.params.lng + '&radio=1000&categoria=escuelas';
                                request({ url: url, json: true }, function (error4, response4, body4) {
                                    if (!error4 && response4.statusCode === 200) {
                                        var lugaresInteres={
                                            mercados:[],
                                            hospitales:[],
                                            escuelas:[],
                                            estacionamientos:[]
                                        };
                                        if  (response1.body.consulta.ubicaciones.length){
                                            var aux = response1.body.consulta.ubicaciones
                                            for (x in aux){
                                                auxi = {
                                                    nombre: aux[x].nombre,
                                                    lat : aux[x].latitud,
                                                    lng : aux[x].longitud
                                                };
                                                lugaresInteres.mercados.push(auxi);
                                            }}
                                        if  (response2.body.consulta.ubicaciones){
                                        var aux = response2.body.consulta.ubicaciones
                                        for (x in aux){
                                            auxi = {
                                                nombre: aux[x].nombre,
                                                lat : aux[x].latitud,
                                                lng : aux[x].longitud
                                            };
                                            lugaresInteres.hospitales.push(auxi);
                                        }}
                                        if  (response3.body.consulta.ubicaciones){
                                        var aux = response3.body.consulta.ubicaciones
                                        for (x in aux){
                                            auxi = {
                                                nombre: aux[x].nombre,
                                                lat : aux[x].latitud,
                                                lng : aux[x].longitud
                                            };
                                            lugaresInteres.estacionamientos.push(auxi);
                                        }}
                                        if  (response4.body.consulta.ubicaciones){
                                        var aux = response4.body.consulta.ubicaciones
                                        for (x in aux){
                                            auxi = {
                                                nombre: aux[x].nombre,
                                                lat : aux[x].latitud,
                                                lng : aux[x].longitud
                                            };
                                            lugaresInteres.escuelas.push(auxi);
                                        }}
                                        console.log(lugaresInteres);
                                        res.status(200).jsonp({lugaresDeInteres: lugaresInteres});
                                    }
                                }
                                       )
                            }
                        }
                               )
                    }
                }
                       )
            }
        }
    }
           );
});
           
module.exports = router;