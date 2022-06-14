/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CompaniesService } from '../../services/companies.service';
import { CreateCompanyDto } from '../../dto/create-company.dto';
import { UpdateCompanyDto } from '../../dto/update-company.dto';
import { QueryCompanyDto } from '../../dto/query-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() data: CreateCompanyDto) {
    return await this.companiesService.create(data);
  }

  //  @UseGuards(JwtUniGuard, UniGuard)
  @Get()
  async findAll(@Query() query: QueryCompanyDto) {
    return await this.companiesService.findAll(query);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return await this.companiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(id);
  }
}
