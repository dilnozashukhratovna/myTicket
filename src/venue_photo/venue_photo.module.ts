import { Module } from '@nestjs/common';
import { Venue_photoController } from './venue_photo.controller';
import { Venue_photoService } from './venue_photo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_photo } from './models/venue_photo.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue_photo])],
  controllers: [Venue_photoController],
  providers: [Venue_photoService],
})
export class Venue_photoModule {}
