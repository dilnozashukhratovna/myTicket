import { Injectable } from '@nestjs/common';
import { Venue_photo } from './models/venue_photo.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenue_photoDto } from './dto/create-venue_photo.dto';
import { UpdateVenue_photoDto } from './dto/update-venue_photo.dto';

@Injectable()
export class Venue_photoService {
  constructor(@InjectModel(Venue_photo) private venue_photoRepo: typeof Venue_photo) {}

  async createVenue_photo(createVenue_photoDto: CreateVenue_photoDto): Promise<Venue_photo> {
    const venue_photo = await this.venue_photoRepo.create(createVenue_photoDto);
    return venue_photo;
  }

  async getAllVenue_photo(): Promise<Venue_photo[]> {
    const venue_photos = await this.venue_photoRepo.findAll({ include: { all: true } });
    return venue_photos;
  }

  async getVenue_photoById(id: number): Promise<Venue_photo> {
    const venue_photo = await this.venue_photoRepo.findByPk(id);
    return venue_photo;
  }

  async deleteVenue_photoById(id: number) {
    const venue_photo = await this.venue_photoRepo.destroy({ where: { id } });
    return venue_photo;
  }

  async updateVenue_photo(id: number, updateVenue_photoDto: UpdateVenue_photoDto) {
    const venue_photo = await this.venue_photoRepo.update(updateVenue_photoDto, {
      where: { id },
      returning: true,
    });

    return venue_photo[1][0].dataValues;
  }
}
