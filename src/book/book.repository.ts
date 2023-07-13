import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository{

    get(id: string){
        return {"title":"Tarot Therapy", "author":"Leona Nichole Black"}
    }

    all(){

        return [{},{},{}]
    }

    // create(){

    // }


}