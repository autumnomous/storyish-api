import {IsString,IsOptional,ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MediaDto } from './media.dto';
import { CreatorDto } from 'src/creators/dtos/creator.dto';

export class MediaToCreatorDto{

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    creatorTitle:string;

    @ValidateNested()
    @Type(()=>MediaDto)
    media: MediaDto;

    @ValidateNested()
    @Type(()=>CreatorDto)
    creator: CreatorDto;

}