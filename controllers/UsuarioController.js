/**
 * Created by Armando on 24/05/2016.
 */
var jwt=require('jsonwebtoken');
module.exports = function (app) {
    return{
        tokenGenerator:function(req,res){
            var token=jwt.sign({company:'Kinal'},'S3CUR3@APP');
            res.send(token);
        },
        tokenMiddleware:function(req,res,next){
            var token=req.headers['x-access-token'] || req.body.token || req.query.token;
            if(token){
                jwt.verify(token,'S3CUR3@APP',function(err,decoded){
                    if(err){
                        return res.status(403).send({
                            success:false,
                            message:'Fallo al validar token'
                        });
                    }
                    req.user=decoded;
                    next();
                });
            }else{
                return res.status(403).send({
                    success:false,
                    message:'No se proporciono token'
                });
            }
        },
        add: function(req, res){
            var Usuario = app.get('usuario');
            Usuario.create({
                nombre : req.body.nombre,
                correo : req.body.correo,
                nick : req.body.nick,
                contraseña : req.body.contraseña
            }).then(function (usuario) {
                res.json(usuario);
            });
        },
        list: function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.findAll().then(function (usuario) {
                res.json(usuario);
            });
        }
    }
}

function expiresIn(dias){
    var dateObj=new Date();
    return dateObj.setDate(dateObj.getDate()+dias);
}
function genToken(user){
    var payload=jwt.sign({
            "company":"Kinal"
        },
        'S3CUR3@APP');
    var token={
        "token":payload,
        "user":user,
        "exp": expiresIn(1)
    }
    return token;
}