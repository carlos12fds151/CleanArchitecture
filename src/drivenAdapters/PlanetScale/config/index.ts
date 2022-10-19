import { Sequelize } from 'sequelize';
const { DBDATABASE, DBUSER, DBPASSWORD, DBHOST, DBPORT } = process.env;

const DATABASE = DBDATABASE !== undefined ? DBDATABASE : 'default';
const USER = DBUSER !== undefined ? DBUSER : 'root';
const PASSWORD = DBPASSWORD !== undefined ? DBPASSWORD : '';
const HOST = DBHOST !== undefined ? DBHOST : 'localhost';
const PORT = DBPORT !== undefined ? Number(DBPORT) : 6832;

export const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  port: PORT
});
