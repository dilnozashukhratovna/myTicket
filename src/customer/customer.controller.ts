import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'Customer  yaratish' })
  @Post('create')
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    const customer = this.customerService.createCustomer(createCustomerDto);
    return customer;
  }

  @ApiOperation({ summary: "Customer'lani  ko'rish" })
  @Get('all')
  async getAllCustomer() {
    return this.customerService.getAllCustomer();
  }

  @ApiOperation({ summary: "Customer'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getCustomerById(@Param('id') id: string) {
    return this.customerService.getCustomerById(+id);
  }

  @ApiOperation({ summary: "Customer'ni o'chirish" })
  @Delete(':id')
  async deleteCustomerById(@Param('id') id: string) {
    return this.customerService.deleteCustomerById(+id);
  }

  @ApiOperation({ summary: "Customer'ni yangilash" })
  @Put(':id')
  async updateCustomer(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }
}
