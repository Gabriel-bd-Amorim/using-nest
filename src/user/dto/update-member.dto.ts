import { IsOptional } from "class-validator";

export class UpdateMemberDto  {
        
        @IsOptional()
        name: string;
        @IsOptional()
        role: string;

}