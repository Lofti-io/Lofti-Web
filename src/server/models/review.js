const ReviewModel = (sequelize, DataTypes) => {
  // Review model
  const Review = sequelize.define('Review', {
    // review.title
    title: {
      type: DataTypes.STRING,
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
