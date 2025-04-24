const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const fresherForm = sequelize.define(
  "fresher_form",
    {
        fres_id: {
        type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING(50), 
            allowNull: true ,
            validate: { is: /^\+?[0-9]{10,15}$/ },
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        gradution: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cgpa: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0.0,
                max: 10.0
            },
        },
        job_position: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        resume: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        }, 
        createBy: { 
            type: DataTypes.BIGINT,
            allowNull: false
        },
    },
    {
        tableName: "fresher_form", 
    }
);

module.exports = fresherForm;
