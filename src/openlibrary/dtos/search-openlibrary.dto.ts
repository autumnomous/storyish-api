import { IsString, IsISBN, IsIn } from "class-validator";

export class SearchOpenLibraryDto{

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    subject: string;

    @IsString()
    place: string;

    @IsString()
    person: string;

    @IsString()
    @IsIn(["spa", "jpn", "eng", "und", "mul"])
    language: string;

    @IsString()
    publisher: string;


}