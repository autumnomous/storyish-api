import { Type } from 'class-transformer';
import { MovieToCreatorDto } from './movietocreator.dto'
import { IsOptional, IsString, IsDate, IsArray, ValidateNested } from 'class-validator';

export class CreateMovieDto{

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    title:string;

    @IsDate()
    @IsOptional()
    releaseDate: Date;

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    alternateTitles: string[]

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    tags: string[]

    @IsString()
    @IsOptional()
    synopsis: string;

    @ValidateNested()
    @Type(()=> MovieToCreatorDto)
    creators: MovieToCreatorDto


}