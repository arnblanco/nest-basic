import { IsString } from "class-validator";


export class CreateCarDto {

    @IsString({ message: `The brand most be a cool string` })
    readonly brand: string;

    @IsString({ message: `The model most be a cools string` })
    readonly model: string;
}