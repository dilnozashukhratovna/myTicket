import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Event_typeService } from './event_type.service';
import { CreateEvent_typeDto } from './dto/create-event_type.dto';
import { UpdateEvent_typeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Event_type')
@Controller('event_type')
export class Event_typeController {
  constructor(private readonly event_typeService: Event_typeService) {}

  @ApiOperation({ summary: 'Event_type  yaratish' })
  @Post('create')
  async createEvent_type(@Body() createEvent_typeDto: CreateEvent_typeDto) {
    const event_type = this.event_typeService.createEvent_type(createEvent_typeDto);
    return event_type;
  }

  @ApiOperation({ summary: "Event_type'lani  ko'rish" })
  @Get('all')
  async getAllEvent_type() {
    return this.event_typeService.getAllEvent_type();
  }

  @ApiOperation({ summary: "Event_type'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getEvent_typeById(@Param('id') id: string) {
    return this.event_typeService.getEvent_typeById(+id);
  }

  @ApiOperation({ summary: "Event_type'ni o'chirish" })
  @Delete(':id')
  async deleteEvent_typeById(@Param('id') id: string) {
    return this.event_typeService.deleteEvent_typeById(+id);
  }

  @ApiOperation({ summary: "Event_type'ni yangilash" })
  @Put(':id')
  async updateEvent_type(
    @Param('id') id: string,
    @Body() updateEvent_typeDto: UpdateEvent_typeDto,
  ) {
    return this.event_typeService.updateEvent_type(+id, updateEvent_typeDto);
  }
}
