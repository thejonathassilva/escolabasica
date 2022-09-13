const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class MatriculasServices extends Services {
    constructor() {
        super('Matriculas')
    }

    async pegaUmaMatricula(estudanteId, matriculaId) {
        return database[this.nomeDoModelo].findOne({
            where: {
                id: matriculaId,
                estudante_id: estudanteId,
            }
        })
    }

    async atualizaMatricula(novasInfos, estudanteId, matriculaId) {
        return database[this.nomeDoModelo]
            .update(novasInfos, { where: {
                id: matriculaId,
                estudante_id: estudanteId
            }})
    }

    async deletaMatricula(estudanteId, matriculaId) {
        return database[this.nomeDoModelo]
            .destroy({ where: {
                id: matriculaId,
                estudante_id: estudanteId
            }})
    }

    async restauraMatricula(estudanteId, matriculaId) {
        return database[this.nomeDoModelo]
            .restore({ where: {
                id: matriculaId,
                estudante_id: estudanteId
            }})
    }

    async pegaTodasAsMatriculas(turmaId) {
        return database[this.nomeDoModelo].findAndCountAll({
            where: {
                turma_id: turmaId,
                status: 'confirmado',
            }, 
            order: [['createdAt', 'DESC']]
        })
    }

    async pegaAsTurmasLotadas() {
        const lotacaoTurma = 1;
        return database[this.nomeDoModelo].findAndCountAll({
            where: {
                status: 'confirmado'
            },
            attributes: ['turma_id'],
            group: ['turma_id'],
            having: Sequelize.literal(`count(turma_id) > ${lotacaoTurma}`)
        })
    }
}

module.exports = MatriculasServices;