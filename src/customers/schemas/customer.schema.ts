import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
        
 
    @Prop()
    custFName: string;
    
    @Prop()
    custLName: string;
    @Prop()
    custOrderNum:string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);