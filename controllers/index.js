var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('home');
});


router.post('/', function(req, res) {
    db.users.findOne({email : req.body.email}, function (err, dato){
        if(!dato){
            var usuario = new db.users({
                email:   req.body.email
            });
            usuario.save();
        }
        res.render('home');
    });
});

module.exports = router;