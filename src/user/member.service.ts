import { Injectable } from "@nestjs/common";
import { MembersRepository } from "src/repository/members-repository";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { CreateMemberDto } from "./dto/create-member.dto";


@Injectable()
export class MemberService {

    constructor(private readonly repo: MembersRepository) {}

    async create(data: CreateMemberDto){
        return await this.repo.create(data)
    }
    
    findAllMember() {
        return this.repo.findAllMember();
    }
    async findOneMember(id: string) {
        
        return await this.repo.findOneMember(id)
        
    }
    async updateMember(id: string, data: UpdateMemberDto ){
        return await this.repo.updateMember(id, data)
        
    }

    async deleteMember(id: string) {
        await this.repo.deleteMember(id)
    }    
}