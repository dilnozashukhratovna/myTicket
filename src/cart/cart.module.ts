import { Module } from '@nestjs/common';
import { BuilderController } from './import { Company } from 'src/company/models/company.model';.controller';
import { BuilderService } from './cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
