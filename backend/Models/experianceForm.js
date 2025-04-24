const {DataTypes} = require('sequelize')
const sequelize = require('sequelize')

const experianceForm = sequelize.define(
    "experiance_form",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
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
        experience: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        job_position: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        duration_from: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duration_to: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        work_description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        resume: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        }, 
    }
)

module.exports = experianceForm;