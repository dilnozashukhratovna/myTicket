import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Cart  yaratish' })
  @Post('create')
  async createCart(@Body() createCartDto: CreateCartDto) {
    const cart = this.cartService.createCart(createCartDto);
    return cart;
  }

  @ApiOperation({ summary: "Cart'lani  ko'rish" })
  @Get('all')
  async getAllCart() {
    return this.cartService.getAllCart();
  }

  @ApiOperation({ summary: "Cart'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getCartById(@Param('id') id: string) {
    return this.cartService.getCartById(+id);
  }

  @ApiOperation({ summary: "Cart'ni o'chirish" })
  @Delete(':id')
  async deleteCartById(@Param('id') id: string) {
    return this.cartService.deleteCartById(+id);
  }

  @ApiOperation({ summary: "Cart'ni yangilash" })
  @Put(':id')
  async updateCart(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartService.updateCart(+id, updateCartDto);
  }
}
