import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '../../cart/models/cart.model';

interface BookingAttr {
  cart_id: number;
  createdAt: Date;
  fineshedAt: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, BookingAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @ApiProperty({ example: 1, description: 'Cart id' })
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  cart_id: number;

  @ApiProperty({ example: '01-01-2023', description: 'Creating date' })
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @ApiProperty({ example: '01-02-2023', description: 'Finishing date' })
  @Column({
    type: DataType.DATE,
  })
  fineshedAt: Date;

  @ApiProperty({ example: 1, description: 'Payment method id' })
  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;

  @ApiProperty({ example: 1, description: 'Delivery method id' })
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;

  @ApiProperty({ example: 1, description: 'Discount coupon id' })
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;

  @ApiProperty({ example: 1, description: 'Status id' })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;
}
