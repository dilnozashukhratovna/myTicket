import { Injectable } from '@nestjs/common';
import { Cart } from './models/cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}

  async createCart(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = await this.cartRepo.create(createCartDto);
    return cart;
  }

  async getAllCart(): Promise<Cart[]> {
    const carts = await this.cartRepo.findAll({ include: { all: true } });
    return carts;
  }

  async getCartById(id: number): Promise<Cart> {
    const cart = await this.cartRepo.findByPk(id);
    return cart;
  }

  async deleteCartById(id: number) {
    const cart = await this.cartRepo.destroy({ where: { id } });
    return cart;
  }

  async updateCart(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepo.update(updateCartDto, {
      where: { id },
      returning: true,
    });

    return cart[1][0].dataValues;
  }
}
