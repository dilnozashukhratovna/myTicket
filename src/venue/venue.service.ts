import { Injectable } from '@nestjs/common';
import { Venue } from './models/venue.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

  async createVenue(createVenueDto: CreateVenueDto): Promise<Venue> {
    const venue = await this.venueRepo.create(createVenueDto);
    return venue;
  }

  async getAllVenue(): Promise<Venue[]> {
    const venues = await this.venueRepo.findAll({ include: { all: true } });
    return venues;
  }

  async getVenueById(id: number): Promise<Venue> {
    const venue = await this.venueRepo.findByPk(id);
    return venue;
  }

  async deleteVenueById(id: number) {
    const venue = await this.venueRepo.destroy({ where: { id } });
    return venue;
  }

  async updateVenue(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueRepo.update(updateVenueDto, {
      where: { id },
      returning: true,
    });

    return venue[1][0].dataValues;
  }
}
