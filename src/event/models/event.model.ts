import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface EventAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: string;
  finish_date: Date;
  finish_time: string;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: Date;
}

@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Event name', description: 'Event name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: 'photo', description: 'Event photo' })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({ example: '2023-01-01', description: 'Event start date' })
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @ApiProperty({ example: '6pm', description: 'Event start time' })
  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @ApiProperty({ example: '2023-01-01', description: 'Event finish date' })
  @Column({
    type: DataType.STRING,
  })
  finish_date: Date;

  @ApiProperty({ example: '8pm', description: 'Event finish time' })
  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @ApiProperty({ example: 'Text', description: 'Event info' })
  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ApiProperty({ example: 1, description: 'Event type id' })
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;

  @ApiProperty({ example: 1, description: 'Human Category id' })
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;

  @ApiProperty({ example: 1, description: 'Event vanue id' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({ example: 1, description: 'Event language id' })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({ example: '2023-01-01', description: 'Event release date' })
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
