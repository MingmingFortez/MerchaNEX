// user model to put users into database
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('d21orf41k6c3r2', 'u8eniq7su6io8s', 'p54a40fc4963d81bc289f08a47008bd4fffb57304edf02a3e85563d30f6b35547', {
    host: 'ccba8a0vn4fb2p.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
});

export const User = sequelize.define('u8eniq7su6io8s', {
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