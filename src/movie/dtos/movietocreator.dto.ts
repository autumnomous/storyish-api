import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateMovieDto } from './create-movie.dto';
import { CreatorDto } from 'src/creators/dtos/creator.dto';

export class MovieToCreatorDto{
    
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    creatorTitle: string;

    @ValidateNested()
    @Type(()=>CreateMovieDto)
    movie: CreateMovieDto

    @ValidateNested()
    @Type(()=>CreatorDto)
    creator: CreatorDto
}