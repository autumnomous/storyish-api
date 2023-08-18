import {IsString,IsOptional, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import { MediaToCreatorDto } from 'src/shared/dtos/mediatocreator.dto';

export class CreatorDto{

    @IsOptional()
    id:string;

    @IsString()
    firstName: string;

    @IsString()
    lastName:string;

    @ValidateNested()
    @Type(()=> MediaToCreatorDto)
    mediaToCreators: MediaToCreatorDto;

}