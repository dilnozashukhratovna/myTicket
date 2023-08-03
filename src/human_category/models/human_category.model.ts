import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Human_categoryAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: 'human_category' })
export class Human_category extends Model<Human_category, Human_categoryAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Up to 15',
    description: 'Human category name',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: 10,
    description: 'Human category start age',
  })
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;

  @ApiProperty({
    example: 100,
    description: 'Human category finish age',
  })
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @ApiProperty({
    example: 1,
    description: 'Human category gender (0 => male, 1 => female)',
  })
  @Column({
    type: DataType.INTEGER,
  })
  gender: number;
}
