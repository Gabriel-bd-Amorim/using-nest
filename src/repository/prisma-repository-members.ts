import { PrismaService } from "src/prisma/prisma.service";
import { MembersRepository } from "./members-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";



@Injectable()
export class PrismaRepositoryMembers implements MembersRepository {
    constructor(
        private prisma: PrismaService,) {}


    async create(data :{name: string, role: string}): Promise<{ name: string, function: string}> {
        return await this.prisma.member.create({
            data: {
                id: randomUUID(),
                name: data.name,
                function: data.role,
            },
        });   
    }
    async findAllMember() {
        return await this.prisma.member.findMany();
    } 
 
    async findOneMember(id: string){
        return await this.prisma.member.findUniqueOrThrow({
            where:{
                id
            }
        });

    }
    async updateMember(id: string, data: { name: string; role: string; }) {
        return await this.prisma.member.update({
            where: {id},
            data: {
                name: data.name,
                function: data.role
            }
        })
    }

    async deleteMember(id: string): Promise<void> {
        await this.prisma.member.delete({
            where: {id}
        })
    }

    
}