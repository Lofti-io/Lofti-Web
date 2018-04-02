const ReviewModel = (sequelize, DataTypes) => {
  // Review model
  const Review = sequelize.define('Review', {
    // review.title
    title: {
      type: DataTypes.STRING(140),
      allowNull: false,
      validate: {
        len: {
          args: [1, 140],
          msg: 'Review title length invalid',
        },
      },
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
      validate: {
        min: 0.0,
        max: 5.0,
      },
    },
  })

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  }

  return Review
}

export default ReviewModel
