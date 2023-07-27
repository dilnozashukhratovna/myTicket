import { Injectable } from '@nestjs/common';
import { Venue_type } from './models/venue_type.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenue_typeDto } from './dto/create-venue_type.dto';
import { UpdateVenue_typeDto } from './dto/update-venue_type.dto';

@Injectable()
export class Venue_typeService {
  constructor(@InjectModel(Venue_type) private venue_typeRepo: typeof Venue_type) {}

  async createVenue_type(createVenue_typeDto: CreateVenue_typeDto): Promise<Venue_type> {
    const venue_type = await this.venue_typeRepo.create(createVenue_typeDto);
    return venue_type;
  }

  async getAllVenue_type(): Promise<Venue_type[]> {
    const venue_types = await this.venue_typeRepo.findAll({ include: { all: true } });
    return venue_types;
  }

  async getVenue_typeById(id: number): Promise<Venue_type> {
    const venue_type = await this.venue_typeRepo.findByPk(id);
    return venue_type;
  }

  async deleteVenue_typeById(id: number) {
    const venue_type = await this.venue_typeRepo.destroy({ where: { id } });
    return venue_type;
  }

  async updateVenue_type(id: number, updateVenue_typeDto: UpdateVenue_typeDto) {
    const venue_type = await this.venue_typeRepo.update(updateVenue_typeDto, {
      where: { id },
      returning: true,
    });

    return venue_type[1][0].dataValues;
  }
}
