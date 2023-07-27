import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Venue_type } from 'src/venue_type/models/venue_type.model';

interface VenueAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Venue', description: 'Venue name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'Main street 56', description: 'Venue address' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: 'London', description: 'Venue location' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({ example: 'venue.com', description: 'Venue site' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  site: string;

  @ApiProperty({ example: '1234567', description: 'Venue phone' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 1, description: 'Venue venue type id' })
  @ForeignKey(() => Venue_type)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_type_id: number;

  @ApiProperty({ example: 'Schema', description: 'Venue schema' })
  @Column({
    type: DataType.STRING,
  })
  schema: string;

  @ApiProperty({ example: 1, description: 'Venue region id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;

  @ApiProperty({ example: 1, description: 'Venue district id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;

  @BelongsTo(() => Venue_type)
  vanue_type: Venue_type;
}
