import { IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateCarDto {

    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString({ message: `The brand most be a cool string` })
    @IsOptional()
    readonly brand?: string;

    @IsString({ message: `The model most be a cools string` })
    @IsOptional()
    readonly model?: string;

}