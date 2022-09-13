const Services = require('./Services');
const database = require('../models');

class TurmasServices extends Services {
    constructor() {
        super('Turmas')
    }

    async pegaTurmaComFiltro(where) {
        return database[this.nomeDoModelo].findAll({ where });
    }
}

module.exports = TurmasServices;