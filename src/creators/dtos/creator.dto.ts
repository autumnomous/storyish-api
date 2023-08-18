import {IsOptional, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import { NameDto } from 'src/shared/dtos/name.dto';
import { MediaToCreatorDto } from 'src/shared/dtos/mediatocreator.dto';

export class CreatorDto{

    @IsOptional()
    id:string;

    @ValidateNested()
    @Type(()=>NameDto)
    name: NameDto

    @ValidateNested()
    @Type(()=> MediaToCreatorDto)
    mediaToCreators: MediaToCreatorDto;

}