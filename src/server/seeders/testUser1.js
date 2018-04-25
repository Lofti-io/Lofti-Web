// Hash the seeded password
const securePassword = require('secure-password')
const pwd = securePassword()

const plainPass = Buffer.from('testpass')
const hashedPass = pwd.hashSync(plainPass).toString('base64')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 'ddeb27fb-d9a0-4624-be4d-4615062daed4',
      name: 'TestUser',
      email: 'testuser@test.com',
      password: hashedPass,
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
