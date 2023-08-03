import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Human_categoryService } from './human_category.service';
import { CreateHuman_categoryDto } from './dto/create-human_category.dto';
import { UpdateHuman_categoryDto } from './dto/update-human_category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Human_category')
@Controller('human_category')
export class Human_categoryController {
  constructor(private readonly human_categoryService: Human_categoryService) {}

  @ApiOperation({ summary: 'Human_category  yaratish' })
  @Post('create')
  async createHuman_category(@Body() createHuman_categoryDto: CreateHuman_categoryDto) {
    const human_category = this.human_categoryService.createHuman_category(createHuman_categoryDto);
    return human_category;
  }

  @ApiOperation({ summary: "Human_category'lani  ko'rish" })
  @Get('all')
  async getAllHuman_category() {
    return this.human_categoryService.getAllHuman_category();
  }

  @ApiOperation({ summary: "Human_category'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getHuman_categoryById(@Param('id') id: string) {
    return this.human_categoryService.getHuman_categoryById(+id);
  }

  @ApiOperation({ summary: "Human_category'ni o'chirish" })
  @Delete(':id')
  async deleteHuman_categoryById(@Param('id') id: string) {
    return this.human_categoryService.deleteHuman_categoryById(+id);
  }

  @ApiOperation({ summary: "Human_category'ni yangilash" })
  @Put(':id')
  async updateHuman_category(
    @Param('id') id: string,
    @Body() updateHuman_categoryDto: UpdateHuman_categoryDto,
  ) {
    return this.human_categoryService.updateHuman_category(+id, updateHuman_categoryDto);
  }
}
