const {sequelize, DataTypes, Model} = require('../db/database')

class User extends Model{}

 User.init({
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false
});

module.exports = {User};
