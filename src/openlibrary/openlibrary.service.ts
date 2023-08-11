import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import {Book} from ''

@Injectable()
export class OpenlibraryService {

    search(title: string){
        // https://openlibrary.org/search.json?q=the+lord+of+the+rings
        let search_url = "https://openlibrary.org/search.json?q=";
        // axios.get()
        console.log("hello from the open libary service")

    }
}
