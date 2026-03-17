import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller() // Caso queira fazer um prefixo pro controller é aqui
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.gethello();
  }
}

