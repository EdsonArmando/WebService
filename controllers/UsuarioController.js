/**
 * Created by Armando on 24/05/2016.
 */
module.exports = function (app) {
    return{
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