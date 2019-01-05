import { Document, Schema, Model, model } from 'mongoose';

export interface IChampion extends Document {
    _id: string;
    title: string;
}

export const ChampionSchema: Schema = new Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true }
});

export const Champion: Model<IChampion> = model<IChampion>('Champion', ChampionSchema);
