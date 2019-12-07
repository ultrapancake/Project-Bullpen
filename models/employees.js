module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    empID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    markets: DataTypes.STRING
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.belongsToMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Employee;
};
