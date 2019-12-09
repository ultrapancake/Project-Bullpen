module.exports = function(sequelize, DataTypes) {
  var Employees = sequelize.define("Employees", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    empID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    markets: DataTypes.STRING
  });

  Employees.associate = function(models) {
    Employees.belongsToMany(models.Projects, {
      // as: "employeeId",
      through: models.populatedProject,
      foreignKey: "Employees_rowId",
      onDelete: "cascade"
    });
  };

  return Employees;
};
