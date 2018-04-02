const UserModel = (sequelize, DataTypes) => {
  // User model
  const User = sequelize.define('User', {
    // user.userId
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    // user.userName
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user.email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user.password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  // User has many reviews
  User.associate = (models) => {
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      as: 'reviews',
    })
  }

  return User
}

export default UserModel
