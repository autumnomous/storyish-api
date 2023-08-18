import {IsString,IsOptional } from 'class-validator';
import { Type, Exclude } from 'class-transformer';
import { MediaDto } from './media.dto';
import { CreatorDto } from 'src/creators/dtos/creator.dto';

export class MediaToCreatorDto{

    @IsOptional()
    id:string;

    @IsString()
    @IsOptional()
    creatorTitle:string;

    @Exclude()
    @Type(()=>MediaDto)
    media: MediaDto;

    @Exclude()
    creator: CreatorDto;

}