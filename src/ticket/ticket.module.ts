import { Module } from '@nestjs/common';
import { BuilderController } from './ticket.controller';
import { BuilderService } from './ticket.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/ticket.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
