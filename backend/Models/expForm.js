const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const fresherForm = require('./fresherForm')

const expForm = sequelize.define(
  "exp_form",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fres_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(20),
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
        work_module: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: "exp_online_form", 
    }
);

expForm.belongsTo(fresherOnlineForm, {foreignKey: 'fres_id'})

module.exports = expForm;
