import { IsString, IsOptional } from 'class-validator';

export class GetBookDto{

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    author: string;

}