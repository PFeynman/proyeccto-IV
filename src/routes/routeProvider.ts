import { Request, Response } from "express";

import { ItemAPI } from './Items-API';
import { ChampionAPI } from './Champions-API';
import { request } from "https";

export class Routes {
    championApi: ChampionAPI = new ChampionAPI()
    itemApi: ItemAPI = new ItemAPI()

    constructor() {
    }

    public routes(app): void {

        app.route('/status')
            .get((req: Request, res: Response) => {                
                res.status(200).send({
                    status: 'OK',
                    routes: {
                        allChampions: '/champions',
                        specificChampion: '/champion/:id',
                        allItems: '/items',
                        specificItem: '/item/:id'
                    }
                })
            })

        app.route('/champions')
            // Get all champions
            .get((req: Request, res: Response) => {
                this.championApi.getAll(res);
            })
            // Create new champion
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST champion request successful',
                })
            })

        app.route('/champion/:championId')
            // Get specific champion
            .get((req: Request, res: Response) => {
                var championId = req.params.championId;
                this.championApi.getOne(res, championId);
            })
            // Update champion
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT champion request succesful',
                })
            })
            // Delete champion
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE champion request succesful',
                })
            })

        app.route('/items')
            // Get all items
            .get((req: Request, res: Response) => {
                this.itemApi.getAll(res);
            })
            // Create new item
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST item request successful',
                })
            })
        app.route('/item/:itemId')
            // Get specific item
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET specific item page successful',
                })
            })
            // Update item
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT item request succesful',
                })
            })
            // Delete item
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE item request succesful',
                })
            })
    }

}
