const {Model, DataTypes}=require('sequelize');
const sequelize = require('../config/connection');

class Thread extends Model {

}

Post.init(
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
        created_by:{
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
        modelName:'post'
    }
);

module.exports = Thread;