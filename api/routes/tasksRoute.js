const { Router } = require('express');
const TaskController = require('../controllers/TaskController');

const router = Router();

router.get('/api/tasks', TaskController.pegaTodasAsTasks);            // lista todos os registros
router.get('/api/tasks/:id', TaskController.pegaUmaTask);             // lista um registro específico por Id
router.post('/api/project/:nota_id/tasks', TaskController.criaTask);  // cria um novo registro
router.put('/api/tasks/:id', TaskController.atualizaTask);            // atualiza um registro
router.delete('/api/tasks/:id', TaskController.apagaTask);            // deleta um registro

module.exports = router