import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { MemberModule } from './user/member.module';

const  dotenv =  
    ConfigModule.forRoot({
      isGlobal: true
    })
    


@Module({ 
  imports: [
    dotenv,
    PrismaModule,
    MemberModule
  ],
  providers: [
    AppService
  ],
  controllers: [
    AppController,
  ]
})


export class AppModule {}
