/**
 * Created by Armando on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var LugarTuristico = app.get('lugarturistico');
            LugarTuristico.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                idDepartamento: req.body.idDepartamento
            }).then(function (lugarturistico) {
                res.json(lugarturistico);
            });
        },
        list: function (req, res) {
            var LugarTuristico = app.get('lugarturistico');
            LugarTuristico.findAll().then(function (lugarturisticos) {
                res.json(lugarturisticos)
            });
        }
    }
}
