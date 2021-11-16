import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    orderRefNo: string;
    
    @Prop()
    custId: string;

    @Prop()
    products:any[];

    @Prop()
    status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);