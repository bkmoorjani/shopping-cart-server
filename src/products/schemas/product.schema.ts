import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    productName: string;

    @Prop()
    productDescription: number;

    @Prop()
    productPrice: string;

    @Prop()
    productQuantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);