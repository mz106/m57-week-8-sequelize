const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define(
  "book",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    genrename: {
      type: DataTypes.STRING,
      defaultValue: "some genre",
    },
  },
  { timestamps: false }
);

module.exports = Book;
