import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string[];

  @Prop({ type: [{ type: String, ref: 'Task' }] })
  tasks: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
