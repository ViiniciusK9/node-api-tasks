const { Router } = require('express');
const TaskController = require('../controllers/TaskController');

const router = Router();

router.get('/api/tasks', TaskController.pegaTodasAsTasks);
router.get('/api/tasks/:id', TaskController.pegaUmaTask);
router.post('/api/project/:nota_id/tasks', TaskController.criaTask);
router.put('/api/tasks/:id', TaskController.atualizaTask);
router.delete('/api/tasks/:id', TaskController.apagaTask);

module.exports = router