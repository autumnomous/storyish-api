import { Controller, Get, Body } from '@nestjs/common';
import { OpenlibraryService } from './openlibrary.service';
import { SearchOpenLibraryDto } from './dtos/search-openlibrary.dto';

@Controller('openlibrary')
export class OpenlibraryController {

    constructor(public openLibraryService: OpenlibraryService){
    }

    @Get("/search")
    search(@Body() body: SearchOpenLibraryDto){
        return this.openLibraryService.search(body.title, body.author, body.subject, body.place, body.person, body.language, body.publisher)
    }

}
