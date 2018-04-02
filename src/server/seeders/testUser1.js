module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
      userName: 'TestUser',
      email: 'testuser@test.com',
      password: 'testpass',
      createdAt: new Date(0),
      updatedAt: new Date(0),
    },])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',[{
      id: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
    },])
  }
};
