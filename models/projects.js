module.exports = function(sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
        owner: DataTypes.STRING,
        contractValue: DataTypes.INTEGER,
        market: DataTypes.STRING,
        startDate: DataTypes.DATE,
        finishDate: DataTypes.DATE
    });
    return Projects;
};