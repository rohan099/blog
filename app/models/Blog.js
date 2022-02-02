module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blogs", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.TEXT
        }
    });
    return Blog;
};