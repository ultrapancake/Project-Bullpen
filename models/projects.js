module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    projName: DataTypes.STRING,
    owner: DataTypes.STRING,
    contractValue: DataTypes.INTEGER,
    market: DataTypes.STRING,
    startDate: DataTypes.STRING,
    finishDate: DataTypes.STRING,
    projType: DataTypes.STRING
  });

  Projects.associate = function(models) {
    Projects.belongsToMany(models.Employees, {
      // as: [projForeignId],
      through: models.populatedProject, //this can be string or a model,
      foreignKey: "Projects_rowId",
      onDelete: "cascade"
    });
  };

  return Projects;
};
