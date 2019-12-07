// This helps Define the Many to Many relationships
module.exports = function(sequelize, DataTypes) {
  UserProject = sequelize.define("user_project", {
    role: Sequelize.STRING
  });
  User.belongsToMany(Project, { through: UserProject });
  Project.belongsToMany(User, { through: UserProject });
};
