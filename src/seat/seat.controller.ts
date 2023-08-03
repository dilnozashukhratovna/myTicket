import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: 'Seat  yaratish' })
  @Post('create')
  async createSeat(@Body() createSeatDto: CreateSeatDto) {
    const seat = this.seatService.createSeat(createSeatDto);
    return seat;
  }

  @ApiOperation({ summary: "Seat'lani  ko'rish" })
  @Get('all')
  async getAllSeat() {
    return this.seatService.getAllSeat();
  }

  @ApiOperation({ summary: "Seat'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getSeatById(@Param('id') id: string) {
    return this.seatService.getSeatById(+id);
  }

  @ApiOperation({ summary: "Seat'ni o'chirish" })
  @Delete(':id')
  async deleteSeatById(@Param('id') id: string) {
    return this.seatService.deleteSeatById(+id);
  }

  @ApiOperation({ summary: "Seat'ni yangilash" })
  @Put(':id')
  async updateSeat(
    @Param('id') id: string,
    @Body() updateSeatDto: UpdateSeatDto,
  ) {
    return this.seatService.updateSeat(+id, updateSeatDto);
  }
}
