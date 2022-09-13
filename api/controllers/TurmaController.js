const Sequelize = require('sequelize');
const Op = Sequelize.Op

const { TurmasServices } = require('../services');
const turmaServices = new TurmasServices();

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
        const { data_inicio, data_final } = req.query;
        const where = {};
        data_inicio || data_final ? where.data_inicio = {} : null;
        data_inicio ? where.data_inicio[Op.gte] = data_inicio : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;
        try {
            const todasAsTurmas = await turmaServices.pegaTurmaComFiltro(where);
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma = await turmaServices.pegaUmRegistro(id);
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaUmaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const turmaCriada = await turmaServices.criaRegistro(novaTurma);
            return res.status(200).json(turmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUmaTurma(req, res) {
        const { id } = req.params;
        const turmaAtualizada = req.body;
        try {
            await turmaServices.atualizaRegistro(turmaAtualizada, id);
            const novaTurmaAtualizada = await turmaServices.pegaUmRegistro(id);
            return res.status(200).json(novaTurmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            await turmaServices.apagaRegistro(id);
            return res.status(200).json(`id ${id} deletado`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async restauraUmaTurma(req, res) {
        const { id } = req.params;
        try {
            await turmaServices.restauraRegistro(id);
            return res.status(200).json(`id ${id} restaurado`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;