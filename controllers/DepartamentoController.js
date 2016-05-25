/**
 * Created by Armando on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion
            }).then(function (departamento) {
                res.json(departamento);
            });
        },
        list: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.findAll().then(function (departamentos) {
                res.json(departamentos)
            });
        },
        edit: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.find(req.body.idDepartamento).then(function (departamento) {
                if(departamento){
                    departamento.updateAttributes({
                        nombre: req.body.nombre,
                        direccion: req.body.direccion
                    }).then(function (departamento) {
                        res.json(departamento);
                    });
                }else{
                    res.status(404).send({ message: "Departamento no existe"});
                }
            });
        },
        delete: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.destroy({
                where:{
                    idDepartamento: req.body.idDepartamento
                }
            }).then(function (departamento) {
                res.json(departamento);
            });
        },
        prueba: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.find(req.body.idDepartamento).then(function (departamento) {
               if(departamento){
                   res.json(departamento);
               }else{
                   res.status(404).send({ message: "Departamento no existe"});
               }
            });
        },
        DepConLugares: function (req, res) {
            var Departamento = app.get('departamento');
            var LugarTuristico = app.get('lugarturistico');
            Departamento.find({ where: {idDepartamento:req.params.id}, include:[LugarTuristico]}).then(function (departamento) {
                res.json(departamento);
            });
        }
    }
}