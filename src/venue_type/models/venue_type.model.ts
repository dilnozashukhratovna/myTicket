import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Venue_typeAttr {
 name:string
}

@Table({ tableName: 'venue_type' })
export class Venue_type extends Model<Venue_type, Venue_typeAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Balcon', description: 'Venue type name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  
}
