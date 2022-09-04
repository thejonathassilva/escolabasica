const database = require('../models');

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaTurma);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }

    static async criaUmaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const turmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(turmaCriada);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUmaTurma(req, res) {
        const { id } = req.params;
        const turmaAtualizada = req.body;
        try {
            await database.Turmas.update(turmaAtualizada, {
                where: {
                    id: Number(id)
                }
            })
            const novaTurmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(novaTurmaAtualizada);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(`id ${id} deletado`);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;