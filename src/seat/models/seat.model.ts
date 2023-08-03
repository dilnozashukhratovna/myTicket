import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface SeatAttr {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, SeatAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Sector' })
  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @ApiProperty({ example: 1, description: 'Row number' })
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @ApiProperty({ example: 1, description: 'Number' })
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ApiProperty({ example: 1, description: 'Venue id' })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({ example: 1, description: 'Seat type id' })
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_id: number;

  @ApiProperty({ example: 'Location', description: 'Location in schema' })
  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;
}
