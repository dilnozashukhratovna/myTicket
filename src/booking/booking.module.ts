import { Module } from '@nestjs/common';
import { BuilderController } from './booking.controller';
import { BuilderService } from './booking.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
