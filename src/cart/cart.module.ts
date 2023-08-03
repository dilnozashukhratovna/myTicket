import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CartController } from './cart.controller';

@Module({
  imports: [SequelizeModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
