import {IsOptional, IsISBN, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import { MediaDto } from 'src/shared/dtos/media.dto';

export class CreateBookDto{

    @IsISBN()
    @IsOptional()
    isbn:string;

    @Type(()=>MediaDto)
    @ValidateNested()
    media: MediaDto
}