import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    
    @ApiProperty({
        description: 'User Email',
        nullable: false,
        uniqueItems: true,

    })
    @IsString()
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'User Password',
        nullable: false,
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({
        description: 'User Full name',
        nullable: false,
    })
    @IsString()
    @MinLength(1)
    fullName: string;

    @ApiProperty({
        description: 'User Score',
        nullable: true,
        default: 0
    })
    @IsOptional()
    @IsNumber()
    score: number;


}