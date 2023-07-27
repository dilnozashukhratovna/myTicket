import { Module } from '@nestjs/common';
import { BuilderController } from './venue_photo.controller';
import { BuilderService } from './venue_photo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/venue_photo.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
