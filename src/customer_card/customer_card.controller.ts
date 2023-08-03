import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer_cardService } from './customer_card.service';
import { CreateCustomer_cardDto } from './dto/create-customer_card.dto';
import { UpdateCustomer_cardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer_card')
@Controller('customer_card')
export class Customer_cardController {
  constructor(private readonly customer_cardService: Customer_cardService) {}

  @ApiOperation({ summary: 'Customer_card  yaratish' })
  @Post('create')
  async createCustomer_card(@Body() createCustomer_cardDto: CreateCustomer_cardDto) {
    const customer_card = this.customer_cardService.createCustomer_card(createCustomer_cardDto);
    return customer_card;
  }

  @ApiOperation({ summary: "Customer_card'lani  ko'rish" })
  @Get('all')
  async getAllCustomer_card() {
    return this.customer_cardService.getAllCustomer_card();
  }

  @ApiOperation({ summary: "Customer_card'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getCustomer_cardById(@Param('id') id: string) {
    return this.customer_cardService.getCustomer_cardById(+id);
  }

  @ApiOperation({ summary: "Customer_card'ni o'chirish" })
  @Delete(':id')
  async deleteCustomer_cardById(@Param('id') id: string) {
    return this.customer_cardService.deleteCustomer_cardById(+id);
  }

  @ApiOperation({ summary: "Customer_card'ni yangilash" })
  @Put(':id')
  async updateCustomer_card(
    @Param('id') id: string,
    @Body() updateCustomer_cardDto: UpdateCustomer_cardDto,
  ) {
    return this.customer_cardService.updateCustomer_card(+id, updateCustomer_cardDto);
  }
}
