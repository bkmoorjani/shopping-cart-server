import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
        
    @Prop()
    custId: string;

    @Prop()
    custFName: string;
    
    @Prop()
    custLName: string;
    @Prop()
    custOrderN: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);