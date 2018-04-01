module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
      },
      userName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: queryInterface => queryInterface.dropTable('Users'),
}
