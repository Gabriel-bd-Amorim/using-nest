import { IsNotEmpty, Length } from "class-validator";

export class CreateMemberDto {
    @IsNotEmpty()
    name: string;
    
    @Length(5, 100)
    @IsNotEmpty({
        message: 'deve ter o campo role preenchido!'
    })
    role: string;
}
  
