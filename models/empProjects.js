// This helps Define the Many to Many relationships
module.exports = function(sequelize, DataTypes) {
  populatedProject = sequelize.define("populatedProject", {
    empID: DataTypes.INTEGER,
    projName: DataTypes.STRING,
    owner: DataTypes.STRING
  });
  //   Employees.belongsToMany(Projects, { through: populatedProject });
  //   Projects.belongsToMany(Employees, { through: populatedProject });

  return populatedProject;
};
