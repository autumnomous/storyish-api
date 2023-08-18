import {IsString} from 'class-validator';

export class NameDto{

    @IsString()
    firstName: string;

    @IsString()
    lastName:string;
}