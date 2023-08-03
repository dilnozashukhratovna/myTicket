import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Venue_photoService } from './venue_photo.service';
import { CreateVenue_photoDto } from './dto/create-venue_photo.dto';
import { UpdateVenue_photoDto } from './dto/update-venue_photo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venue_photo')
@Controller('venue_photo')
export class Venue_photoController {
  constructor(private readonly venue_photoService: Venue_photoService) {}

  @ApiOperation({ summary: 'Venue_photo  yaratish' })
  @Post('create')
  async createVenue_photo(@Body() createVenue_photoDto: CreateVenue_photoDto) {
    const venue_photo = this.venue_photoService.createVenue_photo(createVenue_photoDto);
    return venue_photo;
  }

  @ApiOperation({ summary: "Venue_photo'lani  ko'rish" })
  @Get('all')
  async getAllVenue_photo() {
    return this.venue_photoService.getAllVenue_photo();
  }

  @ApiOperation({ summary: "Venue_photo'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getVenue_photoById(@Param('id') id: string) {
    return this.venue_photoService.getVenue_photoById(+id);
  }

  @ApiOperation({ summary: "Venue_photo'ni o'chirish" })
  @Delete(':id')
  async deleteVenue_photoById(@Param('id') id: string) {
    return this.venue_photoService.deleteVenue_photoById(+id);
  }

  @ApiOperation({ summary: "Venue_photo'ni yangilash" })
  @Put(':id')
  async updateVenue_photo(
    @Param('id') id: string,
    @Body() updateVenue_photoDto: UpdateVenue_photoDto,
  ) {
    return this.venue_photoService.updateVenue_photo(+id, updateVenue_photoDto);
  }
}
