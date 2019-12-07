module.exports = function(sequelize, DataTypes) {
  var Employees = sequelize.define("Employees", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    empID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    markets: DataTypes.STRING
  });

  Employees.associate = function(models) {
    Employees.belongsToMany(Projects, {
      as: [employeeForeignId],
      through: [populatedProject],
      foreignKey: "Employees_rowId"
    });
  };

  return Employees;
};
