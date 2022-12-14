/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Redirect,
  Request,
  Render,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthException } from './commom/filters/auth-exceptions.filter';
import { LoginGuard } from './commom/guards/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('admin/login')
  @Render('login')
  getLogin(@Request() req) {
    return {
      layout: false,
      loginError: req.flash('loginError'),
      class: req.flash('class'),
    };
  }

  @UseGuards(LoginGuard)
  @UseFilters(AuthException)
  @Post('admin/login')
  @Redirect('/admin/usuarios/index')
  doLogin() {
    //
  }
}
