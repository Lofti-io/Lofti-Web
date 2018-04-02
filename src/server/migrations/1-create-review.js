'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      // review.title
      title: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },

      // review.description
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      // review.rating
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      userId: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('Reviews')
};
