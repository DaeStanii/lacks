const {Model, DataTypes}=require('sequelize');
const sequelize = require('../config/config');

class Thread extends Model {

}

Thread.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        thread_title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        created_on:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'thread'
    }
);

module.exports = Thread;