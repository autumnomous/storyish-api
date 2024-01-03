import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { CreatorsService } from 'src/creators/creators.service';
import { Creator } from 'src/creators/creator.entity';
import { MovieToCreator } from './movietocreator.entity';
import { MovieToCreatorService } from './movietocreator.service';

@Module({
  imports:[TypeOrmModule.forFeature([Movie, Creator, MovieToCreator])],
  controllers: [MoviesController],
  providers: [MoviesService, CreatorsService, MovieToCreatorService]
})
export class MoviesModule {}
