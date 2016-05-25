/**
 * Created by Armando on 06/05/2016.
 */
var ruta = require('express').Router();
module.exports=(function(app){
 //Departamentos
   var departamento = require('../controllers/DepartamentoController')(app);

    ruta.get('/departamento', departamento.list);
    ruta.post('/departamento', departamento.add);
    ruta.put('/departamento', departamento.edit);
    ruta.delete('/departamento', departamento.delete);
    ruta.get('/departamento/:id', departamento.DepConLugares);

 //LugaresTuristicos
   var lugarturistico = require('../controllers/LugarTuristicoController')(app);

    ruta.get('/lugarturistico', lugarturistico.list);
    ruta.post('/lugarturistico', lugarturistico.add);

 //Usuarios
   var usuarios = require('../controllers/UsuarioController')(app);

    ruta.get('/usuario', usuarios.list);
    ruta.post('/usuario', usuarios.add);

    return ruta;
});