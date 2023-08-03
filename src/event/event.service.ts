import { Injectable } from '@nestjs/common';
import { Event } from './models/event.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepo: typeof Event) {}

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const event = await this.eventRepo.create(createEventDto);
    return event;
  }

  async getAllEvent(): Promise<Event[]> {
    const events = await this.eventRepo.findAll({ include: { all: true } });
    return events;
  }

  async getEventById(id: number): Promise<Event> {
    const event = await this.eventRepo.findByPk(id);
    return event;
  }

  async deleteEventById(id: number) {
    const event = await this.eventRepo.destroy({ where: { id } });
    return event;
  }

  async updateEvent(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepo.update(updateEventDto, {
      where: { id },
      returning: true,
    });

    return event[1][0].dataValues;
  }
}
