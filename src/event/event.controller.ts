import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: 'Event  yaratish' })
  @Post('create')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const event = this.eventService.createEvent(createEventDto);
    return event;
  }

  @ApiOperation({ summary: "Event'lani  ko'rish" })
  @Get('all')
  async getAllEvent() {
    return this.eventService.getAllEvent();
  }

  @ApiOperation({ summary: "Event'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return this.eventService.getEventById(+id);
  }

  @ApiOperation({ summary: "Event'ni o'chirish" })
  @Delete(':id')
  async deleteEventById(@Param('id') id: string) {
    return this.eventService.deleteEventById(+id);
  }

  @ApiOperation({ summary: "Event'ni yangilash" })
  @Put(':id')
  async updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(+id, updateEventDto);
  }
}
