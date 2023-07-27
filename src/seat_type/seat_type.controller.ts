import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Venue_typeService } from './venue_type.service';
import { CreateVenue_typeDto } from './dto/create-venue_type.dto';
import { UpdateVenue_typeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venue_type')
@Controller('venue_type')
export class Venue_typeController {
  constructor(private readonly venue_typeService: Venue_typeService) {}

  @ApiOperation({ summary: 'Venue_type  yaratish' })
  @Post('create')
  async createVenue_type(@Body() createVenue_typeDto: CreateVenue_typeDto) {
    const venue_type = this.venue_typeService.createVenue_type(createVenue_typeDto);
    return venue_type;
  }

  @ApiOperation({ summary: "Venue_type'lani  ko'rish" })
  @Get('all')
  async getAllVenue_type() {
    return this.venue_typeService.getAllVenue_type();
  }

  @ApiOperation({ summary: "Venue_type'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getVenue_typeById(@Param('id') id: string) {
    return this.venue_typeService.getVenue_typeById(+id);
  }

  @ApiOperation({ summary: "Venue_type'ni o'chirish" })
  @Delete(':id')
  async deleteVenue_typeById(@Param('id') id: string) {
    return this.venue_typeService.deleteVenue_typeById(+id);
  }

  @ApiOperation({ summary: "Venue_type'ni yangilash" })
  @Put(':id')
  async updateVenue_type(
    @Param('id') id: string,
    @Body() updateVenue_typeDto: UpdateVenue_typeDto,
  ) {
    return this.venue_typeService.updateVenue_type(+id, updateVenue_typeDto);
  }
}
