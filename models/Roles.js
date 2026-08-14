module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("Roles", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true
        } 
    })

    return Roles
}