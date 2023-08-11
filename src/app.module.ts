import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CreatorsModule } from './creators/creators.module';
import { SharedModule } from './shared/shared.module';
import { OpenlibraryModule } from './openlibrary/openlibrary.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: __dirname + process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // remove for production
    migrations: [__dirname + '/libs/shared/src/migrations/*{.ts,.js}'],
  }), CreatorsModule, SharedModule, OpenlibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
