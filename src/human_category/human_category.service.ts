import { Injectable } from '@nestjs/common';
import { Human_category } from './models/human_category.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHuman_categoryDto } from './dto/create-human_category.dto';
import { UpdateHuman_categoryDto } from './dto/update-human_category.dto';

@Injectable()
export class Human_categoryService {
  constructor(@InjectModel(Human_category) private human_categoryRepo: typeof Human_category) {}

  async createHuman_category(createHuman_categoryDto: CreateHuman_categoryDto): Promise<Human_category> {
    const human_category = await this.human_categoryRepo.create(createHuman_categoryDto);
    return human_category;
  }

  async getAllHuman_category(): Promise<Human_category[]> {
    const human_categorys = await this.human_categoryRepo.findAll({ include: { all: true } });
    return human_categorys;
  }

  async getHuman_categoryById(id: number): Promise<Human_category> {
    const human_category = await this.human_categoryRepo.findByPk(id);
    return human_category;
  }

  async deleteHuman_categoryById(id: number) {
    const human_category = await this.human_categoryRepo.destroy({ where: { id } });
    return human_category;
  }

  async updateHuman_category(id: number, updateHuman_categoryDto: UpdateHuman_categoryDto) {
    const human_category = await this.human_categoryRepo.update(updateHuman_categoryDto, {
      where: { id },
      returning: true,
    });

    return human_category[1][0].dataValues;
  }
}
