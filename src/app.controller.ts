import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMemberDto } from './dtos/create-member';
import { MembersRepository } from './repository/members-repository';

@Controller() // Caso queira fazer um prefixo pro controller é aqui
export class AppController {
  constructor(private membersRepo: MembersRepository) {}

  @Post()
   async createMember(@Body() body: CreateMemberDto) {
    const { name, role, } = body;
    await this.membersRepo.create(name, role)


  // async createMember(@Body() body: CreateMemberDto) {
  //   // pode desustruturar o body {name, role} = body
  //   const { role, name } = body;
  //   const member = await this.prisma.member.create({
  //     data: {
  //       id: randomUUID(),
  //       name,
  //       function: role,
  //     },
  //   });
  //   return member;
  // }
}
}
