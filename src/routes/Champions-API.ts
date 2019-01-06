import { Response } from 'express'

import { Champion, IChampion } from '../models/champion'

export class ChampionAPI {
    
    public getAll(res: Response){
        Champion.find()
            .then((champions: Array<IChampion>) => {
                res.status(200).send({
                    data: champions
                })
            })
            .catch((err) => {
                res.status(204).send({ 'data': 'No data' });
            });
    }

    public getOne(res: Response, id: string) {
        var response: IChampion;
        Champion.findOne({_id: id})
            .then((champion: IChampion) => {
                res.status(200).send({
                    data: champion
                })
            });
    }
}