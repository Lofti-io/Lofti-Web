const { TEST_USER_ID } = require('../../shared/constants')
const securePassword = require('secure-password')

const pwd = securePassword()
const plainPass = Buffer.from('testpass')
const hashedPass = pwd.hashSync(plainPass)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: TEST_USER_ID,
      name: 'TestUser',
      email: 'testuser@test.com',
      password: hashedPass,
      createdAt: new Date(0),
      updatedAt: new Date(0),
    },])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',[{
      id: TEST_USER_ID,
    },])
  }
};
