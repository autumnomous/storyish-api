import {IsDate, IsArray, IsString, IsOptional, IsISBN, ValidateNested} from 'class-validator';
import {Type, Transform} from 'class-transformer';
import { BookToCreatorDto } from './booktocreator.dto';

export class CreateBookDto{

    @IsISBN()
    @IsOptional()
    isbn:string;

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    title: string;

    @IsDate()
    @IsOptional()
    releaseDate: Date;

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    alternateTitles: string[];

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    tags: string[]

    @IsString()
    @IsOptional()
    synopsis: string;

    @ValidateNested()
    @Type(()=> BookToCreatorDto)
    creators: BookToCreatorDto;
}