import { Module } from '@nestjs/common';
import { Customer_cardController } from './customer_card.controller';
import { Customer_cardService } from './customer_card.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_card } from './models/customer_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_card])],
  controllers: [Customer_cardController],
  providers: [Customer_cardService],
})
export class Customer_cardModule {}
