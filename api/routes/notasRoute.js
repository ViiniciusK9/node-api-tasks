const { Router } = require('express');
const NotaController = require('../controllers/NotaController');

const router = Router();

router.get('/api/project', NotaController.pegaTodasAsNotas); // lista todos os registros
router.get('/api/project/:id', NotaController.pegaUmaNota);  // lista um registro específico por Id
router.post('/api/project', NotaController.criaNota);        // cria um novo registro
router.put('/api/project/:id', NotaController.atualizaNota); // atualiza um registro
router.delete('/api/project/:id', NotaController.apagaNota); // deleta um registro

module.exports = router