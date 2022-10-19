import { sequelize } from './config';
import './entities/user.model';

export class PlanetScale {
  async start(): Promise<void> {
    await this.authenticate();
    await this.syncTables();
  }

  async authenticate(): Promise<void> {
    await sequelize
      .authenticate()
      .then(() => console.log('🔓 DB is Authenticated'))
      .catch((err) => console.log(err));
  }

  async syncTables(): Promise<void> {
    await sequelize
      .sync({ force: true })
      .then(() => console.log('📁 Models synchronized'))
      .catch((err) => console.log(err));
  }
}
