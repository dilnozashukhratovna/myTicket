import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Booking  yaratish' })
  @Post('create')
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    const booking = this.bookingService.createBooking(createBookingDto);
    return booking;
  }

  @ApiOperation({ summary: "Booking'lani  ko'rish" })
  @Get('all')
  async getAllBooking() {
    return this.bookingService.getAllBooking();
  }

  @ApiOperation({ summary: "Booking'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getBookingById(@Param('id') id: string) {
    return this.bookingService.getBookingById(+id);
  }

  @ApiOperation({ summary: "Booking'ni o'chirish" })
  @Delete(':id')
  async deleteBookingById(@Param('id') id: string) {
    return this.bookingService.deleteBookingById(+id);
  }

  @ApiOperation({ summary: "Booking'ni yangilash" })
  @Put(':id')
  async updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingService.updateBooking(+id, updateBookingDto);
  }
}
