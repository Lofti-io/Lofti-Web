module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Users', {
      // user.userId
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      // user.userName
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // user.email
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // user.password
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },

  down: queryInterface => queryInterface.dropTable('Users'),
}
