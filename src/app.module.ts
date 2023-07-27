import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CreatorsModule } from './creators/creators.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // remove for production
    migrations: [__dirname + '/libs/shared/src/migrations/*{.ts,.js}'],
  }), CreatorsModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
