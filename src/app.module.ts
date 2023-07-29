import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CreatorsModule } from './creators/creators.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),TypeOrmModule.forRoot({
    type: 'sqlite',
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // remove for production
    migrations: [__dirname + '/libs/shared/src/migrations/*{.ts,.js}'],
  }), CreatorsModule, SharedModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
