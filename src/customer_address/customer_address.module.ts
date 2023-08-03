import { Module } from '@nestjs/common';
import { Customer_addressController } from './customer_address.controller';
import { Customer_addressService } from './customer_address.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_address } from './models/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_address])],
  controllers: [Customer_addressController],
  providers: [Customer_addressService],
})
export class Customer_addressModule {}
