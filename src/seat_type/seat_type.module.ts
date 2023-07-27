import { Module } from '@nestjs/common';
import { Venue_typeController } from './venue_type.controller';
import { Venue_typeService } from './venue_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_type } from './models/venue_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue_type])],
  controllers: [Venue_typeController],
  providers: [Venue_typeService],
})
export class Venue_typeModule {}
