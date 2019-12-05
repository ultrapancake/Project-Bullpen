module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    empID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    markets: DataTypes.STRING
  });
  return Employee;
};
