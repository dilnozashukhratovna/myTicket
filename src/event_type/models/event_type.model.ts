import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Event_typeAttr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'event_type' })
export class Event_type extends Model<Event_type, Event_typeAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Event", description: 'Event type name.' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 1, description: 'Parent event type id.' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parent_event_type_id: number;

  
  
}
