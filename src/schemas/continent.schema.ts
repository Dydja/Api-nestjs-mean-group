import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContinentDocument = Continent & Document;

@Schema()
export class Continent {
  @Prop()
  code: string;
  @Prop()
  name: string;
  @Prop({ default: Date.now })
  date_added: Date;
}

export const ContinentSchema = SchemaFactory.createForClass(Continent);
