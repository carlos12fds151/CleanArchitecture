import { DataTypes } from 'sequelize';
import { sequelize } from '../config/index';

export const UserModel: any = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
