const { Router } = require('express');
const NotaController = require('../controllers/NotaController');

const router = Router();

router.get('/api/project', NotaController.pegaTodasAsNotas);
router.get('/api/project/:id', NotaController.pegaUmaNota);
router.post('/api/project', NotaController.criaNota);
router.put('/api/project/:id', NotaController.atualizaNota);
router.delete('/api/project/:id', NotaController.apagaNota);

module.exports = router