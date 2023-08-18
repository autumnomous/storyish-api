import {IsDate, IsArray, IsString, IsOptional, IsISBN, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import { MediaToCreatorDto } from 'src/shared/dtos/mediatocreator.dto';

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