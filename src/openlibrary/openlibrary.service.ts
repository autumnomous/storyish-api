import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenlibraryService {

    search(title?:string, author?:string, subject?:string, place?:string, person?:string, language?:string, publisher?:string ): Object{
        const search_url = "https://openlibrary.org/search.json?";
        const query_parameters = {"title":title,"author":author, "subject":subject,"place":place, "person":person, "language":language,"publisher":publisher}
        
        function isDefined(value){
            if(typeof value !== 'undefined'){
                return true;
            }

            return false;
        }

        // turn object into query string
        const defined_values = Object.values(query_parameters).filter(isDefined);

        const query_string = Object.keys(query_parameters).reduce((previous, current)=>{
            return defined_values.includes(query_parameters[current]) ? previous + current + "=" + encodeURIComponent(query_parameters[current]) +"&": previous + ""
        }, "");

        const query_url = search_url + query_string.slice(0, query_string.length - 1); // remove trailing '&'
    
        const result = axios.get(query_url).then(function(response){
            return response.data;
        }).catch(function(error){
            throw new InternalServerErrorException(error);
        })
        
        return result

    }
}
