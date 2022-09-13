// const database = require('../models');

const { NiveisServices } = require('../services');
const nivelServices = new NiveisServices();

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await nivelServices.pegaTodosOsRegistros();
            return res.status(200).json(todosOsNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
            const umNivel = await nivelServices.pegaUmRegistro(id);
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    static async criaUmNivel(req, res) {
            const novoNivel = req.body;
            try {
                const novoNivelCriado = await nivelServices.criaRegistro(novoNivel);
                return res.status(200).json(novoNivelCriado);
            } catch (error) {
            return res.status(500).json(error.message);
            
        }
    }

    static async atualizaUmNivel(req, res) {
        const { id } = req.params;
        const nivelAtualizado = req.body;
        try {
            await nivelServices.atualizaRegistro(nivelAtualizado, id);
            const novoNivel = await nivelServices.pegaUmRegistro(id);
            return res.status(200).json(novoNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaUmNivel(req, res) {
        const { id } = req.params;
        try {
            await nivelServices.apagaRegistro(id);
            return res.status(200).json(`id ${id} deletado`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async restauraUmNivel(req, res) {
        const { id } = req.params;
        try {
            await nivelServices.restauraRegistro(id);
            return res.status(200).json(`id ${id} restaurado`)
        } catch (error) {
            return res.status(500).json(error.message);
            
        }
    }
}

module.exports = NivelController;