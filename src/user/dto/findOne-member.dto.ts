import { IsNotEmpty } from "class-validator";

 

export class FindOneMemberDto {
    @IsNotEmpty()
    id: string
}