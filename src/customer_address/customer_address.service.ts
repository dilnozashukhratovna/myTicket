import { Injectable } from '@nestjs/common';
import { Customer_address } from './models/customer_address.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomer_addressDto } from './dto/create-customer_address.dto';
import { UpdateCustomer_addressDto } from './dto/update-customer_address.dto';

@Injectable()
export class Customer_addressService {
  constructor(@InjectModel(Customer_address) private customer_addressRepo: typeof Customer_address) {}

  async createCustomer_address(createCustomer_addressDto: CreateCustomer_addressDto): Promise<Customer_address> {
    const customer_address = await this.customer_addressRepo.create(createCustomer_addressDto);
    return customer_address;
  }

  async getAllCustomer_address(): Promise<Customer_address[]> {
    const customer_addresss = await this.customer_addressRepo.findAll({ include: { all: true } });
    return customer_addresss;
  }

  async getCustomer_addressById(id: number): Promise<Customer_address> {
    const customer_address = await this.customer_addressRepo.findByPk(id);
    return customer_address;
  }

  async deleteCustomer_addressById(id: number) {
    const customer_address = await this.customer_addressRepo.destroy({ where: { id } });
    return customer_address;
  }

  async updateCustomer_address(id: number, updateCustomer_addressDto: UpdateCustomer_addressDto) {
    const customer_address = await this.customer_addressRepo.update(updateCustomer_addressDto, {
      where: { id },
      returning: true,
    });

    return customer_address[1][0].dataValues;
  }
}
