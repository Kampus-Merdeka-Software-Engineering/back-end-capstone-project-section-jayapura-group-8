const connection = require('./index')
const sequelize = require('sequelize')

const products = connection.define("productsData", {
    id: {type: sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: sequelize.DataTypes.STRING},
    imageSrc: {type: sequelize.DataTypes.TEXT},
    price: {type: sequelize.DataTypes.DOUBLE},
    stars: {type: sequelize.DataTypes.DOUBLE},
    categories: {type: sequelize.DataTypes.JSON},
}, {
    freezeTableName: true,
    timestamps: false
})
// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const productsData = sequelize.define('productsData', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     imageSrc: {
//         type: DataTypes.TEXT,
//         allowNull: true,
//     },
//     price: {
//         type: DataTypes.DOUBLE,
//         allowNull: false,
//     },
//     stars: {
//         type: DataTypes.DOUBLE,
//         allowNull: false,
//     },
//     categories: {
//         type: DataTypes.JSON,
//         allowNull: true,
//     },
    // updatedAt: {
    //     type: DataTypes.STRING,
    //     allowNull:true
    // },
    // createdAt: {
    //     type: DataTypes.STRING,
    //     allowNull:true
    // }
// });

module.exports = products