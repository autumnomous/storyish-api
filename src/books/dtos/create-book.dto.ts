import { IsString, IsOptional } from 'class-validator';

export class CreateBookDto{
    
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    author: string;
}