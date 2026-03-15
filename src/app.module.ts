import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MembersRepository } from './repository/members-repository';
import { PrismaRepositoryMembers } from './repository/prisma/prisma-repository-members';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })

  ],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: MembersRepository,
      useClass: PrismaRepositoryMembers,
      // ISSO aqui é inenção de dependencia
    }

  ],
})

export class AppModule {}
