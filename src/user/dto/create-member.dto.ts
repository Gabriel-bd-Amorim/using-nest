import { IsNotEmpty, Length } from "class-validator";

export class CreateMemberDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty({
        message: 'deve ter o campo role preenchido!'
    })
    role: string;
}
  
