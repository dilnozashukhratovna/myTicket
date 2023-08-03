import { Injectable } from '@nestjs/common';
import { Seat } from './models/seat.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

  async createSeat(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = await this.seatRepo.create(createSeatDto);
    return seat;
  }

  async getAllSeat(): Promise<Seat[]> {
    const seats = await this.seatRepo.findAll({ include: { all: true } });
    return seats;
  }

  async getSeatById(id: number): Promise<Seat> {
    const seat = await this.seatRepo.findByPk(id);
    return seat;
  }

  async deleteSeatById(id: number) {
    const seat = await this.seatRepo.destroy({ where: { id } });
    return seat;
  }

  async updateSeat(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatRepo.update(updateSeatDto, {
      where: { id },
      returning: true,
    });

    return seat[1][0].dataValues;
  }
}
