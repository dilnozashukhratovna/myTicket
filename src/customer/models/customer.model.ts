import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface CustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  birth_date: Date;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'Customer first name' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ example: 'Green', description: 'Customer last name' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: '+998997778800',
    description: 'Customer phone number',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @ApiProperty({ example: 'john@gmail.com', description: 'Customer email' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({ example: 'Pa$$w0rd', description: 'Customer password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: '2002-01-01', description: 'Customer birth date' })
  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @ApiProperty({ example: 0, description: 'Customer gender' })
  @Column({
    type: DataType.INTEGER,
  })
  gender: number;

  @ApiProperty({ example: 1, description: 'Language id' })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
