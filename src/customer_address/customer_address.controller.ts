import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer_addressService } from './customer_address.service';
import { CreateCustomer_addressDto } from './dto/create-customer_address.dto';
import { UpdateCustomer_addressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer_address')
@Controller('customer_address')
export class Customer_addressController {
  constructor(private readonly customer_addressService: Customer_addressService) {}

  @ApiOperation({ summary: 'Customer_address  yaratish' })
  @Post('create')
  async createCustomer_address(@Body() createCustomer_addressDto: CreateCustomer_addressDto) {
    const customer_address = this.customer_addressService.createCustomer_address(createCustomer_addressDto);
    return customer_address;
  }

  @ApiOperation({ summary: "Customer_address'lani  ko'rish" })
  @Get('all')
  async getAllCustomer_address() {
    return this.customer_addressService.getAllCustomer_address();
  }

  @ApiOperation({ summary: "Customer_address'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getCustomer_addressById(@Param('id') id: string) {
    return this.customer_addressService.getCustomer_addressById(+id);
  }

  @ApiOperation({ summary: "Customer_address'ni o'chirish" })
  @Delete(':id')
  async deleteCustomer_addressById(@Param('id') id: string) {
    return this.customer_addressService.deleteCustomer_addressById(+id);
  }

  @ApiOperation({ summary: "Customer_address'ni yangilash" })
  @Put(':id')
  async updateCustomer_address(
    @Param('id') id: string,
    @Body() updateCustomer_addressDto: UpdateCustomer_addressDto,
  ) {
    return this.customer_addressService.updateCustomer_address(+id, updateCustomer_addressDto);
  }
}
