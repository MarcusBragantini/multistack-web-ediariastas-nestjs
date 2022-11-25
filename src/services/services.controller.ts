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
  Request,
  UseFilters,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { CreateException } from 'src/commom/filters/create-exceptions.filter';

@Controller('admin/servicos')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly utils: Utils,
    @InjectRepository(Service)
    private readonly servicosRepository: Repository<Service>,
  ) {}

  @Get('create')
  @Render('servicos/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Get('index')
  @Render('servicos/index')
  async listarServicos() {
    const servicos = await this.servicosRepository.find();
    return { servicos: servicos };
  }

  @Post()
  @UseFilters(CreateException)
  @Redirect('admin/servicos/index')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    createServiceDto.valorBanheiro = this.utils.formatDecimal(
      createServiceDto.valorBanheiro,
    );
    createServiceDto.valorCozinha = this.utils.formatDecimal(
      createServiceDto.valorCozinha,
    );
    createServiceDto.valorMinimo = this.utils.formatDecimal(
      createServiceDto.valorMinimo,
    );
    createServiceDto.valorOutros = this.utils.formatDecimal(
      createServiceDto.valorOutros,
    );
    createServiceDto.valorQuarto = this.utils.formatDecimal(
      createServiceDto.valorQuarto,
    );
    createServiceDto.valorQuintal = this.utils.formatDecimal(
      createServiceDto.valorQuintal,
    );
    createServiceDto.valorSala = this.utils.formatDecimal(
      createServiceDto.valorSala,
    );
    return await this.servicosRepository.save(createServiceDto);
  }

  @Get(':id/editar')
  @Render('servicos/editar')
  async atualizarServicos(@Param('id') id: number, @Request() req) {
    const servico = await this.servicosRepository.findOneBy({ id: id });
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      servico: servico,
    };
  }

  @Patch(':id/editar')
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    updateServiceDto.valorBanheiro = this.utils.formatDecimal(
      updateServiceDto.valorBanheiro,
    );
    updateServiceDto.valorCozinha = this.utils.formatDecimal(
      updateServiceDto.valorCozinha,
    );
    updateServiceDto.valorMinimo = this.utils.formatDecimal(
      updateServiceDto.valorMinimo,
    );
    updateServiceDto.valorOutros = this.utils.formatDecimal(
      updateServiceDto.valorOutros,
    );
    updateServiceDto.valorQuarto = this.utils.formatDecimal(
      updateServiceDto.valorQuarto,
    );
    updateServiceDto.valorQuintal = this.utils.formatDecimal(
      updateServiceDto.valorQuintal,
    );
    updateServiceDto.valorSala = this.utils.formatDecimal(
      updateServiceDto.valorSala,
    );
    return await this.servicosRepository.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
