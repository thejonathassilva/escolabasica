'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Maria Jose',
        ativo: true,
        email: 'maria@maria.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        nome: 'Jose Roberto',
        ativo: true,
        email: 'jose@jose.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
    {
      nome: 'Dennis Oliveira',
      ativo: false,
      email: 'denis@denis.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      nome: 'Sofia Nascimento',
      ativo: true,
      email: 'sofia@sofia.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      nome: 'Jonathas Silva',
      ativo: true,
      email: 'jonathas@jonathas.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
