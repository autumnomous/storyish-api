import { IsString, IsOptional } from 'class-validator';

export class GetMovieDto{

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    creatorFirstName: string;

    @IsString()
    @IsOptional()
    creatorLastName: string;

}