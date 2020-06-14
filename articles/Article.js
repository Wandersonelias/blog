const Sequelize = require('sequelize');
const connection = require("../database/database");
const Category = require('../categories/Category');//Model Category

const Article = connection.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article);//Uma para muitos
Article.belongsTo(Category);//Uma para um



module.exports = Article;
