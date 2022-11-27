/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ServicesModule } from './services/services.module';
import { UsuarioPlataformaModule } from './usuario-plataforma/usuario-plataforma.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ServicesModule,
    UsuarioPlataformaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
