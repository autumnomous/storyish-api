import {IsString, IsOptional, IsDate, IsArray,ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { MediaToCreatorDto } from './mediatocreator.dto';

export class MediaDto{

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    title: string;

    @IsDate()
    @IsOptional()
    releaseDate: Date;

    @IsArray()
    @IsOptional()
    alternateTitles: string[];

    @IsArray()
    @IsOptional()
    tags: string[]

    @IsString()
    @IsOptional()
    synopsis: string;

    @ValidateNested()
    @Type(()=> MediaToCreatorDto)
    mediaToCreators: MediaToCreatorDto;

}