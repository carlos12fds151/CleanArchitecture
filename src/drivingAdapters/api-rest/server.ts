/* eslint-disable import/first */
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as http from 'http';
import { PlanetScale } from '../../drivenAdapters/PlanetScale';
import routes from './routes';

export class Server {
  private readonly _port: string;
  private readonly _app: express.Express;
  private _httpServer?: http.Server;
  private readonly planetScale: PlanetScale;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(routes);
    this.planetScale = new PlanetScale();
  }

  async listen(): Promise<void> {
    void this.planetScale.start();
    this._httpServer = this._app.listen(this._port, () => {
      console.log(`🚀✨🌎 App is running at http://localhost:${this._port}`);
      console.log(`❌ Press CTRL + C to stop`);
    });
  }

  async stop(): Promise<void> {
    return await new Promise((resolve, reject) => {
      if (this._httpServer != null) {
        this._httpServer.close((error) => {
          return reject(error);
        });
        return resolve();
      }
      return resolve();
    });
  }
}
const port: string = process.env.PORT ?? '3000';
const server = new Server(port);
void server.listen();
