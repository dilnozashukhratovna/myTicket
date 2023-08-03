import { Module } from '@nestjs/common';
import { Event_typeController } from './event_type.controller';
import { Event_typeService } from './event_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event_type } from './models/event_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Event_type])],
  controllers: [Event_typeController],
  providers: [Event_typeService],
})
export class Event_typeModule {}
