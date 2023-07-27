import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venue')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: 'Venue  yaratish' })
  @Post('create')
  async createVenue(@Body() createVenueDto: CreateVenueDto) {
    const venue = this.venueService.createVenue(createVenueDto);
    return venue;
  }

  @ApiOperation({ summary: "Venue'lani  ko'rish" })
  @Get('all')
  async getAllVenue() {
    return this.venueService.getAllVenue();
  }

  @ApiOperation({ summary: "Venue'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getVenueById(@Param('id') id: string) {
    return this.venueService.getVenueById(+id);
  }

  @ApiOperation({ summary: "Venue'ni o'chirish" })
  @Delete(':id')
  async deleteVenueById(@Param('id') id: string) {
    return this.venueService.deleteVenueById(+id);
  }

  @ApiOperation({ summary: "Venue'ni yangilash" })
  @Put(':id')
  async updateVenue(
    @Param('id') id: string,
    @Body() updateVenueDto: UpdateVenueDto,
  ) {
    return this.venueService.updateVenue(+id, updateVenueDto);
  }
}
