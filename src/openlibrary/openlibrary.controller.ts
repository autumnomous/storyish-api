import { Controller, Get, Body } from '@nestjs/common';
import { OpenlibraryService } from './openlibrary.service';
import { SearchOpenLibraryDto } from './dtos/search-openlibrary.dto';

@Controller('openlibrary')
export class OpenlibraryController {

    constructor(public openLibraryService: OpenlibraryService){
    }

    @Get("/search")
    search(@Body() body: SearchOpenLibraryDto){
        console.log(body);
        // this.openLibraryService.search(query["q"])
    }

}
