const {sequelize, DataTypes, Model} = require('../db/database')

class Show extends Model{}

Show.init({
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    watch_status: DataTypes.BOOLEAN,
}, {
    sequelize,
    timestamps: false
});


module.exports = {Show};



