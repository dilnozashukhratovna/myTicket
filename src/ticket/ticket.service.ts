import { Injectable } from '@nestjs/common';
import { Ticket } from './models/ticket.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketRepo.create(createTicketDto);
    return ticket;
  }

  async getAllTicket(): Promise<Ticket[]> {
    const tickets = await this.ticketRepo.findAll({ include: { all: true } });
    return tickets;
  }

  async getTicketById(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepo.findByPk(id);
    return ticket;
  }

  async deleteTicketById(id: number) {
    const ticket = await this.ticketRepo.destroy({ where: { id } });
    return ticket;
  }

  async updateTicket(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepo.update(updateTicketDto, {
      where: { id },
      returning: true,
    });

    return ticket[1][0].dataValues;
  }
}
