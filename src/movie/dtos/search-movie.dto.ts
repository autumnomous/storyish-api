import {IsString, IsOptional, IsArray } from 'class-validator';

export class SearchMovieDto{

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    creatorFirstName: string;

    @IsString()
    @IsOptional()
    creatorLastName: string;

    @IsArray()
    @IsOptional()
    tags: string[];

    @IsArray()
    @IsOptional()
    alternateTitles: string[];

    // TODO: add rating as a search optoin when users are implemented
}