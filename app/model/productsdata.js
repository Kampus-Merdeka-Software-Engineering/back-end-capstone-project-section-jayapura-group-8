const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const productsData = sequelize.define('productsData', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_src: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    stars: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    categories: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // updatedAt: {
    //     type: DataTypes.STRING,
    //     allowNull:true
    // },
    // createdAt: {
    //     type: DataTypes.STRING,
    //     allowNull:true
    // }
});

module.exports = productsData