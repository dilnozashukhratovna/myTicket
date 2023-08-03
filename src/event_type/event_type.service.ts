import { Injectable } from '@nestjs/common';
import { Event_type } from './models/event_type.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEvent_typeDto } from './dto/create-event_type.dto';
import { UpdateEvent_typeDto } from './dto/update-event_type.dto';

@Injectable()
export class Event_typeService {
  constructor(@InjectModel(Event_type) private event_typeRepo: typeof Event_type) {}

  async createEvent_type(createEvent_typeDto: CreateEvent_typeDto): Promise<Event_type> {
    const event_type = await this.event_typeRepo.create(createEvent_typeDto);
    return event_type;
  }

  async getAllEvent_type(): Promise<Event_type[]> {
    const event_types = await this.event_typeRepo.findAll({ include: { all: true } });
    return event_types;
  }

  async getEvent_typeById(id: number): Promise<Event_type> {
    const event_type = await this.event_typeRepo.findByPk(id);
    return event_type;
  }

  async deleteEvent_typeById(id: number) {
    const event_type = await this.event_typeRepo.destroy({ where: { id } });
    return event_type;
  }

  async updateEvent_type(id: number, updateEvent_typeDto: UpdateEvent_typeDto) {
    const event_type = await this.event_typeRepo.update(updateEvent_typeDto, {
      where: { id },
      returning: true,
    });

    return event_type[1][0].dataValues;
  }
}
