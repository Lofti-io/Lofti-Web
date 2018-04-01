const UserModel = (sequelize, DataTypes) => {
  // User model
  const User = sequelize.define('User', {
    // user.userId
    id: {
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

  // User.associate = (models) => {
  //   // TODO: Add associations
  // }

  return User
}

export default UserModel
