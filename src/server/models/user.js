const UserModel = (sequelize, DataTypes) => {
  // User model
  const User = sequelize.define('User', {
    // user.id
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    // user.name
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'Invalid length for name field',
        },
      },
    },

    // user.email
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Not a valid email',
        },
      },
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
