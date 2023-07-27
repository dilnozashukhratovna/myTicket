import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Admin  yaratish' })
  @Post('create')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    const admin = this.adminService.createAdmin(createAdminDto);
    return admin;
  }

  @ApiOperation({ summary: "Admin'lani  ko'rish" })
  @Get('all')
  async getAllAdmin() {
    return this.adminService.getAllAdmin();
  }

  @ApiOperation({ summary: "Admin'ni id bo'yicha ko'rish" })
  @Get(':id')
  async getAdminById(@Param('id') id: string) {
    return this.adminService.getAdminById(+id);
  }

  @ApiOperation({ summary: "Admin'ni o'chirish" })
  @Delete(':id')
  async deleteAdminById(@Param('id') id: string) {
    return this.adminService.deleteAdminById(+id);
  }

  @ApiOperation({ summary: "Admin'ni yangilash" })
  @Put(':id')
  async updateAdmin(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.updateAdmin(+id, updateAdminDto);
  }
}
