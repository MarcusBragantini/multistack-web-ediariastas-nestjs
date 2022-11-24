/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as methodOverride from 'method-override';
import * as exphbs from 'express-handlebars'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewPath = join(__dirname, '..', 'views');

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(viewPath);
  app.setViewEngine('hbs');
  app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));

  app.use(methodOverride('_method'));

  await app.listen(3000);
}
bootstrap();
