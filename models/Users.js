module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Anonymous"
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })

    Users.associate = (models) => {
        Users.hasMany(models.Roles, {
            onDelete: "cascade"
        })
    }

    return Users
}