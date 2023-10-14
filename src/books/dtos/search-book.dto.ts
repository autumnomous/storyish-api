import { IsString, IsOptional, IsISBN, IsArray } from "class-validator";

export class SearchBookDto{

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    creatorFirstName:string;

    @IsString()
    @IsOptional()
    creatorLastName: string;

    @IsString()
    @IsISBN()
    @IsOptional()
    isbn: string;

    @IsArray()
    @IsOptional()
    tags: string[];

    @IsArray()
    @IsOptional()
    alternateTitles: string[];
    // TODO: add rating as a search option when users are implemented 
}