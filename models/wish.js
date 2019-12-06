"use: strict"
module.exports = (sequelize, DataTypes) => {
    const Wish = sequelize.define('Wish', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        category: DataTypes.STRING,
        description: DataTypes.STRING
    },{});

    Wish.associate = function(models) {
        Wish.belongsTo(models.User)
    };
    return Wish

}

