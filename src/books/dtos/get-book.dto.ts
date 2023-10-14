import { IsString, IsOptional, IsISBN } from 'class-validator';

export class GetBookDto{

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    creatorFirstName: string;

    @IsString()
    @IsOptional()
    creatorLastName: string;

    @IsString()
    @IsISBN()
    @IsOptional()
    isbn: string;

}