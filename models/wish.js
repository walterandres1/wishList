"use: strict"
module.exports = (sequelize, DataTypes) => {
    const Wish = sequelize.define('Wish', {
        name: DataTypes.STRING
    },{});

    Wish.associate = function(models) {
        Wish.belongsTo(models.User)
    };
    return Wish

}

