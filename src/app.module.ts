import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movie/movies.module';
import { BooksModule } from './books/books.module';
import { CreatorsModule } from './creators/creators.module';
import { SharedModule } from './shared/shared.module';
import { OpenlibraryModule } from './openlibrary/openlibrary.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),TypeOrmModule.forRoot({
    type: 'sqlite',
    database: __dirname + process.env.DATABASE_NAME,
    entities: [__dirname + '/**/!(exclude)/*.entity{.ts,.js}'],
    synchronize: true, // remove for production
    migrations: [__dirname + '/libs/shared/src/migrations/*{.ts,.js}'],
  }), CreatorsModule, SharedModule,BooksModule, OpenlibraryModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
