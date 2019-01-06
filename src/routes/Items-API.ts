import { Response } from 'express'

import { Item, IItem } from '../models/items'

export class ItemAPI {
    public getAll(res: Response){
        Item.find()
            .then((items: Array<IItem>) => {
                res.status(200).send({
                    data: items
                })
            })
            .catch((err) => {
                res.status(204).send({ 'data': 'No data' });
            });
    }
}