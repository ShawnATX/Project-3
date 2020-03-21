var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    },

    username: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    },

    imgIcon: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: true
    },

    password: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

<<<<<<< HEAD
  //User.sync({ force: true });
  User.associate = function (models) {
=======
  User.associate = function(models) {
>>>>>>> 03bfd11d133020d0fb189d4aed12ea244d076e12
    User.hasMany(models.Art, { onDelete: "cascade" });
    User.hasMany(models.Comment, { onDelete: "cascade" });
  };
  //User.sync({ force: true });

  return User;
};
