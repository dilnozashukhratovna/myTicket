import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Venue_photoAttr {
  venue_id: number;
  url: string;
}

@Table({ tableName: 'venue_photo' })
export class Venue_photo extends Model<Venue_photo, Venue_photoAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Venue id' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({ example: 'url', description: 'url' })
  @Column({
    type: DataType.STRING,
  })
  url: string;
}
