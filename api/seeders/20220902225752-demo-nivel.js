'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Niveis', [{
      desc_nivel: 'iniciante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      desc_nivel: 'intermediario',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      desc_nivel: 'avançado',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}); 
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Niveis', null, {});
  }
};
