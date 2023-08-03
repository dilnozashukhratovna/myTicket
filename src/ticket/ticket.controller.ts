import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: 'Ticket  yaratish' })
  @Post('create')
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    const ticket = this.ticketService.createTicket(createTicketDto);
    return ticket;
  }

  @ApiOperation({ summary: "Ticket'lani  ko'rish" })
  @Get('all')
  async getAllTicket() {
    return this.ticketService.getAllTicket();
  }

  @ApiOperation({ summary: "Ticket'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getTicketById(@Param('id') id: string) {
    return this.ticketService.getTicketById(+id);
  }

  @ApiOperation({ summary: "Ticket'ni o'chirish" })
  @Delete(':id')
  async deleteTicketById(@Param('id') id: string) {
    return this.ticketService.deleteTicketById(+id);
  }

  @ApiOperation({ summary: "Ticket'ni yangilash" })
  @Put(':id')
  async updateTicket(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.updateTicket(+id, updateTicketDto);
  }
}
