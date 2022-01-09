const database = require('../models');


class NotaController {
    static async pegaTodasAsNotas(req, res){
        try{
            const todasAsNotas = await database.Notas.findAll({include: 'tasks'});
            return res.status(200).json(todasAsNotas);
        }catch (error) {
            return res.status(500).json(error.message);
        }
        
    }


    static async pegaUmaNota(req, res){
        const { id } = req.params;
        try{
            const nota = await database.Notas.findByPk(id, {include: 'tasks'});
            if (!nota) {
                return res.status(400).json({ error: 'Nota not found' });
            }
            return res.status(200).json(nota);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async criaNota(req, res){
        const novaNota = req.body;
        try{
            const novaNotaCriada = await database.Notas.create(novaNota, { include: [{ association: 'tasks' }] });
            return res.status(201).json(novaNotaCriada);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async atualizaNota(req, res){
        const infoNota = req.body;
        const { id } = req.params;
        try{
            const note = await database.Notas.findByPk(id);
            if (!note) {
                return res.status(404).json({ error: 'Note not found' });
            }
            await database.Notas.update(infoNota, {
                where: {
                    id: parseInt(id)
                }
            });
            const notaAtualizada = await database.Notas.findByPk(id);
            return res.status(201).json(notaAtualizada);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async apagaNota(req, res) {
        const { id } = req.params;
        try{
            const note = await database.Notas.findByPk(id);
            if (!note) {
                return res.status(404).json({ error: 'Note not found' });
            }
            await database.Notas.destroy({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(204).json();
        }catch (error){
            return res.status(500).json(error.message);
        }
    }
};

module.exports = NotaController