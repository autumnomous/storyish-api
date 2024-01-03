import {IsString,IsOptional, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import { BookToCreatorDto } from 'src/books/dtos/booktocreator.dto';
import { MovieToCreatorDto } from 'src/movie/dtos/movietocreator.dto';

export class CreatorDto{

    @IsOptional()
    id:string;

    @IsString()
    firstName: string;

    @IsString()
    lastName:string;

    @ValidateNested()
    @Type(()=> BookToCreatorDto)
    books: BookToCreatorDto;

    @ValidateNested()
    @Type(() => MovieToCreatorDto)
    movies: MovieToCreatorDto;

}