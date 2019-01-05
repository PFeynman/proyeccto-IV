import { Document, Schema, Model, model } from 'mongoose';

export interface IItem extends Document {
    _id: number;
    name: string;
    into: Array<number>;
}

export const ItemSchema: Schema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    into: { type: Array, default: []}
});

export const Item: Model<IItem> = model<IItem>('Item', ItemSchema)
