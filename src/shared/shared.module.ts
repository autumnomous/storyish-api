import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[],
  providers: [SharedService]
})
export class SharedModule {}
