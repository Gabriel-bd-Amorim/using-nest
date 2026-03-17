import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { MemberService } from "./member.service";
import { CreateMemberDto } from "./dto/create-member.dto";

@Controller('members') // Caso queira fazer um prefixo pro controller é aqui
export class MemberController{

    constructor(private readonly memberService: MemberService) {}



    @Get()
    findAllMember() {
        return this.memberService.findAllMember();
    }
    @Get(':id')
    findOneMember(@Param('id') id :string) { //tem q usar o @Param pra pegar os paranaue
        return this.memberService.findOneMember(id)
    }

    @Post()
    create(@Body() data: CreateMemberDto) {
        return this.memberService.create(data)
    }

    @Put(':id') 
    updateMember(@Param('id') id : string, @Body() data: UpdateMemberDto) {
        return this.memberService.updateMember(id, data)
    }
    @Delete(':id')
    DeleteMemberDto(@Param('id') id: string) {
        return this.memberService.deleteMember(id)
    }

} 