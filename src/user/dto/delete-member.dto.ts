import { IsNotEmpty, isNotEmpty } from "class-validator";

export default class DeleteMemberDto {

    @IsNotEmpty()
    id: string;
}