// user model to put users into database
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

export const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export const createUser = ({ email, password}) => {
    user = new User({
        email: email,
        password: password,
    })
    console.log("created a new user!");
    console.log("email: ", email, "password: ", password);
    return user;
}