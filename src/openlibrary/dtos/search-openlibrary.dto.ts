import { IsString,IsIn, IsOptional } from "class-validator";

export class SearchOpenLibraryDto{

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    author: string;

    @IsOptional()
    @IsString()
    subject: string;

    @IsOptional()
    @IsString()
    place: string;

    @IsOptional()
    @IsString()
    person: string;

    @IsOptional()
    @IsString()
    @IsIn(["spa", "jpn", "eng", "und", "mul"])
    language: string;

    @IsOptional()
    @IsString()
    publisher: string;


}