import { Module } from '@nestjs/common';
import { OpenlibraryController } from './openlibrary.controller';
import { OpenlibraryService } from './openlibrary.service';

@Module({
  controllers: [OpenlibraryController],
  providers: [OpenlibraryService]
})
export class OpenlibraryModule {}
