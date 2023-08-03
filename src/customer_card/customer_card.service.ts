import { Injectable } from '@nestjs/common';
import { Customer_card } from './models/customer_card.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomer_cardDto } from './dto/create-customer_card.dto';
import { UpdateCustomer_cardDto } from './dto/update-customer_card.dto';

@Injectable()
export class Customer_cardService {
  constructor(@InjectModel(Customer_card) private customer_cardRepo: typeof Customer_card) {}

  async createCustomer_card(createCustomer_cardDto: CreateCustomer_cardDto): Promise<Customer_card> {
    const customer_card = await this.customer_cardRepo.create(createCustomer_cardDto);
    return customer_card;
  }

  async getAllCustomer_card(): Promise<Customer_card[]> {
    const customer_cards = await this.customer_cardRepo.findAll({ include: { all: true } });
    return customer_cards;
  }

  async getCustomer_cardById(id: number): Promise<Customer_card> {
    const customer_card = await this.customer_cardRepo.findByPk(id);
    return customer_card;
  }

  async deleteCustomer_cardById(id: number) {
    const customer_card = await this.customer_cardRepo.destroy({ where: { id } });
    return customer_card;
  }

  async updateCustomer_card(id: number, updateCustomer_cardDto: UpdateCustomer_cardDto) {
    const customer_card = await this.customer_cardRepo.update(updateCustomer_cardDto, {
      where: { id },
      returning: true,
    });

    return customer_card[1][0].dataValues;
  }
}
