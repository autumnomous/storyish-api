import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaToCreator } from './mediatocreator.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MediaToCreator])],
  providers: [SharedService]
})
export class SharedModule {}
