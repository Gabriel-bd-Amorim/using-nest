import { Module } from "@nestjs/common";
import { MemberService } from "./member.service";
import { MemberController } from "./member.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { MembersRepository } from "src/repository/members-repository";
import { PrismaRepositoryMembers } from "src/repository/prisma-repository-members";


@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [MemberController],
  providers: [MemberService,
    {
      provide: MembersRepository,
      useClass: PrismaRepositoryMembers,
    }
  ],
})

export class MemberModule {}
