import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Render,
  Redirect,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateException } from 'src/commom/filters/create-exceptions.filter';
import { PatchException } from 'src/commom/filters/patch-exception.filter';
import { AuthenticatedGuard } from 'src/commom/guards/authenticated.guard';
import { AuthException } from 'src/commom/filters/auth-exceptions.filter';

@Controller('admin/servicos')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('create')
  @Render('servicos/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('index')
  @Render('servicos/index')
  async listarServicos() {
    return { servicos: await this.servicesService.findAll() };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(CreateException)
  @Post()
  @Redirect('/admin/servicos/')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    return await this.servicesService.create(createServiceDto);
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get(':id/editar')
  @Render('servicos/editar')
  async atualizarServicos(@Param('id') id: number, @Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      servico: await this.servicesService.findOne(id),
    };
  }

  @UseFilters(PatchException)
  @UseGuards(AuthenticatedGuard)
  @Patch(':id/editar')
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return await this.servicesService.update(id, updateServiceDto);
  }
}
