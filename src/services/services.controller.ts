/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('admin/servicos')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    @InjectRepository(Service)
    private readonly servicosRepository: Repository<Service>,
  ) {}

  @Get('create')
  @Render('servicos/index')
  exibirCadastrar() {
    //
  }

  @Get('index')
  @Render('servicos/index')
  async listarServicos() {
    const servicos = await this.servicosRepository.find();
    return { servicos: servicos};
  }

  @Post()
  @Redirect('/servicos/index')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    return await this.servicosRepository.save(createServiceDto);
  }

  @Get(':id/editar')
  @Render('servicos/editar')
  async atualizarServicos(@Param('id') id: number) {
    const servico = await this.servicosRepository.findOneBy({id: id});
    return { servico: servico};
  }

  @Patch(':id/editar')
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
    ) {
    return await this.servicosRepository.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
