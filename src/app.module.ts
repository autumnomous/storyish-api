import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true // remove for production
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
