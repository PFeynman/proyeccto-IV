import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routeProvider';

// https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
// https://tutorialedge.net/typescript/testing-typescript-api-with-mocha-chai/

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
