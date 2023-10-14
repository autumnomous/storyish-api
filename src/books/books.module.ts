import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './book.entity';
import { CreatorsService } from 'src/creators/creators.service';
import { Creator } from 'src/creators/creator.entity';
import { BookToCreator } from './booktocreator.entity';
import { BookToCreatorsService } from './booktocreator.service';

@Module({
  imports:[TypeOrmModule.forFeature([Book, Creator, BookToCreator])],
  providers: [BooksService,CreatorsService, BookToCreatorsService],
  controllers: [BooksController]
})
export class BooksModule {}
