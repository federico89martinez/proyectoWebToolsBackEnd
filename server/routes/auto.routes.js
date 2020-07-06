const express = require('express');
const router = express.Router();

const auto = require('../controllers/auto.controller');

router.get('/', auto.getAutos);   //obtener auto
router.post('/', auto.createAuto); //guardar auto
router.get('/:id', auto.getAuto);   //buscar auto por id
router.put('/:id', auto.editAuto);    //editar auto por id
router.delete('/:id', auto.deleteAuto);  //eliminar auto por id

module.exports = router;