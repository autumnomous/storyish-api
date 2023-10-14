import {IsString,IsOptional,ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBookDto } from './create-book.dto';
import { CreatorDto } from 'src/creators/dtos/creator.dto';

export class BookToCreatorDto{

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    creatorTitle:string;

    @ValidateNested()
    @Type(()=>CreateBookDto)
    book: CreateBookDto;

    @ValidateNested()
    @Type(()=>CreatorDto)
    creator: CreatorDto;

}