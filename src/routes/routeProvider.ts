import {Request, Response} from "express";

export class Routes {

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    status: 'OK',
                })
            })

        app.route('/champions')
            // Get all champions
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET all champion page successful',
                })
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
                res.status(200).send({
                    message: 'GET champion page successful',
                })
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
                res.status(200).send({
                    message: 'GET all items page successful',
                })
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
