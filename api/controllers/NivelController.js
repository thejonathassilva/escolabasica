const database = require('../models');

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umNivel);
        } catch (e) {
            return res.status(500).json(error.message);
        } 
    }

    static async criaUmNivel(req, res) {
            const novoNivel = req.body;
            try {
                const novoNivelCriado = await database.Niveis.create(novoNivel);
                return res.status(200).json(novoNivelCriado);
            } catch (e) {
            return res.status(500).json(error.message);
            
        }
    }

    static async atualizaUmNivel(req, res) {
        const { id } = req.params;
        const nivelAtualizado = req.body;
        try {
            await database.Niveis.update(nivelAtualizado, {
                where: {
                    id: Number(id)
                }
            }) 
            const novoNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            }) 
            return res.status(200).json(novoNivel);
        } catch (e) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaUmNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
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

module.exports = NivelController;