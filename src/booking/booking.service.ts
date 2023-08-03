import { Injectable } from '@nestjs/common';
import { Booking } from './models/booking.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = await this.bookingRepo.create(createBookingDto);
    return booking;
  }

  async getAllBooking(): Promise<Booking[]> {
    const bookings = await this.bookingRepo.findAll({ include: { all: true } });
    return bookings;
  }

  async getBookingById(id: number): Promise<Booking> {
    const booking = await this.bookingRepo.findByPk(id);
    return booking;
  }

  async deleteBookingById(id: number) {
    const booking = await this.bookingRepo.destroy({ where: { id } });
    return booking;
  }

  async updateBooking(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepo.update(updateBookingDto, {
      where: { id },
      returning: true,
    });

    return booking[1][0].dataValues;
  }
}
