module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    projName: DataTypes.STRING,
    owner: DataTypes.STRING,
    contractValue: DataTypes.INTEGER,
    market: DataTypes.STRING,
    startDate: DataTypes.STRING,
    finishDate: DataTypes.STRING
  });

  Projects.associate = function(models) {
    Projects.belongsTo(models.empID, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Projects;
};
