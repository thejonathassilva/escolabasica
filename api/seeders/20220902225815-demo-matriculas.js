'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Matriculas', [{ 
      status: 'confirmado',
      estudante_id: 5,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: 'confirmado',
      estudante_id: 6,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    status: 'confirmado',
      estudante_id: 6,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    status: 'confirmado',
      estudante_id: 1,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {})
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
