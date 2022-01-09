const database = require('../models');


class TaskController {
    static async pegaTodasAsTasks(req,res){
        try{
            const todasAsTasks = await database.Tasks.findAll();
            return res.status(200).json(todasAsTasks);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async pegaUmaTask(req, res){
        const { id } = req.params;
        try{
            const task = await database.Tasks.findByPk(id);
            if (!task) {
                return res.status(400).json({ error: 'Task not found' });
            }
            return res.status(200).json(task);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async criaTask(req, res){
        const novaTask = req.body;
        const { nota_id } = req.params;
        try{
            const novaTaskCriada = await database.Tasks.create({...novaTask, nota_id});
            return res.status(201).json(novaTaskCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async atualizaTask(req, res){
        const infoTask = req.body;
        const { id } = req.params;
        try{
            const task = await database.Tasks.findByPk(id);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            await database.Tasks.update(infoTask, {
                where: {
                    id: parseInt(id)
                }
            });
            const taskAtualizada = await database.Tasks.findByPk(id);
            return res.status(200).json(taskAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async apagaTask(req, res) {
        const { id } = req.params;
        try{
            const task = await database.Tasks.findByPk(id);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            await database.Tasks.destroy({
                where: {
                    id: parseInt(id)
                }
            });
            return res.status(204).json();
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }
};

module.exports = TaskController