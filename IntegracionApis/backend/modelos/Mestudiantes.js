const sequelize = require("../db/conection");
const { DataTypes } = require("sequelize");

const Mestudiantes = sequelize.define(
  "Mestudiantes",
  {
    idMaestro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    cantidadEstudiantes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "Mestudiantes",
    timestamps: false,
  },
);

module.exports = Mestudiantes;
