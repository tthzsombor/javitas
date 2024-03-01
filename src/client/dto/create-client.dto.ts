import { IsBoolean, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    name: String;
    address: String;

    @IsNumber()
    @Min(50)
    @Max(1000)
    dataLimit: number;

    @IsBoolean()
    hasCable: Boolean;
}
