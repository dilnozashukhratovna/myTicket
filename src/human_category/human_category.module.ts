import { Module } from '@nestjs/common';
import { Human_categoryController } from './human_category.controller';
import { Human_categoryService } from './human_category.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Human_category } from './models/human_category.model';

@Module({
  imports: [SequelizeModule.forFeature([Human_category])],
  controllers: [Human_categoryController],
  providers: [Human_categoryService],
})
export class Human_categoryModule {}
